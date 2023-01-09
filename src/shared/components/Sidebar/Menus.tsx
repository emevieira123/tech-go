import { RxHome } from 'react-icons/rx';
import { CgFileDocument } from 'react-icons/cg';
import { ImStopwatch } from 'react-icons/im';
import { RiMoneyDollarBoxLine } from 'react-icons/ri';
import { FiUsers, FiSettings } from 'react-icons/fi';
import { URLS } from '../../../infra/URLS';

export const Menus = [
  { 
    title: 'Home', 
    src: URLS.HOME, 
    icon: <RxHome size={25} />
  },
  { 
    title: 'Pomodoro', 
    src: URLS.POMODORO, 
    icon: <ImStopwatch size={25} />
  },
  { 
    title: 'Documents', 
    src: URLS.DOCUMENT, 
    icon: <CgFileDocument size={25} />
  },
  { 
    title: 'Finance', 
    src: URLS.FINANCE, 
    icon: <RiMoneyDollarBoxLine size={25} />
  },
  { 
    title: 'Users', 
    src: URLS.USERS, 
    icon: <FiUsers size={25} />
  },
  { 
    title: 'Setting', 
    src: URLS.SETTING, 
    icon: <FiSettings size={25} />
  },
];