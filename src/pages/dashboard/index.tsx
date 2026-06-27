import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store/reducers';
import styles from './dashboard.module.scss';
import { getUserDashboardAction } from 'store/actions/profiles.actions';
import { getSavedJobListAction, getSavedJobListIdsAction } from 'store/actions/job.actions';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, CheckCircle2, Eye, FileText, MessageSquare, Sparkles } from 'lucide-react';

const DashboardPage: NextPage = () => {
  const dispatch = useDispatch();
  const { profileData, userDashboard } = useSelector((state: RootState) => state.profile);
  const { authToken } = useSelector((state: RootState) => state.app);
  const { savedJobs } = useSelector((state: RootState) => state.job);
  const [selectedView, setView] = useState<string>('list');
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 425;

  useEffect(() => {
    if (authToken) {
      dispatch(getUserDashboardAction());
      dispatch(getSavedJobListAction());
      dispatch(getSavedJobListIdsAction());
    }
  }, [authToken, dispatch]);

  useEffect(() => {
    if (isMobile) setView('grid');
  }, [isMobile]);

  const stats = [
    { label: 'Total uploads', value: userDashboard.totalUploads ?? 0, icon: FileText },
    { label: 'Uploads used', value: userDashboard.uploadsUsed ?? 0, icon: Sparkles },
    { label: 'Uploads remaining', value: userDashboard.uploadsRemaining ?? 0, icon: CheckCircle2 },
    { label: 'Match rate checks', value: userDashboard.totalMatchRateChecks ?? 0, icon: MessageSquare },
    { label: 'Match rate used', value: userDashboard.matchRateChecksUsed ?? 0, icon: Eye },
    { label: 'Saved jobs', value: userDashboard.savedJobs ?? savedJobs?.length ?? 0, icon: Briefcase },
  ];

  return (
    <div className={styles.dashboardPage}>
      <Container fluid className={styles.container}>
        <div className={styles.pageHeader}>
          <div className={styles.heroCard}>
            <div>
              <Badge className="rounded-full bg-blue-50 px-3 py-1 text-blue-700 hover:bg-blue-50">
                Meet-style dashboard
              </Badge>
              <h1>Dashboard</h1>
              <p>Profile strength {profileData.profileCompletion || '0%'} with a calmer Google Meet-inspired surface.</p>
            </div>
            <Button className="rounded-full">
              Refresh data
            </Button>
          </div>
        </div>

        <section className={styles.surfaceSection}>
          <Row className={styles.statsRow}>
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <Col key={stat.label} lg={4} md={6} sm={12}>
                  <Card className={styles.statCard}>
                    <CardContent className="flex items-center gap-4 p-5">
                      <div className={styles.statIcon}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500">{stat.label}</p>
                        <p className="text-2xl font-semibold text-slate-900">{stat.value}</p>
                      </div>
                    </CardContent>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </section>

        <div className={styles.pageHeader}>
          <div className={styles.sectionHeading}>
            <h2>Saved jobs</h2>
            <p>Your recent shortlisted roles and notes.</p>
          </div>
        </div>

        <section className={styles.surfaceSection}>
          {savedJobs && savedJobs.length ? (
            <div className={selectedView === 'grid' ? styles.jobGrid : styles.jobList}>
              {savedJobs.map((job: any) => (
                <Card key={job.id || job.title} className={styles.jobCard}>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">{job.title || 'Saved role'}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600">{job.company || 'Company name unavailable'}</p>
                    <p className="mt-2 text-sm text-slate-500">{job.location || 'Remote-friendly role'}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className={styles.emptyState}>
              <Briefcase className="h-10 w-10 text-slate-400" />
              <p>No saved jobs yet.</p>
            </div>
          )}
        </section>
      </Container>
    </div>
  );
};

export default DashboardPage;
