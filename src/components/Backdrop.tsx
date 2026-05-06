import { useGame } from '../game/GameContext';
import type { ScreenKind } from '../game/stateMachine';
import { HubScene } from '../scenes/HubScene';
import { AboutScene } from '../scenes/AboutScene';
import { ProjectsScene } from '../scenes/ProjectsScene';
import { ResumeScene } from '../scenes/ResumeScene';
import { ContactScene } from '../scenes/ContactScene';

const SCENE_ORDER: ScreenKind[] = [
  'MAIN_MENU',
  'ABOUT',
  'PROJECTS',
  'RESUME',
  'CONTACT',
];

/** BOOT and OPTIONS share the HUB scene so the backdrop is never empty. */
function visibleScreen(screen: ScreenKind): ScreenKind {
  if (screen === 'BOOT' || screen === 'OPTIONS') return 'MAIN_MENU';
  return screen;
}

export function Backdrop() {
  const { state } = useGame();
  const target = visibleScreen(state.screen);
  const index = Math.max(0, SCENE_ORDER.indexOf(target));

  return (
    <div className="backdrop" aria-hidden="true">
      <div
        className="backdrop__world"
        style={{ transform: `translate3d(${-index * 100}vw, 0, 0)` }}
      >
        <div className="backdrop__pane" data-character="system">
          <HubScene />
        </div>
        <div className="backdrop__pane" data-character="gojo">
          <AboutScene />
        </div>
        <div className="backdrop__pane" data-character="sukuna">
          <ProjectsScene />
        </div>
        <div className="backdrop__pane" data-character="megumi">
          <ResumeScene />
        </div>
        <div className="backdrop__pane" data-character="yuji">
          <ContactScene />
        </div>
      </div>
      <div className="backdrop__vignette" />
    </div>
  );
}
