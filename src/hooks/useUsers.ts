import { useEffect, useState } from 'react';
import { getUsers } from '../api/user';
import { User } from '../api/types';

const useUsers = () => {
    const [users, setUsers] = useState<User[]>([])
    const [loading, setLoading] = useState(false)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [error, setError] = useState<string | null>("")
    
    async function fetchUsers() {
      try {
        setLoading(true)
        const response = await getUsers();
        setUsers(response)
      } catch(error) {
        setError((error as Error).message)
      } finally {
        setLoading(false)
      }
    }

    useEffect(() => {
      fetchUsers()
    }, []);

    return {
      users,
      loading,
      error
    }
}

export default useUsers