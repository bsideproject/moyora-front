import React from 'react';
import Image from 'next/image';
import { Button } from 'antd';

import betaImages from '@configs/betaImages';

import B from './Beta.styles';

const Link: React.FC = () => {
  return (
    <B.LinkSection>
      <div>
        <h2>
          더 많은 동창 친구들이 모일 수 있도록 <br />
          친구에게 공유해 보세요!
        </h2>
        <div>
          <div>
            <Button shape="circle">
              <Image src={betaImages.KakaoIcon} alt="kakao-icon" />
            </Button>
            <p>카카오톡</p>
          </div>
          <div>
            <Button shape="circle">
              <Image src={betaImages.LinkIcon} alt="link-icon" />
            </Button>
            <p>링크 복사</p>
          </div>
        </div>
      </div>
    </B.LinkSection>
  );
};

export default Link;
