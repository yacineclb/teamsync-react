import { useCallback, useEffect, useState } from 'react';
import { Project } from '../api/types';
import { getProject, getProjects } from '../api/project';

const useProjectQuery = (projectId: number | null = null) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>('');

  const fetchProjects = useCallback(async () => {
    try {
      setLoading(true);

      if (projectId) {
        const response = await getProject(projectId);
        setProjects(response ? [response] : []);
      } else {
        const response = await getProjects();
        setProjects(response);
      }
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  }, [projectId]);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  return {
    projects,
    loading,
    error,
    refetchProjects: fetchProjects,
  };
};

export default useProjectQuery;
