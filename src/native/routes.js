import Home from './modules/Home';
import Profile from './modules/Profile';
import Signup from './modules/Signup';
import Todos from './modules/Todos';

import { sidebarMessages } from '../universal/messages';

export const home = { RouteView: Home };

export const user = [
  home,
  { menuMessage: sidebarMessages.profile, RouteView: Profile },
  { menuMessage: sidebarMessages.todos, RouteView: Todos },
];

export const noUser = [
  home,
  { menuMessage: sidebarMessages.signup, RouteView: Signup },
];