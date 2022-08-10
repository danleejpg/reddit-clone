import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import Header from '../components/Header';
import { ApolloProvider } from '@apollo/client';
import client from '../apollo-client';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    // Wrapping the component in the provider allows us to use the hooks
    // in the next auth library
    <ApolloProvider client={client}>
      <SessionProvider session={session}>
        <div className='h-screen overflow-y-scroll bg-slate-200'>
          {/* Having the header here means that
            the header exists on every page */}
          <Header />
          <Component {...pageProps} />
        </div>
      </SessionProvider>
    </ApolloProvider>
  );
}

export default MyApp;
