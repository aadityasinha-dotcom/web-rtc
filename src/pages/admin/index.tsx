import { NextPage } from 'next';
import React, { useEffect, useState, useRef } from "react";
// import { Amplify } from 'aws-amplify';
// import awsExports from 'aws-exports';
import { BarChart } from '@mui/x-charts/BarChart';
import { Col, Container, Row, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import Pagination from "react-bootstrap/Pagination";
import Table from 'react-bootstrap/Table';
import WorldMap from "react-svg-worldmap";
import UserLogsComponent from "components/AdminComponents/UserLogsComponent";
import UserSessionComponent from "components/AdminComponents/UserSessionComponent";
import UserDataComponent from "components/AdminComponents/UserDataComponent";
import styles from './admin.module.scss';
import { getUserSessionAction, getUserLogsAction } from "store/actions/app.actions";
import LoggedInHeader from 'layout/Header/LoggedInHeader';
import AdminSigninComponent from 'components/AuthComponents/AdminSigninComponent';
import SearchFilter from 'components/AdminComponents/FilterComponents';
import DeleteUserComponent from 'components/AdminComponents/DeleteUserComponent';
import PreLoginLogsComponent from 'components/AdminComponents/PreLoginLogsComponent';

// Amplify.configure({ ...awsExports, ssr: true });
//
interface IAuthComponents {
  [key: string]: {
    heading: string;
    component: any;
  };
}

const AdminPage: NextPage = () => {
  const dispatch = useDispatch();

  const { adminAuthToken, userSessions, userLogs } = useSelector((state: any) => state.app);
  const [selectedComponent, setSelectedComponent] = useState('');
  const [open, setOpen] = useState(adminAuthToken ? false : true);

  const data = [
    { country: "cn", value: 1389618778 }, // china
    { country: "in", value: 1311559204 }, // india
    { country: "us", value: 331883986 }, // united states
    { country: "id", value: 264935824 }, // indonesia
    { country: "pk", value: 210797836 }, // pakistan
    { country: "br", value: 210301591 }, // brazil
    { country: "ng", value: 208679114 }, // nigeria
    { country: "bd", value: 161062905 }, // bangladesh
    { country: "ru", value: 141944641 }, // russia
    { country: "mx", value: 127318112 }, // mexico
  ];

  useEffect(() => {
    if (adminAuthToken) setOpen(false);
  }, [adminAuthToken]);


  const adminComponents: IAuthComponents = {
    USERLOGS: {
      heading: 'User Logs',
      component: (
        <UserLogsComponent />
      ),
    },
    USERSESSIONS: {
      heading: 'User Sessions',
      component: (
        <UserSessionComponent />
      ),
    },
    USERDATA: {
      heading: 'User Details',
      component: (
        <UserDataComponent />
      ),
    },
    DELETEUSER : {
      heading: 'Delete User',
      component: (
        <DeleteUserComponent />
      ),
    },
    PRELOGINLOGS : {
      heading: 'Pre Login Logs',
      component: (
        <PreLoginLogsComponent />
      ),
    },
  };

  return (
    <>
      <Container fluid>
        <LoggedInHeader />
        <Row sm={12} style={{ marginTop: '150px', marginLeft: '80px' }}>
          <h1>Welcome to the Admin Page</h1>
        </Row>
        <Row>
          <Pagination style={{ marginLeft: '100px', marginTop: '20px' }}>
            <Pagination.Item 
              key={'User Session'} 
              onClick={() => {
                setSelectedComponent('USERSESSIONS');
              }}
              active={selectedComponent === 'USERSESSIONS'}
            >
              {'User Sessions'}
            </Pagination.Item>
            <Pagination.Item 
              key={'User Logs'} 
              onClick={() => {
                setSelectedComponent('USERLOGS');
              }}
              active={selectedComponent === 'USERLOGS'}
            >
              {'User Logs'}
            </Pagination.Item>
            <Pagination.Item 
              key={'User DATA'} 
              onClick={() => {
                setSelectedComponent('USERDATA');
              }}
              active={selectedComponent === 'USERDATA'}
            >
              {'User Data'}
            </Pagination.Item>
            <Pagination.Item 
              key={'Delete User'} 
              onClick={() => {
                setSelectedComponent('DELETEUSER');
              }}
              active={selectedComponent === 'DELTEUSER'}
            >
              {'Delete User'}
            </Pagination.Item>
            <Pagination.Item 
              key={'Pre Login Logs'} 
              onClick={() => {
                setSelectedComponent('PRELOGINLOGS');
              }}
              active={selectedComponent === 'PRELOGINLOGS'}
            >
              {'Pre Login Logs'}
            </Pagination.Item>
          </Pagination>
        </Row>
        {adminAuthToken ? (
          <>
            <div
              className={styles.listCard}
            >
              <div className='detail'>
                {/* <Row sm={6} className='mb-3'> */}
                  {/* <Col lg={6} md={12} sm={12} xs={12}> */}
                  {/*   <WorldMap */}
                  {/*     color="red" */}
                  {/*     value-suffix="people" */}
                  {/*     size="md" */}
                  {/*     data={data} */}
                  {/*   /> */}
                  {/* </Col> */}
                  {/* <Col lg={4} md={12} sm={12} xs={12} className={styles.listCard}> */}
                  {/*   <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'left' }}> */}
                  {/*     <div className="chart-container"> */}
                  {/*       <h2 style={{ textAlign: "center" }}>Bar Chart</h2> */}
                  {/*       <BarChart */}
                  {/*         series={[ */}
                  {/*           { data: [35, 44, 24, 34] }, */}
                  {/*         ]} */}
                  {/*         height={290} */}
                  {/*         xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]} */}
                  {/*         margin={{ top: 10, bottom: 30, left: 40, right: 10 }} */}
                  {/*       /> */}
                  {/*     </div> */}
                  {/*   </div> */}
                  {/* </Col> */}
                {/* </Row> */}
                <Row>
                  {selectedComponent && adminComponents[selectedComponent].component}
                </Row>
              </div>
            </div>
          </>
        ) : (
          <>
            <Modal
              show={open}
              className={styles.authModalContainer}
            >
              <div className='header'>
                <Row>
                  <Col sm={8} md={8} lg={8}>
                    <h5 className='heading'>
                      Admin Login
                    </h5>
                  </Col>
                </Row>
                <AdminSigninComponent/>
              </div>
            </Modal>
          </>
        )}
      </Container>
    </>
  );
};

export default AdminPage;
