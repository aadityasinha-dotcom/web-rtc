import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Col, Modal, Row } from 'react-bootstrap';
import { AppActionType } from 'store/action-types/app.types';
import AdvancedJobSearchFilter from 'components/JobSearchComponents/AdvancedJobSearchFilter';
import styles from './job-filters.module.scss';

const JobFiltersModal = (props: any) => {
  const dispatch = useDispatch();
  const { openModal, setOpenModal } = props;
  const [open, setOpen] = React.useState(false);
  const [sortByValue, setSortByValue] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(21);
  const [jobTitle, setJobTitle] = useState<string>('');

  useEffect(() => {
    setOpen(openModal);
  }, [openModal]);

  const handleClose = () => {
    setOpen(false);
    setOpenModal('', false);
    // dispatch(logout);
    // localStorage.clear();
    dispatch({ type: AppActionType.CANCEL_AUTH_MODAL });
  };

  const setTitle = (title: string) => {
    if (!title) {
      setJobTitle('');
      return;
    }
    const words = title.split(' ');
    let newTitle: string = words
      .map((word) => word[0].toUpperCase() + word.substring(1))
      .join(' ');
    setJobTitle(newTitle);
  };

  return (
    <Modal
      show={open}
      className={styles.authModalContainer}
      onHide={handleClose}
    >
      <div className='header'>
        <Row>
          <Col style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <img
              style={{ padding: '15px 0px' }}
              onClick={handleClose}
              src='/svg/cross-black.svg'
              className='cancelBtn'
              alt='Cancel'
            />
          </Col>
        </Row>
        <AdvancedJobSearchFilter
          sortBy={sortByValue}
          setSortByValue={setSortByValue}
          page={page - 1}
          pageSize={pageSize}
          appliedFilters={props.appliedFilters}
          emitFilters={(filters: any) => props.emitFilters(filters)}
          clearFilter={() =>{}}
          emitJobTitle={(title: string) => setTitle(title)}
        />
      </div>
    </Modal>
  );
};

export default JobFiltersModal;
