export type ScreenKind =
  | 'BOOT'
  | 'MAIN_MENU'
  | 'ABOUT'
  | 'PROJECTS'
  | 'RESUME'
  | 'CONTACT'
  | 'OPTIONS';

export type GameState = {
  screen: ScreenKind;
  /** cursor position in the main menu, persisted across visits */
  menuCursor: number;
  /** cursor position in scrollable section lists (Projects / Contact) */
  sectionCursor: number;
  /** screen history stack, used by BACK */
  history: ScreenKind[];
};

export type Action =
  | { type: 'BOOT_DONE' }
  | { type: 'MOVE_MENU'; delta: -1 | 1; itemCount: number }
  | { type: 'SET_MENU_CURSOR'; cursor: number }
  | { type: 'MOVE_SECTION'; delta: -1 | 1; itemCount: number }
  | { type: 'SET_SECTION_CURSOR'; cursor: number }
  | { type: 'GOTO'; target: ScreenKind }
  | { type: 'BACK' }
  | { type: 'RESET_SECTION_CURSOR' };

export const initialState: GameState = {
  screen: 'BOOT',
  menuCursor: 0,
  sectionCursor: 0,
  history: [],
};

export function reducer(state: GameState, action: Action): GameState {
  switch (action.type) {
    case 'BOOT_DONE':
      if (state.screen !== 'BOOT') return state;
      return { ...state, screen: 'MAIN_MENU', history: [] };

    case 'MOVE_MENU': {
      const next = wrap(state.menuCursor + action.delta, action.itemCount);
      return { ...state, menuCursor: next };
    }

    case 'SET_MENU_CURSOR':
      return { ...state, menuCursor: Math.max(0, action.cursor) };

    case 'MOVE_SECTION': {
      const next = wrap(state.sectionCursor + action.delta, action.itemCount);
      return { ...state, sectionCursor: next };
    }

    case 'SET_SECTION_CURSOR':
      return { ...state, sectionCursor: Math.max(0, action.cursor) };

    case 'GOTO':
      if (action.target === state.screen) return state;
      return {
        ...state,
        screen: action.target,
        sectionCursor: 0,
        history: [...state.history, state.screen],
      };

    case 'BACK': {
      if (state.history.length === 0) {
        return state.screen === 'MAIN_MENU'
          ? state
          : { ...state, screen: 'MAIN_MENU', sectionCursor: 0 };
      }
      const history = [...state.history];
      const prev = history.pop()!;
      return { ...state, screen: prev, history, sectionCursor: 0 };
    }

    case 'RESET_SECTION_CURSOR':
      return { ...state, sectionCursor: 0 };

    default:
      return state;
  }
}

function wrap(n: number, len: number): number {
  if (len <= 0) return 0;
  return ((n % len) + len) % len;
}
