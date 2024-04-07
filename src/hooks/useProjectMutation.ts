import { useState } from 'react';
import { addProject } from '../api/project';
import { Project } from '../api/types';

const useProjectMuation = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>('');

  async function createProject(newProject: Project) {
    try {
      setError(null);
      setLoading(true);
      await addProject(newProject);
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  }

  return {
    createProject,
    loading,
    error,
  };
};

export default useProjectMuation;
