import React, { useState, useEffect } from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import ResumeParserModalCard from 'components/HomeComponents/UploadResumeSection/ResumeParserModalCard';
import styles from "./resume-parser-modal.module.scss";
interface Props {
  open: boolean;
  setOpen: any;
}
const ResumeParserModal = ({ open, setOpen }: Props) => {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Modal
      show={open}
      className={styles.resumeModalContainer}
    >
      <ResumeParserModalCard />
    </Modal>
  );
};

export default ResumeParserModal;
