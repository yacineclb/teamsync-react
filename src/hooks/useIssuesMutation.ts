import { useState } from 'react';
import { Issue } from '../api/types';
import { addIssue } from '../api/issue';

const useIssuesMutation = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>('');

  async function createIssue(newIssues: Issue) {
    try {
      setLoading(true);
      await addIssue(newIssues);
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  }

  return {
    createIssue,
    loading,
    error,
  };
};

export default useIssuesMutation;
