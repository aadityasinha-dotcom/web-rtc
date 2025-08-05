import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../store';
import Layout from '../layout';
import AuthGuard from '../components/AuthGuard';
// import { Amplify } from 'aws-amplify';
// import awsExports from 'aws-exports';

// Amplify.configure({ ...awsExports, ssr: true });
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <AuthGuard>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthGuard>
    </Provider>
  );
}

export default MyApp;
