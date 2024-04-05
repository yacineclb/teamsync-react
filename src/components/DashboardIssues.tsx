import React from 'react';
import DashboardCard from './DashboardCard';
import TaskCard from './TaskCard';

export default function DashboardIssues() {
  return (
    <DashboardCard>
      <DashboardCard.Title>Issues</DashboardCard.Title>
      <DashboardCard.Body>
        <div className="grid grid-cols-4 gap-6">
          <TaskCard number={12} text="To do" />
          <TaskCard number={4} text="In progress" />
          <TaskCard number={96} text="Done" />
          <TaskCard number={2} text="Blocked" />
        </div>
      </DashboardCard.Body>
    </DashboardCard>
  );
}
