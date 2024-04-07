import { useCallback, useEffect, useState } from 'react';
import { Issue } from '../api/types';
import { getIssue, getIssues } from '../api/issue';

const useIssueQuery = (issueId: number | null = null) => {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchIssues = useCallback(async () => {
    try {
      setError(null);
      setLoading(true);

      if (issueId) {
        const response = await getIssue(issueId);
        setIssues(response ? [response] : []);
      } else {
        const response = await getIssues();
        setIssues(response);
      }
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  }, [issueId]);

  useEffect(() => {
    fetchIssues();
  }, [fetchIssues]);

  return {
    issues,
    loading,
    error,
    refetchIssues: fetchIssues,
  };
};

export default useIssueQuery;
