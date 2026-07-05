import { useEffect, useMemo, useState, type FormEvent } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';
import { loginApi, registerApi } from '../core/api/app.api';
import { Tokens } from '../shared/constants/url.constant';
import styles from '../styles/Auth.module.scss';

type Mode = 'login' | 'signup';

const getToken = (data: any) =>
  data?.jwt || data?.token || data?.accessToken || data?.data?.jwt || data?.data?.token;

const AuthPage: NextPage = () => {
  const router = useRouter();
  const [mode, setMode] = useState<Mode>('login');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loginForm, setLoginForm] = useState({ emailAddress: '', password: '' });
  const [signupForm, setSignupForm] = useState({
    username: '',
    emailAddress: '',
    password: '',
    confirmPassword: '',
  });

  useEffect(() => {
    const nextMode = router.query.mode === 'signup' ? 'signup' : 'login';
    setMode(nextMode);
  }, [router.query.mode]);

  const headline = useMemo(
    () => (mode === 'login' ? 'Welcome back' : 'Create your account'),
    [mode]
  );

  const storeToken = (token?: string) => {
    if (!token || typeof window === 'undefined') return;
    localStorage.setItem(Tokens.TALENTEZZY_AUTH_TOKEN, token);
    localStorage.setItem('token', token);
  };

  const submitLogin = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    setMessage('');

    try {
      const response: any = await loginApi(loginForm);
      if (response.data?.message === 'ERROR') throw new Error(response.data?.description || 'Login failed');
      storeToken(getToken(response.data));
      setMessage('Logged in successfully.');
      router.replace('/');
    } catch (err: any) {
      setError(err.message || 'Login failed.');
    } finally {
      setLoading(false);
    }
  };

  const submitSignup = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    setMessage('');

    if (signupForm.password !== signupForm.confirmPassword) {
      setError('Passwords do not match.');
      setLoading(false);
      return;
    }

    try {
      const response: any = await registerApi(signupForm);
      if (response.data?.message === 'ERROR') throw new Error(response.data?.description || 'Signup failed');
      storeToken(getToken(response.data));
      setMessage('Account created successfully.');
      router.replace('/');
    } catch (err: any) {
      setError(err.message || 'Signup failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.main className={styles.page} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className={styles.backdrop} />
      <section className={styles.shell}>
        <motion.div className={styles.hero} initial={{ x: -18, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
          <p className={styles.kicker}>Secure access</p>
          <h1>{headline}</h1>
          <p>
            Login or sign up to save your session token in local storage and continue.
          </p>
        </motion.div>

        <motion.div className={styles.card} initial={{ x: 18, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
          <div className={styles.tabs}>
            <button className={mode === 'login' ? styles.activeTab : ''} onClick={() => setMode('login')} type="button">
              Login
            </button>
            <button className={mode === 'signup' ? styles.activeTab : ''} onClick={() => setMode('signup')} type="button">
              Sign up
            </button>
          </div>

          {error ? <p className={styles.error}>{error}</p> : null}
          {message ? <p className={styles.message}>{message}</p> : null}

          <AnimatePresence mode="wait">
            {mode === 'login' ? (
              <motion.form
                key="login"
                className={styles.form}
                onSubmit={submitLogin}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 16 }}
              >
                <input
                  value={loginForm.emailAddress}
                  onChange={(e) => setLoginForm({ ...loginForm, emailAddress: e.target.value })}
                  type="email"
                  placeholder="Email address"
                  required
                />
                <input
                  value={loginForm.password}
                  onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                  type="password"
                  placeholder="Password"
                  required
                />
                <button type="submit" disabled={loading}>
                  {loading ? 'Signing in...' : 'Login'}
                </button>
              </motion.form>
            ) : (
              <motion.form
                key="signup"
                className={styles.form}
                onSubmit={submitSignup}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
              >
                <input
                  value={signupForm.username}
                  onChange={(e) => setSignupForm({ ...signupForm, username: e.target.value })}
                  type="text"
                  placeholder="Username"
                  required
                />
                <input
                  value={signupForm.emailAddress}
                  onChange={(e) => setSignupForm({ ...signupForm, emailAddress: e.target.value })}
                  type="email"
                  placeholder="Email address"
                  required
                />
                <input
                  value={signupForm.password}
                  onChange={(e) => setSignupForm({ ...signupForm, password: e.target.value })}
                  type="password"
                  placeholder="Password"
                  required
                />
                <input
                  value={signupForm.confirmPassword}
                  onChange={(e) => setSignupForm({ ...signupForm, confirmPassword: e.target.value })}
                  type="password"
                  placeholder="Confirm password"
                  required
                />
                <button type="submit" disabled={loading}>
                  {loading ? 'Creating account...' : 'Sign up'}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </section>
    </motion.main>
  );
};

export default AuthPage;
