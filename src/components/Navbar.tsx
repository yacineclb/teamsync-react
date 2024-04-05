import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-6 px-12">
      <h1 className="font-bold text-3xl">TeamSync</h1>
      <div className="flex gap-6">
        <Link to="/">Dashboard</Link>
        <Link to="/teams">Teams</Link>
        <Link to="/issues">Issues</Link>
        <Link to="/me">Profile</Link>
        <Link to="/notifs">Notifications</Link>
      </div>
    </nav>
  );
}
