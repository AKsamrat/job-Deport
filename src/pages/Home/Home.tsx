import React from 'react';
import HowItWork from '../../components/Home/HowItWork';
import Banner from '../../components/Home/Banner';
import FeaturedJobs from '../../components/Home/FeaturedJobs';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FeaturedJobs></FeaturedJobs>
      <HowItWork></HowItWork>
    </div>
  );
};

export default Home;