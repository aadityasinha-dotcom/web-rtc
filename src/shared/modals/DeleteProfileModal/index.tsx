import React, { useState, useEffect } from 'react';
import { Col, Modal, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/reducers';

import DeleteProfileForm from 'components/ProfileComponents/DeleteProfileFormComponenet';
import VerificationComponent from 'components/AuthComponents/VerificationComponent';
import TalentezzyPasswordInput from 'core/components/TalentezzyPasswordInput';
import { deleteProfileAction } from "store/actions/app.actions";
import TalentezzyButton from 'core/components/TalentezzyButton';
import { Form } from 'react-bootstrap';
import { AppActionType } from 'store/action-types/app.types';
import styles from './delete-profile-modal.module.scss';
import { logout } from 'store/actions/app.actions';
import Router from 'next/router';

interface Props {
  modalType: string;
  openModal: boolean;
  setOpenModal: (type: string, value: boolean) => void;
  data?: any;
}

const DeleteProfileModal = (props: Props) => {
  const dispatch = useDispatch();
  const { authToken, verifyAccount } = useSelector(
    (state: RootState) => state.app
  );

  const { modalType, openModal, setOpenModal, data } = props;
  const [open, setOpen] = React.useState(false);
  const [formSubmitted, setSubmitState] = useState<boolean>(false);
  const [isLoading, setLoadingState] = useState<boolean>(false);
  const [logoutTime, setLogoutTime] = useState<number>(20);
  const [wrongFormSubmitted, setWrongSubmitState] = useState<boolean>(false);
  const {
    profileData,
    isProfileSuccess,
    isImageUploadSuccess,
    profilePicTure,
  } = useSelector((state: RootState) => state.profile);
  const [signupData, setSignupData] = useState({
    username: undefined,
    phoneNumber: undefined,
    password: undefined,
    category: '',
  });
  const [formState, setFormState] = useState({
      email: {
      value: undefined,
      valid: false,
    },
  });

  useEffect(() => {
    if (verifyAccount && openModal) setTimeout(() => setLogoutTime(logoutTime - 1), 1000);
  }, [logoutTime, verifyAccount]);

  useEffect(() => {
    if (verifyAccount && openModal) {
      setTimeout(() => forceLogout(), 21000);
    }
  }, [verifyAccount]);

  useEffect(() => {
    setOpen(openModal);
  }, [openModal]);

  useEffect(() => {
    if (authToken) handleClose();
  }, [authToken]);

  const onSubmitClick = (event: any) => {
    event.preventDefault();
    const { email } = formState;
    if (email.value != profileData.emailAddress) {
      setWrongSubmitState(true);
      return
    } else {
      setSubmitState(true);
      dispatch(deleteProfileAction());
    }
    // console.log(formState);
    // if (emailAddress.value != profileData.emailAddress) return;
  };

  const handleFormOnChange = (fieldName: string, data: any) => {
    setFormState({
      ...formState,
      [fieldName]: data,
    });
  };

  const handleClose = () => {
    setOpen(false);
    setOpenModal('', false);
    dispatch({ type: AppActionType.CANCEL_AUTH_MODAL });
    if (verifyAccount) forceLogout();
  };

  const forceLogout = () => {
    dispatch(logout);
    localStorage.clear();
    Router.push('/');
  };

  return (
    <Modal
      show={open}
      className={styles.deleteProfileModalContainer}
      onHide={handleClose}
      onEscapeKeyDown={handleClose}
    >
      <div className='header'>
        <Row>
          <Col sm={8} md={8} lg={8}>
            <h5 className='heading'>Delete Account Verification</h5>
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
        {!formSubmitted ? (
          <>
            <Row sm={6} className="mb-3">
              <Col lg={12} md={12} sm={12} xs={12}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Form.Group className='mb-2' controlId='name'>
                    <Form.Label className={styles.featuredFormlabel}>Are you sure! You want to delete your profile.</Form.Label>
                  </Form.Group>
                  <Form.Group className='mb-2' controlId='name'>
                    <Form.Label className={styles.featuredFormlabel}>This can't be undone!</Form.Label>
                  </Form.Group>
                  <Form.Group className='mb-2' controlId='name'>
                    <Form.Label className={styles.featuredFormlabel}>Please enter your email to confirm:</Form.Label>
                  </Form.Group>
                </div>
              </Col>
            </Row>
            <Row sm={6} className="mb-3">
              <Col lg={12} md={12} sm={12} xs={12}>
                <TalentezzyPasswordInput
                  isSubmitted={formSubmitted}
                  isLoading={isLoading}
                  placeholder='Confirm Email'
                  showPasswordStrength={false}
                  emitInputValue={(e: any) =>
                    handleFormOnChange('email', e)
                  }
                />
                {wrongFormSubmitted &&
                formState.email.value &&
                formState.email.value !== profileData.emailAddress ? (
                  <p style={{ marginTop: '-15px', color: '#f5222d' }}>
                    Email do not match
                  </p>
                ) : null}
                <TalentezzyButton
                  btnText='Delete Profile'
                  onBtnClick={onSubmitClick}
                  variant='primary'
                  type='submit'
                  className={styles.signInBtn}
                  isLoading={isLoading}
                />
              </Col>
            </Row>
          </>
        ) : (
          null
        )}
        {formSubmitted ? (
          <>
            {!verifyAccount ? (
              <VerificationComponent
                username={profileData.emailAddress}
                phoneNumber={profileData.phoneNumber}
                password={signupData.password}
                category={signupData.category}
                isDeleteProfile={true}
              />
            ) : (
              <>
                <p className='content mt-5'>
                  Your account has been deleted successfully.
                </p>
                <p className='content'>
                  You can recover your account by doing login within 30 days.
                </p>
                <p className='content'>
                  Click Okay to logout or you will be logged out and redirected to
                  Home page in <span className="time">{logoutTime} seconds</span>.
                </p>
                <button className='ok-btn' onClick={forceLogout}>
                  Okay
                </button>
              </>
            )}
          </>
        ) : (
          null
        )}
      </div>
    </Modal>
  );
};

export default DeleteProfileModal;
