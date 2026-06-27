import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import { Col, Container, Modal, Row } from 'react-bootstrap';
import Pagination from 'react-bootstrap/Pagination';
import { useSelector } from 'react-redux';
import styles from './admin.module.scss';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck, Users, FileClock, Trash2, ClipboardList } from 'lucide-react';

interface IAuthComponents {
  [key: string]: {
    heading: string;
    component: React.ReactNode;
  };
}

const PlaceholderCard = ({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}) => (
  <Card className={styles.placeholderCard}>
    <CardContent className="flex items-start gap-4 p-6">
      <div className={styles.placeholderIcon}>
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </CardContent>
  </Card>
);

const AdminPage: NextPage = () => {
  const { adminAuthToken } = useSelector((state: any) => state.app);
  const [selectedComponent, setSelectedComponent] = useState('USERSESSIONS');
  const [open, setOpen] = useState(adminAuthToken ? false : true);

  useEffect(() => {
    if (adminAuthToken) setOpen(false);
  }, [adminAuthToken]);

  const adminComponents: IAuthComponents = {
    USERLOGS: {
      heading: 'User Logs',
      component: <PlaceholderCard title="User logs" description="Audit events, sign-ins, and account changes." icon={FileClock} />,
    },
    USERSESSIONS: {
      heading: 'User Sessions',
      component: <PlaceholderCard title="User sessions" description="Active and historical sessions across the platform." icon={Users} />,
    },
    USERDATA: {
      heading: 'User Details',
      component: <PlaceholderCard title="User details" description="Profile data and account metadata." icon={ClipboardList} />,
    },
    DELETEUSER: {
      heading: 'Delete User',
      component: <PlaceholderCard title="Delete user" description="Review and remove an account when necessary." icon={Trash2} />,
    },
    PRELOGINLOGS: {
      heading: 'Pre Login Logs',
      component: <PlaceholderCard title="Pre-login logs" description="Track public access and unauthenticated activity." icon={ShieldCheck} />,
    },
  };

  return (
    <Container fluid className={styles.adminPage}>
      <div className={styles.hero}>
        <Badge className="rounded-full bg-blue-50 px-3 py-1 text-blue-700 hover:bg-blue-50">
          Admin console
        </Badge>
        <h1>Welcome to the Admin Page</h1>
        <p>Manage sessions, users, and logs in a cleaner Meet-style shell.</p>
      </div>

      <Row>
        <Pagination className={styles.tabNav}>
          {Object.entries(adminComponents).map(([key, value]) => (
            <Pagination.Item
              key={key}
              onClick={() => setSelectedComponent(key)}
              active={selectedComponent === key}
            >
              {value.heading}
            </Pagination.Item>
          ))}
        </Pagination>
      </Row>

      {adminAuthToken ? (
        <div className={styles.listCard}>
          <div className="w-full">
            {selectedComponent && adminComponents[selectedComponent].component}
          </div>
        </div>
      ) : (
        <Modal show={open} className={styles.authModalContainer}>
          <div className={styles.authModalBody}>
            <Row>
              <Col sm={12}>
                <h5 className={styles.authHeading}>Admin Login</h5>
                <p className="mt-2 text-slate-600">
                  Use the admin account to access user logs, session history, and moderation tools.
                </p>
              </Col>
            </Row>
            <Card className="mt-6 border-slate-200 bg-white/90">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Secure access</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
                  Admin sign-in UI is not wired in this repo, so this screen now stays self-contained and styled.
                </div>
                <Button className="rounded-full">Continue</Button>
              </CardContent>
            </Card>
          </div>
        </Modal>
      )}
    </Container>
  );
};

export default AdminPage;
