import React from 'react';
import Image from 'next/image';
import { Button, message } from 'antd';
import betaImages from '@configs/betaImages';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import B from './Beta.styles';
import { useToggle } from 'react-use';
const URL =
  process.env.NODE_ENV === 'production'
    ? process.env.NEXT_PUBLIC_DOMAIN_URL ?? ''
    : 'http://localhost:3000';
const Link: React.FC = () => {
  const [isCopy, isToggleCopy] = useToggle(false);
  const onClickCopy = () => {
    if (!isCopy) {
      message.success('주소가 복사되었습니다!');
      isToggleCopy();
    }
  };
  const onClickKakaoShare = () => {
    if (!window?.Kakao?.isInitialized()) {
      window?.Kakao?.init(process.env.NEXT_PUBLIC_KAKAO_KEY);
      window.Kakao?.Share?.createScrapButton({
        container: '#kakaotalk-sharing-btn',
        requestUrl: URL,
      });
    }
  };
  return (
    <B.LinkSection>
      <div>
        <h2>
          더 많은 동창 친구들이 모일 수 있도록 <br />
          친구에게 공유해 보세요!
        </h2>
        <div>
          <div>
            <Button id="kakaotalk-sharing-btn" shape="circle" onClick={onClickKakaoShare}>
              <Image src={betaImages.KakaoIcon} alt="kakao-icon" />
            </Button>
            <p>카카오톡</p>
          </div>
          <CopyToClipboard text={URL} onCopy={onClickCopy}>
            <div>
              <Button shape="circle">
                <Image src={betaImages.LinkIcon} alt="link-icon" />
              </Button>
              <p>링크 복사</p>
            </div>
          </CopyToClipboard>
        </div>
      </div>
    </B.LinkSection>
  );
};

export default Link;
