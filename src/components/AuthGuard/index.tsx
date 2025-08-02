// components/AuthGuard.tsx
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { RootState } from 'store/reducers';

const AuthGuard = ({ children }) => {
  const router = useRouter();
  const { authToken } = useSelector((state: RootState) => state.app);
  const protectedRoutes = ['/profile', '/my-resume', '/dashboard'];
  const unProtectedRoutes = ['/'];

  useEffect(() => {
    if (!authToken && protectedRoutes.includes(router.pathname)) {
      router.push('/');
    }
  }, [authToken, router.pathname]);

  useEffect(() => {
    if (authToken && unProtectedRoutes.includes(router.pathname)) {
      router.push('/profile');
    }
  }, [authToken, router.pathname]);

  return <>{children}</>;
};

export default AuthGuard;

