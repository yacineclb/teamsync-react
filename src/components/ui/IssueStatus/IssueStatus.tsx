import React from 'react';
import { IssueStatus as IssuesStatusType } from '../../../api/types';

type IssueStatusProps = {
  status: IssuesStatusType;
};

export default function IssueStatus({ status }: IssueStatusProps) {
  const label = computeLabel(status);

  function computeLabel(status: IssuesStatusType) {
    switch (status) {
      case IssuesStatusType.TODO:
        return 'To Do';
      case IssuesStatusType.IN_PROGRESS:
        return 'In Progress';
      case IssuesStatusType.DONE:
        return 'Done';
      case IssuesStatusType.BLOCKED:
        return 'Blocked';
      default:
        throw new Error('Invalid status');
    }
  }

  function computeColor(status: IssuesStatusType) {
    switch (status) {
      case IssuesStatusType.TODO:
        return 'bg-[#DDF9E3]';
      case IssuesStatusType.IN_PROGRESS:
        return 'bg-[#FFEDCE]';
      case IssuesStatusType.DONE:
        return 'bg-[#f3f4f6]';
      case IssuesStatusType.BLOCKED:
        return 'bg-[#FFE2E6]';
      default:
        throw new Error('Invalid status');
    }
  }

  return (
    <div>
      <span className={`w-fit py-1 px-2 rounded ${computeColor(status)}`}>{label}</span>
    </div>
  );
}
