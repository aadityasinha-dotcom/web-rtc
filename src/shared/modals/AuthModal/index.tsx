import React, { useEffect } from 'react';
import { Col, Modal, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/reducers';

import SigninComponent from 'components/AuthComponents/SigninComponent';
import SignupComponent from 'components/AuthComponents/SignupComponent';
import ForgotPasswordComponent from 'components/AuthComponents/ForgotPasswordComponent';
import ForgotPasswordSuccessComponent from 'components/AuthComponents/ForgotPasswordSuccessComponent';
import VerificationComponent from 'components/AuthComponents/VerificationComponent';
import { AppActionType } from 'store/action-types/app.types';
import styles from './auth-modal.module.scss';
import AccountVerificationComponent from 'components/AuthComponents/AccountVerificationComponent';
import { logout } from 'store/actions/app.actions';
import Router from 'next/router';
import { ProfileActionType } from 'store/action-types/profile.types';

interface Props {
  modalType: string;
  openModal: boolean;
  setOpenModal: (type: string, value: boolean) => void;
  data?: any;
}
interface IAuthComponents {
  [key: string]: {
    heading: string;
    component: any;
  };
}
const AuthModal = (props: Props) => {
  const dispatch = useDispatch();
  const { authToken, isRegister, resetPassword, verifyAccount } = useSelector(
    (state: RootState) => state.app
  );
  const { isProfileSuccess } = useSelector((state: RootState) => state.profile);

  const { modalType, openModal, setOpenModal, data } = props;
  const [open, setOpen] = React.useState(false);
  const [selectedComponent, setSelectedComponent] = React.useState('');
  const [forgotPasswordEmail, setForgotPasswordEmail] = React.useState('');
  const [signupData, setSignupData] = React.useState({
    username: undefined,
    phoneNumber: undefined,
    password: undefined,
    category: '',
  });

  useEffect(() => {
    setSelectedComponent(modalType);
  }, [modalType]);

  useEffect(() => {
    setOpen(openModal);
  }, [openModal]);

  useEffect(() => {
    if (authToken) handleClose();
  }, [authToken]);

  useEffect(() => {
    if (!isRegister) handleClose();
    if (isRegister) setSelectedComponent('VERIFICATION');
  }, [isRegister]);

  useEffect(() => {
    if (!resetPassword) handleClose();
    if (resetPassword) setSelectedComponent('FORGOTPASSWORDSUCCESS');
  }, [resetPassword]);

  useEffect(() => {
    if (verifyAccount && !isProfileSuccess) setSelectedComponent('SIGNIN');
    if (isProfileSuccess && verifyAccount && openModal) {
      dispatch({
        type: AppActionType.SET_MSG,
        payload: 'Account verified successfully!'
      });
      handleClose();
    }
  }, [verifyAccount]);

  const handleClose = () => {
    setOpen(false);
    setOpenModal('', false);
    dispatch({ type: AppActionType.CANCEL_AUTH_MODAL });
    if (modalType === 'ACCOUNTVERIFICATION') {
      dispatch(logout);
      dispatch({
        type: ProfileActionType.ACCOUNT_VERIFIED_SUCCESS,
        payload: true,
      });
      localStorage.clear();
      Router.push('/');
    }
  };

  const onClickContinue = ({ emailAddress }: any) => {
    setForgotPasswordEmail(emailAddress);
    setSelectedComponent('FORGOTPASSWORDSUCCESS');
  };

  const authComponents: IAuthComponents = {
    SIGNIN: {
      heading: 'Sign In',
      component: (
        <SigninComponent
          onClickForgotPassword={() => setSelectedComponent('FORGOTPASSWORD')}
        />
      ),
    },
    SIGNUP: {
      heading: 'Sign Up',
      component: (
        <SignupComponent emitSignupData={(data: any) => setSignupData(data)} />
      ),
    },
    FORGOTPASSWORD: {
      heading: 'Password Recovery',
      component: (
        <ForgotPasswordComponent
          onClickContinue={(formData: any) => onClickContinue(formData)}
          onClickBackToSignIn={() => setSelectedComponent('SIGNIN')}
        />
      ),
    },
    FORGOTPASSWORDSUCCESS: {
      heading: 'Reset your password',
      component: (
        <ForgotPasswordSuccessComponent
          emailAddress={forgotPasswordEmail}
          onClickBackToSignIn={() => setSelectedComponent('SIGNIN')}
        />
      ),
    },
    VERIFICATION: {
      heading: 'Verification',
      component: (
        <VerificationComponent
          username={signupData.username}
          phoneNumber={signupData.phoneNumber}
          password={signupData.password}
          category={signupData.category}
        />
      ),
    },
    ACCOUNTVERIFICATION: {
      heading: 'Account Verification',
      component: (
        <AccountVerificationComponent
          data={data}
          emitAccountVerificationData={(data: any) => setSignupData(data)}
        />
      ),
    },
  };

  return (
    <Modal
      show={open}
      className={styles.authModalContainer}
      onHide={handleClose}
      onEscapeKeyDown={handleClose}
    >
      <div className='header'>
        <Row>
          <Col sm={8} md={8} lg={8}>
            <h5 className='heading'>
              {selectedComponent && authComponents[selectedComponent].heading}
            </h5>
          </Col>
          <Col sm={4} md={4} lg={4}>
            <div onClick={handleClose}>
              <img src='/svg/q-circle.svg' className='circle' alt='Cancel' />
              <img
                src='/svg/cross-black.svg'
                className='cancelBtn'
                alt='Cancel'
              />
            </div>
          </Col>
        </Row>
        {selectedComponent && authComponents[selectedComponent].component}
      </div>
    </Modal>
  );
};

export default AuthModal;
