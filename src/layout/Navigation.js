import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PersonIcon from '@material-ui/icons/Person';

import '../styles/Navigation.css';
import { Badge } from '@material-ui/core';
import { useNotification } from '../providers/NotificationProvider';

function NavAction({ navigate, ...rest }) {
  return <BottomNavigationAction {...rest} />;
}

export default function() {
  return <>
    <BottomNavigation className="bottomNavigation" >
      <Link to="/notifications">
        <NavAction icon={<NotificationAction />} />
      </Link>
      <Link to="/">
        <NavAction icon={<HomeIcon />} />
      </Link>
      <Link to="/profile">
        <NavAction icon={<PersonIcon />} />
      </Link>
    </BottomNavigation>
  </>;
};

const NotificationAction = () => {
  const { failedToLoad, notifications } = useNotification();
  const [ unreadCount, setUnreadCount ] = useState(0);
 
  useEffect(() => {
    const unreadCount = notifications.filter(({ read }) => !read).length;
    setUnreadCount(unreadCount);
  }, [ notifications ]);
  
  return (
    <Badge
      badgeContent={failedToLoad ? `!` : unreadCount}
      color={failedToLoad ? `error` : `primary`}
    >
      <NotificationsIcon />
    </Badge>
  );
};
