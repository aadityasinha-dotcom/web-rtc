import React from 'react';
import Router, { useRouter } from 'next/router';
import { LOGIN_TYPE, Tokens } from 'shared/constants/url.constant';
// import { Amplify } from 'aws-amplify';
// import awsExports from 'aws-exports';
import { useDispatch } from 'react-redux';
import { AppActionType } from 'store/action-types/app.types';
import { Spinner } from 'react-bootstrap';

// Amplify.configure({ ...awsExports, ssr: true });

const OAuth2RedirectHandler = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  console.log(router.query);
  const hasToken = new Object(router.query).hasOwnProperty('token');
  const hasCCM = new Object(router.query).hasOwnProperty('C_C_M');
  if (hasToken || hasCCM) {
    const token: any = router.query.token || router.query.C_C_M;
    dispatch({ type: AppActionType.LOGIN_SUCCESS, payload: token });
    localStorage.setItem(Tokens.TALENTEZZY_AUTH_TOKEN, token);
    localStorage.setItem(Tokens.LOGIN_TYPE, LOGIN_TYPE.SOCIAL);
    dispatch({
      type: AppActionType.SET_LOGIN_TYPE,
      payload: LOGIN_TYPE.SOCIAL,
    });
    Router.push('/profile');
  } else if (new Object(router.query).hasOwnProperty('error')) {
    Router.push('/');
  }
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Spinner animation='border' variant='secondary' />
    </div>
  );
};

export default OAuth2RedirectHandler;
