import React, { useState, useEffect } from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/reducers";

import SignupComponent from "components/AuthComponents/SignupComponent";
import { AppActionType } from "store/action-types/app.types";
import styles from "./notification-modal.module.scss";
interface Props {
  open: boolean;
  setOpen: any;
}
const SignInNotificationModal = ({ open, setOpen }: Props) => {
  const { authToken } = useSelector((state: RootState) => state.app);
  const dispatch = useDispatch();
  const [signupData, setSignupData] = React.useState({
    username: undefined,
    phoneNumber: undefined,
    password: undefined,
    category: "",
  });
  const handleClose = () => {
    setOpen(false);
    dispatch({ type: AppActionType.CANCEL_AUTH_MODAL });
  };
  return (
    <Modal
      show={open}
      className={styles.authModalContainer}
      onHide={handleClose}
    >
      <div className="header">
        <Row>
          <Col sm={8} md={8} lg={8}>
            <h5 className="heading">Sign Up</h5>
          </Col>
          <Col sm={4} md={4} lg={4}>
            <div onClick={handleClose}>
              <img src="/svg/q-circle.svg" className="circle" alt="Cancel" />
              <img
                src="/svg/cross-black.svg"
                className="cancelBtn"
                alt="Cancel"
              />
            </div>
          </Col>
        </Row>
        <SignupComponent emitSignupData={(data: any) => setSignupData(data)} />
      </div>
    </Modal>
  );
};

export default SignInNotificationModal;
