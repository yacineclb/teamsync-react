import React from 'react';
import DashboardCard from './DashboardCard';
import { Issue } from '../api/types';
import IssueStatus from './ui/IssueStatus/IssueStatus';

type DashboardLastIssuesProps = {
  issues: Issue[];
};

export default function DashboardLastIssues({ issues }: DashboardLastIssuesProps) {
  return (
    <DashboardCard>
      <DashboardCard.Title>Last issues created</DashboardCard.Title>
      <DashboardCard.Body>
        <ul className="flex flex-col gap-4">
          {issues.map((issue) => {
            return (
              <li key={issue.id} className="grid grid-cols-4 items-center py-2 rounded">
                <span className="">{issue.title}</span>
                <IssueStatus status={issue.status} />
                <div className="flex gap-2 items-center">
                  <img className="rounded-full w-25 h-25" src="https://picsum.photos/25/25" alt="" />
                  <span>Yacine Chalabi</span>
                </div>
                <span className="text-right">Read more</span>
              </li>
            );
          })}
        </ul>
      </DashboardCard.Body>
    </DashboardCard>
  );
}
