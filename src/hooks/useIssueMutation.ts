import { useState } from 'react';
import { Issue } from '../api/types';
import { addIssue } from '../api/issue';

const useIssueMutation = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>('');

  async function createIssue(newIssue: Issue) {
    try {
      setLoading(true);
      await addIssue(newIssue);
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

export default useIssueMutation;
