import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Router, { useRouter } from 'next/router';
import moment from 'moment';
import { RootState } from 'store/reducers';
import SessionExpiredModal from 'shared/modals/SessionExpiredModal';
import Footer from './Footer';
import LoggedInHeader from './Header/LoggedInHeader';
import NotLoggedInHeader from './Header/NotLoggedInHeader';
import { AppActionType } from 'store/action-types/app.types';
import ToastComponent from 'components/ToastComponent';
import { Tokens } from 'shared/constants/url.constant';
import { Col, Container, Row } from 'react-bootstrap';
import Sidebar from './Sidebar';
import { logoutAction } from 'store/actions/app.actions';

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
    (state: RootState) => state.app
  );
  const { isAccountVerified, profileData } = useSelector((state: RootState) => state.profile);
  const [accountVerified, setAccountVerified] = useState(true);
  const [activeLink, setActiveLink] = useState(router.asPath);
  const [isStaticPage, setStaticPage] = useState(false);
  const [minimized, setMinimized] = useState(true);
  const [sidebarMinimized, setSidebarMinimized] = useState(false);
  const [currentTimestamp, setCurrentTimestamp] = useState(0);
  const [isSessionExpiredPopupOpen, setSessionExpiredPopupState] =
    useState(false);

  Router.events.on('routeChangeComplete', (route) => {
    setStaticPage(staticPages.includes(route) ? true : false);
  });

  useEffect(() => {
    setActiveLink(router.asPath);
  }, [router.asPath]);

  useEffect(() => {
    const isRouteStatic = staticPages.includes(Router.route);
    setStaticPage(isRouteStatic ? true : false);
  }, []);

  useEffect(() => {
    if (authToken) setMinimized(false);
    else setMinimized(true);
  }, [authToken]);

  // useEffect(() => {
  //   if (!authToken) dispatch({ type: AppActionType.OPEN_SIGNIN_MODAL });
  // }, []);

  useEffect(() => {
    if (sessionExpired) setSessionExpiredPopupState(true);
  }, [sessionExpired]);

  // This effect used to compare login time and current time. Logout after 30 min
  useEffect(() => {
    if (!t) return;
    setTimeout(() => setCurrentTimestamp(moment().unix()), 1000);
    const diffTimeInSeconds = currentTimestamp - Number(t);
    if (isSessionExpiredPopupOpen || diffTimeInSeconds < maxTimeInSeconds)
      return;
    logoutonSessionExpire();
  }, [currentTimestamp, t]);

  useEffect(() => {
    if (profileData && !isAccountVerified) setAccountVerified(false);
    else (setAccountVerified(true));
  }, [profileData, isAccountVerified]);

  const logoutonSessionExpire = () => {
    localStorage.clear();
    dispatch(logoutAction({ emailAddress: profileData.emailAddress }));
    Router.push('/');
    dispatch({
      type: AppActionType.SESSION_EXPIRED,
      payload: true,
    });
  };

  const onSessionExpiredSignInButtonClick = () => {
    dispatch({ type: AppActionType.OPEN_SIGNIN_MODAL });
  };

  const renderLoggedInHeader = (authToken: string, isStaticPage: boolean) => {
    if (!authToken) return null;
    if (!isStaticPage) return <LoggedInHeader />;
    return null;
  };

  const renderNotLoggedInHeader = (isStaticPage: boolean) => {
    if (isStaticPage) return <NotLoggedInHeader />;
    return null;
  };

  const renderFooter = (authToken: string, isStaticPage: boolean) => {
    if (!authToken || isStaticPage) return <Footer />;
    return null;
  };

  return (
    <div style={!accountVerified ? bodyStyle : {}}>
      {sessionExpired && (
        <SessionExpiredModal
          openModal={isSessionExpiredPopupOpen}
          setOpenModal={() => onSessionExpiredSignInButtonClick()}
        />
      )}
      {renderLoggedInHeader(authToken, isStaticPage)}
      {renderNotLoggedInHeader(isStaticPage)}
      {!minimized && activeLink !== '/' ? (
        <>
          <Container fluid>
            <Row style={{marginTop: '80px'}}>
              <Col md={2} sm={0} style={{marginTop: '40px'}}>
                <Sidebar 
                  activeLink={activeLink} 
                  setActiveLink={setActiveLink}
                  sidebarMinimized={sidebarMinimized}
                  setSidebarMinimized={setSidebarMinimized}
                />
              </Col>
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
      <ToastComponent />
      {/* {renderFooter(authToken, isStaticPage)} */}
    </div>
  );
};

export default Layout;
