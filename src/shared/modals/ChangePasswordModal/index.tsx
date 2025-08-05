import React, { useState, useEffect } from 'react';
import { Col, Form, Modal, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/reducers';

import { AppActionType } from 'store/action-types/app.types';
import styles from './change-password.module.scss';
import TalentezzyPasswordInput from 'core/components/TalentezzyPasswordInput';
import TalentezzyButton from 'core/components/TalentezzyButton';
import { changePasswordAction } from 'store/actions/profiles.actions';
interface Props {
  open: boolean;
  setOpen: any;
}

const ChangePasswordModal = ({ open, setOpen }: Props) => {
  const { isPasswordChanging, isPasswordChanged } = useSelector(
    (state: RootState) => state.profile
  );
  const dispatch = useDispatch();
  const [formState, setFormState] = useState({
    oldPassword: {
      value: undefined,
      valid: false,
    },
    newPassword: {
      value: undefined,
      valid: false,
    },
    confirmPassword: {
      value: undefined,
      valid: false,
    },
  });
  const [formSubmitted, setSubmitState] = useState<boolean>(false);
  const [isLoading, setLoadingState] = useState<boolean>(false);

  useEffect(() => {
    setLoadingState(isPasswordChanging);
  }, [isPasswordChanging]);

  useEffect(() => {
      if (isPasswordChanged) handleClose();
  }, [isPasswordChanged]);

  const handleClose = () => {
    setOpen(false);
    setSubmitState(false);
    dispatch({ type: AppActionType.CANCEL_AUTH_MODAL });
  };

  const onSubmitClick = (event: any) => {
    event.preventDefault();
    setSubmitState(true);
    const { oldPassword, newPassword, confirmPassword } = formState;
    if (!oldPassword.valid && !newPassword.valid) return;
    if (newPassword.value !== confirmPassword.value) return;
    dispatch(
      changePasswordAction({
        oldPassword: oldPassword.value,
        newPassword: newPassword.value,
      })
    );
  };

  const handleFormOnChange = (fieldName: string, data: any) => {
    setFormState({
      ...formState,
      [fieldName]: data,
    });
  };

  return (
    <Modal
      show={open}
      className={styles.changePasswordContainer}
      onHide={handleClose}
    >
      <div className='header'>
        <Row>
          <Col sm={8} md={8} lg={8}>
            <h5 className='heading'>Change Password</h5>
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
        <Form className='mt-5' onSubmit={(e) => onSubmitClick(e)}>
          <TalentezzyPasswordInput
            isSubmitted={formSubmitted}
            isLoading={isLoading}
            placeholder='Current Password'
            showPasswordStrength={false}
            emitInputValue={(e: any) =>
              handleFormOnChange('oldPassword', e)
            }
          />
          <TalentezzyPasswordInput
            isSubmitted={formSubmitted}
            isLoading={isLoading}
            placeholder='New Password'
            showPasswordStrength={true}
            emitInputValue={(e: any) => handleFormOnChange('newPassword', e)}
          />
          <TalentezzyPasswordInput
            isSubmitted={formSubmitted}
            isLoading={isLoading}
            placeholder='Confirm Password'
            showPasswordStrength={false}
            className={
              formSubmitted &&
              formState.newPassword.value &&
              formState.confirmPassword.value &&
              formState.newPassword.value !== formState.confirmPassword.value
                ? 'no-match'
                : ''
            }
            emitInputValue={(e: any) =>
              handleFormOnChange('confirmPassword', e)
            }
          />
          {formSubmitted &&
          formState.newPassword.value &&
          formState.confirmPassword.value &&
          formState.newPassword.value !== formState.confirmPassword.value ? (
            <p style={{ marginTop: '-15px', color: '#f5222d' }}>
              Passwords do not match
            </p>
          ) : null}
          <TalentezzyButton
            btnText='Change Password'
            onBtnClick={onSubmitClick}
            variant='primary'
            type='submit'
            className='changePasswordBtn'
            isLoading={isLoading}
          />
        </Form>
      </div>
    </Modal>
  );
};

export default ChangePasswordModal;
