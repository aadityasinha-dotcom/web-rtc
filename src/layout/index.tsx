import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Router, { useRouter } from 'next/router';
import moment from 'moment';
import { RootState } from 'store/reducers';
import SessionExpiredModal from 'shared/modals/SessionExpiredModal';
import Footer from './Footer';
import LoggedInHeader from './Header/LoggedInHeader';
import NotLoggedInHeader from './Header/NotLoggedInHeader';
import { AppActionType } from '../store/action-types/app.types';
import { Tokens } from 'shared/constants/url.constant';
import { Col, Container, Row } from 'react-bootstrap';
import { logoutAction } from '../store/actions/app.actions';

const bodyStyle = {
  filter: 'blur(4px)'
}

const Layout = ({ children }: any) => {
  const maxTimeInSeconds = 3600;
  const staticPages = [
    '/',
    '/aboutus',
    '/features',
    '/blogs',
    '/terms-of-service',
    '/privacy-policy',
    '/cookie-policy',
  ];
  // typeof window !== 'undefined' && localStorage.setItem(Tokens.TALENTEZZY_AUTH_TOKEN, 'wdcevtrbf34r34drfc5trf5');

  const dispatch = useDispatch();
  const router = useRouter();
  const { authToken, sessionExpired, t } = useSelector(
    (state: RootState) => state.auth
  );
  const [accountVerified, setAccountVerified] = useState(true);
  const [activeLink, setActiveLink] = useState(router.asPath);
  const [isStaticPage, setStaticPage] = useState(false);
  const [minimized, setMinimized] = useState(true);
  const [sidebarMinimized, setSidebarMinimized] = useState(false);
  const [currentTimestamp, setCurrentTimestamp] = useState(0);
  const [isSessionExpiredPopupOpen, setSessionExpiredPopupState] =
    useState(false);


  const logoutonSessionExpire = () => {
    localStorage.clear();
    dispatch(logoutAction({ emailAddress: profileData.emailAddress }));
    Router.push('/');
    dispatch({
      type: AppActionType.SESSION_EXPIRED,
      payload: true,
    });
  };


  return (
    <div style={!accountVerified ? bodyStyle : {}}>
      {!minimized && activeLink !== '/' ? (
        <>
          <Container fluid>
            <Row style={{marginTop: '80px'}}>
              <Col 
                md={10} 
                sm={12} 
                style={{
                  marginLeft: sidebarMinimized ? '-150px' : '0px',
                  transition: 'margin-left 0.3s ease-in-out'
                }}
              >
                {children}
              </Col>
            </Row>
          </Container>
        </>
      ) : (
        <>
          <Row style={{marginTop: '-60px'}}>
            <Col md={12} sm={12}>{children}</Col>
          </Row>
        </>
      )}
      {/* <ToastComponent /> */}
      {/* {renderFooter(authToken, isStaticPage)} */}
    </div>
  );
};

export default Layout;
