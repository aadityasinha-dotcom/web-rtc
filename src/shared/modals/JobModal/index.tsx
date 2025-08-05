import React, { useState, useEffect } from 'react';
import { Col, Form, Modal, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/reducers';
import Router from 'next/router';
import { IJob } from 'shared/interfaces/jobs.interface';
import JobModalCard from 'components/JobSearchComponents/JobModalCard';
import styles from './job-modal.module.scss';
import {
  changeEmailPhoneOtpAction,
  updateContactAction,
} from 'store/actions/app.actions';

interface Props {
  isLoading: boolean;
  jobData: IJob;
  isChangeEmailModalOpen: boolean;
  handleCloseEmailModal:() => void;
}

const JobModal = ({
  isLoading,
  jobData,
  isChangeEmailModalOpen,
  handleCloseEmailModal,
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
      show={isChangeEmailModalOpen}
      backdrop="static"
      className={styles.changeEmailModalContainer}
      onEscapeKeyDown={handleCloseEmailModal}
    >
      <div className="header">
        <Row>
          <Col sm={4} md={4} lg={4}>
            <div onClick={handleCloseEmailModal}>
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
            <JobModalCard job={jobData} isModalOpen={isChangeEmailModalOpen}/>
        </Row>
      </div>
    </Modal>
  )
};

export default JobModal;
