import { useNavigate } from 'react-router-dom';
import DashboardIssues from '../components/DashboardIssues';
import DashboardLastIssues from '../components/DashboardLastIssues';
import useIssueQuery from '../hooks/useIssueQuery';
import useSign from '../hooks/useSign';
import { useEffect } from 'react';

export default function Dashboard() {
  const { token } = useSign();
  const { issues, loading: loadingQuery } = useIssueQuery();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) navigate('/', { replace: true });
  }, [navigate, token]);

  return (
    <div className="w-full h-full p-12">
      <main className="">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        {loadingQuery && <p>Loading...</p>}
        {!loadingQuery && (
          <section className="grid grid-cols-2 gap-6">
            <DashboardIssues issues={issues} />
            <DashboardLastIssues issues={issues.slice(0, 5)} />
          </section>
        )}
      </main>
    </div>
  );
}
