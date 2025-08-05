import React, { useEffect } from 'react';
import { Col, Modal, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/reducers';

import styles from './complete-assessment.module.scss';
import TalentEzyButton from 'core/components/TalentezzyButton';
import { logout } from 'store/actions/app.actions';
import { AppActionType } from 'store/action-types/app.types';
import Router from 'next/router';

interface Props {
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
}

const CompleteAssessmentModal = (props: Props) => {
  const dispatch = useDispatch();
  const { authToken } = useSelector((state: RootState) => state.app);

  const { openModal, setOpenModal } = props;
  const [open, setOpen] = React.useState(true);

  useEffect(() => {
    setOpen(openModal);
  }, [openModal]);

  const handleClose = () => {
    setOpen(false);
    setOpenModal(false);
    // Router.push('/');
    // localStorage.clear();
    // dispatch({
    //   type: AppActionType.SET_MSG,
    //   payload: 'Logged out successfully!',
    // });
    // dispatch({
    //   type: AppActionType.SESSION_EXPIRED,
    //   payload: true,
    // });
    // dispatch({ type: AppActionType.CLEAR_APP });
    // dispatch(logout);
  };

  return (
    <Modal
      show={open}
      className={styles.sessionExpiredModalContainer}
      onHide={handleClose}
      onEscapeKeyDown={handleClose}
    >
      <div className='p-5 header'>
        <Row>
          <Col sm={12} md={12} lg={12}>
            <h5 className='heading'>Assessment Result!</h5>
            <p>Your assessment result is</p>
            <TalentEzyButton
              variant='primary'
              btnText='Sign In'
              className='cancel-btn'
              onBtnClick={() => handleClose()}
            />
          </Col>
        </Row>
      </div>
    </Modal>
  );
};

export default CompleteAssessmentModal;
