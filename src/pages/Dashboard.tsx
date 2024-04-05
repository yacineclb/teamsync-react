import DashboardCard from '../components/DashboardCard';
import DashboardIssues from '../components/DashboardIssues';
import DashboardLastIssues from '../components/DashboardLastIssues';
import useUsers from '../hooks/useUsers';
import { User } from '../api/types';

export default function Dashboard() {
  const {users, loading, error} = useUsers()

  return (
    <div className="w-full h-full p-12">
      <main className="">
        <h1 className="text-3xl font-bold underline">Dashboard</h1>
        {loading && <p>Loading...</p>}
        {users.map((u: User) => {
          return (
            <div key={u.id}>
              <p>{u.name}</p>
            </div>
          );
        })}
        {error && <p>{error}</p>}
        <section className="grid grid-cols-2 gap-6">
          <DashboardIssues />
          <DashboardLastIssues />
          <DashboardCard>
            <DashboardCard.Title>Project progress</DashboardCard.Title>
            <DashboardCard.Body>This is a beautful card</DashboardCard.Body>
          </DashboardCard>
          <DashboardCard>
            <DashboardCard.Title>Issues Killer</DashboardCard.Title>
            <DashboardCard.Body>This is a beautful card</DashboardCard.Body>
          </DashboardCard>
        </section>
      </main>
    </div>
  );
}
