import React from 'react';
import type { NextPage } from 'next';

import FeaturedJobSection from 'components/HomeComponents/FeaturedJobSection';
import JobSearchSection from 'components/HomeComponents/JobSearchSection';
import ProductFeatureSection from 'components/HomeComponents/ProductFeatureSection';
import UploadResumeSection from 'components/HomeComponents/UploadResumeSection';
import Footer from 'layout/Footer';

// import { Amplify } from 'aws-amplify';
// import awsExports from 'aws-exports';

// Amplify.configure({ ...awsExports, ssr: true });
const Home: NextPage = () => {
  return (
    <>
      <div style={{ marginTop: '60px' }}>
        <JobSearchSection />
        <UploadResumeSection />
        <FeaturedJobSection />
        <ProductFeatureSection />
        <Footer />
      </div>
    </>
  );
};

export default Home;
