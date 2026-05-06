import { useCallback, useEffect, useRef } from 'react';

export type SfxName = 'move' | 'confirm' | 'back' | 'boot';

/**
 * Procedurally generated SFX via Web Audio API. Avoids shipping audio assets
 * for v1; swap to HTMLAudioElement + .wav files later if richer sounds are
 * desired.
 */
type Tone = {
  freq: number;
  duration: number;
  type: OscillatorType;
  gain: number;
  sweepTo?: number;
};

const TONES: Record<SfxName, Tone[]> = {
  move: [{ freq: 660, duration: 0.05, type: 'square', gain: 0.08 }],
  confirm: [
    { freq: 520, duration: 0.06, type: 'square', gain: 0.1 },
    { freq: 880, duration: 0.12, type: 'square', gain: 0.1, sweepTo: 1200 },
  ],
  back: [{ freq: 280, duration: 0.1, type: 'square', gain: 0.08, sweepTo: 180 }],
  boot: [
    { freq: 220, duration: 0.12, type: 'sawtooth', gain: 0.12 },
    { freq: 440, duration: 0.12, type: 'sawtooth', gain: 0.12 },
    { freq: 880, duration: 0.18, type: 'square', gain: 0.12, sweepTo: 1320 },
  ],
};

export function useSfx(volume: number = 0.6) {
  const ctxRef = useRef<AudioContext | null>(null);
  const volRef = useRef(volume);

  useEffect(() => {
    volRef.current = volume;
  }, [volume]);

  // Resume the AudioContext on first user gesture (browsers block autoplay).
  useEffect(() => {
    const ensure = () => {
      if (!ctxRef.current) {
        const Ctor =
          window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext })
            .webkitAudioContext;
        ctxRef.current = new Ctor();
      }
      if (ctxRef.current.state === 'suspended') ctxRef.current.resume();
    };
    const events: Array<keyof WindowEventMap> = ['keydown', 'pointerdown', 'touchstart'];
    events.forEach((e) => window.addEventListener(e, ensure, { once: false }));
    return () => events.forEach((e) => window.removeEventListener(e, ensure));
  }, []);

  const play = useCallback((name: SfxName) => {
    const ctx = ctxRef.current;
    if (!ctx || volRef.current <= 0) return;

    let when = ctx.currentTime;
    for (const tone of TONES[name]) {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = tone.type;
      osc.frequency.setValueAtTime(tone.freq, when);
      if (tone.sweepTo != null) {
        osc.frequency.exponentialRampToValueAtTime(tone.sweepTo, when + tone.duration);
      }
      const peak = tone.gain * volRef.current;
      gain.gain.setValueAtTime(0, when);
      gain.gain.linearRampToValueAtTime(peak, when + 0.005);
      gain.gain.exponentialRampToValueAtTime(0.0001, when + tone.duration);
      osc.connect(gain).connect(ctx.destination);
      osc.start(when);
      osc.stop(when + tone.duration + 0.02);
      when += tone.duration;
    }
  }, []);

  return play;
}
