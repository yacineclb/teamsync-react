import React from 'react';
import DashboardCard from './DashboardCard';
import TaskCard from './TaskCard';
import { Issue, IssueStatus } from '../api/types';

type DashboardIssuesProps = {
  issues: Issue[];
};

export default function DashboardIssues({ issues }: DashboardIssuesProps) {
  const todo = issues.filter((issue) => issue.status === IssueStatus.TODO).length;
  const in_progress = issues.filter((issue) => issue.status === IssueStatus.IN_PROGRESS).length;
  const done = issues.filter((issue) => issue.status === IssueStatus.DONE).length;
  const blocked = issues.filter((issue) => issue.status === IssueStatus.BLOCKED).length;
  console.log('Issues from child component:', issues);
  return (
    <DashboardCard>
      <DashboardCard.Title>Issues</DashboardCard.Title>
      <DashboardCard.Body>
        <div className="flex flex-wrap items-center gap-6">
          <TaskCard number={todo} text="To do" />
          <TaskCard number={in_progress} text="In progress" />
          <TaskCard number={done} text="Done" />
          <TaskCard number={blocked} text="Blocked" />
        </div>
      </DashboardCard.Body>
    </DashboardCard>
  );
}
