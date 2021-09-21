import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import LoginIcon from '@mui/icons-material/Login';
import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';
export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Booths Reports',
    path: '/booth',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Team Member',
    path: '/userlist',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Place Assigned',
    path: '/assignedist',
    icon: <PersonPinCircleIcon />,
    cName: 'nav-text'
  }


];
