import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { FloatButton } from 'antd';

import TopArrow from '@public/svgs/top-arrow.svg';

import LogoHeader from '@components/Common/LogoHeader';

const JobStatistics = dynamic(() => import('@components/Statistics/JobStatistics'));
const LocationStatistics = dynamic(() => import('@components/Statistics/LocationStatistics'));
const MBTIStatistics = dynamic(() => import('@components/Statistics/MBTIStatistics'));

const Statistics: React.FC = () => {
  return (
    <div>
      <LogoHeader headerIcons={true} />
      <JobStatistics />
      <LocationStatistics />
      <MBTIStatistics />
      <FloatButton.BackTop visibilityHeight={100} icon={<Image src={TopArrow} alt="top-arrow" />} />
    </div>
  );
};

export default Statistics;
