import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Button from './ui/Button/Button';
import useSign from '../hooks/useSign';

export default function Sidebar() {
  const { logout } = useSign();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login', { replace: true });
  };

  return (
    <nav className="flex flex-col gap-12 py-12 px-12 bg-white w-fit">
      <h1 className="font-bold text-3xl">TeamSync</h1>
      <div className="flex flex-col">
        <NavLink
          className={({ isActive }) => `py-2 px-3 rounded-lg ${isActive && 'bg-primary text-white font-semibold'}`}
          to="/dashboard"
        >
          Dashboard
        </NavLink>
        <NavLink
          className={({ isActive }) => `py-2 px-3 rounded-lg ${isActive && 'bg-primary text-white font-semibold'}`}
          to="/teams"
        >
          Teams
        </NavLink>
        <NavLink
          className={({ isActive }) => `py-2 px-3 rounded-lg ${isActive && 'bg-primary text-white font-semibold'}`}
          to="/issues"
        >
          Issues
        </NavLink>
        <NavLink className={({ isActive }) => `py-2 px-3 rounded-lg ${isActive && 'bg-primary text-white'}`} to="/me">
          Profile
        </NavLink>
        <NavLink
          className={({ isActive }) => `py-2 px-3 rounded-lg ${isActive && 'bg-primary text-white'}`}
          to="/notifs"
        >
          Notifications
        </NavLink>
      </div>
      <Button className="mt-auto w-fit" onClick={handleLogout}>
        Logout
      </Button>
    </nav>
  );
}
