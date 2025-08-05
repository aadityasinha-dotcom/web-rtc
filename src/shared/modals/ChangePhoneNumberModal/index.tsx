import React, { useState, useEffect } from 'react';
import { Col, Form, Modal, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/reducers';
import Router from 'next/router';

import styles from './change-phone-number.module.scss';
import TalentEzzyButton from 'core/components/TalentezzyButton';
import {
  changeEmailPhoneOtpAction,
  updateContactAction,
} from 'store/actions/app.actions';

interface Props {
  isLoading: boolean;
  phoneNumber: string;
  handleClosePhoneNumberModal: () => void;
  setNewPhoneNumber: (value: string) => void;
  isChangePhoneNumberModalOpen: boolean;
  handleCloseEmailModal:() => void;
  changeEmailPhoneNumber: any;
}

const ChangePhoneNumberModal = ({
  isLoading,
  phoneNumber,
  handleClosePhoneNumberModal,
  setNewPhoneNumber,
  isChangePhoneNumberModalOpen,
  handleCloseEmailModal,
  changeEmailPhoneNumber,
}: Props) => {
  const dispatch = useDispatch();
  const { isPasswordChanging, isPasswordChanged } = useSelector(
    (state: RootState) => state.profile
  );
  const { profileData } = useSelector((state: RootState) => state.profile);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const onSubmitClick = (e: any) => {
    e.preventDefault();
    // if (isLoading) return;
    // setIsLoading(true);
    // setFormSubmitted(true);
    // dispatch(changeEmailPhoneOtpAction({
    //   emailAddress: profileData.emailAddress,
    //   phoneNumber: phoneNumber.replace('-', '').replace('+', ''),
    //   emailFlag: true,
    // }));
  };

  const onTabClick = (path: string) => Router.push(path);
  
  return (
    <Modal
      show={isChangePhoneNumberModalOpen}
      backdrop="static"
      className={styles.changePhoneNumberModalContainer}
      onHide={handleClosePhoneNumberModal}
      onEscapeKeyDown={handleClosePhoneNumberModal}
    >
      <div className="header">
        <Row>
          <Col sm={8} md={8} lg={8}>
            <h5 className='heading'>Change your Phone Number</h5>
          </Col>
          <Col sm={4} md={4} lg={4}>
            <div onClick={handleClosePhoneNumberModal}>
              <img src='/svg/q-circle.svg' className='circle' alt='Cancel' />
              <img
                src='/svg/cross-black.svg'
                className='crossBtn'
                alt='Cancel'
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Form onSubmit={(e: any) => onSubmitClick(e)}>
            <TalentEzzyButton
              btnText='Verify OTP'
              type='submit'
              onBtnClick={() => onTabClick('/change-phone-number')}
              className='submitBtn'
              isLoading={isLoading}
            />
            <TalentEzzyButton
              btnText='Cancel'
              type='submit'
              onBtnClick={handleClosePhoneNumberModal}
              className='cancelBtn'
              isLoading={isLoading}
            />
          </Form>
        </Row>
      </div>
    </Modal>
  )
};

export default ChangePhoneNumberModal;
