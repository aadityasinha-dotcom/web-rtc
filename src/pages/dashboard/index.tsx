import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Sidebar from 'layout/Sidebar';
import MainHeader from 'components/MainHeader';
import LoggedInHeader from 'layout/Header/LoggedInHeader';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store/reducers';
import styles from './dashboard.module.scss';
import DeleteProfileForm from 'components/DashboardComponents/Statistics';
import JobListCard from 'components/JobSearchComponents/JobListCard';
import { getUserDashboardAction } from "store/actions/profiles.actions";
import {
  getSavedJobListAction,
  getSavedJobListIdsAction,
} from 'store/actions/job.actions';

const DashboardPage: NextPage = () => {
  const dispatch = useDispatch();
  const { profileData, userDashboard } = useSelector((state: RootState) => state.profile);
  const [selectedView, setView] = useState<string>('list');
  const { authToken } = useSelector(
    (state: RootState) => state.app
  );
  const { advancedFilters, savedJobs, jobs } = useSelector(
    (state: RootState) => state.job
  );
  const isMobile: boolean =
    typeof window !== 'undefined' && window.innerWidth <= 425;

  const statistics_name = {
    uploadUsed: 'Upload Used',
    uploadsRemaining: 'Uploads Remaining',
    totalUploads: 'Total Uploads',
    totalMatchRateChecks: 'Total Match Rate',
    matchRateRemaining: 'Match Rate Left',
    mateRateChecksUsed: 'Match Rate Used',
    savedJobs: 'Saved Jobs',
  }

  const image_url = {
    applied_jobs: '/svg/send.svg',
    shortlisted: '/svg/heart-b.svg',
    review: '/svg/notification-b.svg',
    views: '/svg/tag-b.svg',
    unique_resumes: '/svg/resumes-b.svg',
    tracked_interviews: '/svg/link-b.svg'
  }

  useEffect(() => {
    if (authToken) {
      dispatch(getUserDashboardAction());
      dispatch(getSavedJobListAction());
      dispatch(getSavedJobListIdsAction());
    }
  }, [authToken]);

  useEffect(() => {
    if (isMobile) setView('grid');
  }, [isMobile]);

  return (
    <div style={{ marginTop: '10px', display: 'flex' }}>
      <Container fluid className={styles.container}>
        <LoggedInHeader />
        <Row>
          <div className='main-body'>
            <div className='main-body-header'>
              <MainHeader
                heading='Dashboard'
                subHeading={`Profile Strength ${
                  profileData.profileCompletion || '0%'
                }`}
              />
            </div>
          </div>
          <div className='stats' style={{ display: "flex", flexWrap: "wrap" }}>
            <Col lg={2} sm={12} md={6}>
              <DeleteProfileForm
                statistics_name={statistics_name.totalUploads}
                image_url={''}
                count={userDashboard.totalUploads}
              />
              <DeleteProfileForm
                statistics_name={statistics_name.totalMatchRateChecks}
                image_url={''}
                count={userDashboard.totalMatchRateChecks}
              />
            </Col>
            <Col lg={2} sm={12} md={6}>
              <DeleteProfileForm
                statistics_name={statistics_name.uploadUsed}
                image_url={''}
                count={userDashboard.uploadsUsed}
              />
              <DeleteProfileForm
                statistics_name={statistics_name.mateRateChecksUsed}
                image_url={''}
                count={userDashboard.matchRateChecksUsed}
              />
            </Col>
            <Col lg={2} sm={12} md={6}>
              <DeleteProfileForm
                statistics_name={statistics_name.uploadsRemaining}
                image_url={''}
                count={userDashboard.uploadsRemaining}
              />
              <DeleteProfileForm
                statistics_name={statistics_name.matchRateRemaining}
                image_url={''}
                count={userDashboard.matchRateRemaining}
              />
            </Col>
          </div>
        </Row>
        <Row>
          <div className='main-body'>
            <div className='main-body-header'>
              <MainHeader
                heading='Saved Jobs'
                subHeading=''
              />
            </div>
          <div className='jobs'>
            <div className={styles.jobListContainer} style={{ marginRight: "150px" }}>
              {savedJobs && savedJobs.length ? (
                savedJobs.map((job: any, index: number) => (
                  <JobListCard job={job} key={index} />
                ))
              ) : (
                <div
                  className='not-found'
                  style={{ textAlign: 'center', margin: '15%' }}
                >
                  <img
                    src='/svg/job-not-found.svg'
                    alt='Jobs Not Found'
                  />
                </div>
              )}
            </div>
          </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default DashboardPage;
