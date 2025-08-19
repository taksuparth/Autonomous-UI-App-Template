import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router';
import { axiosClient } from '@/lib/axios';

export function useLogout() {
  const navigate = useNavigate();

  const {
    mutate: logout,
    isPending: isLoading,
    error,
  } = useMutation({
    mutationKey: ['logout'],
    mutationFn: () => {
      return axiosClient.post('/api/auth/logout');
    },
    onSuccess: () => {
      navigate('/login', { replace: true });
    },
  });

  return { logout, isLoading, error };
}
