import { useGame } from './GameContext';
import { BootScreen } from '../screens/BootScreen';
import { MainMenu } from '../screens/MainMenu';
import { AboutScreen } from '../screens/AboutScreen';
import { ProjectsScreen } from '../screens/ProjectsScreen';
import { ResumeScreen } from '../screens/ResumeScreen';
import { ContactScreen } from '../screens/ContactScreen';
import { OptionsScreen } from '../screens/OptionsScreen';

export function Routes() {
  const { state } = useGame();
  switch (state.screen) {
    case 'BOOT':
      return <BootScreen />;
    case 'MAIN_MENU':
      return <MainMenu />;
    case 'ABOUT':
      return <AboutScreen />;
    case 'PROJECTS':
      return <ProjectsScreen />;
    case 'RESUME':
      return <ResumeScreen />;
    case 'CONTACT':
      return <ContactScreen />;
    case 'OPTIONS':
      return <OptionsScreen />;
  }
}
