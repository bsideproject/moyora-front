import React from 'react';
import LogoHeader from '@components/Common/LogoHeader';
import M from '@components/Mypage/Mypage.styles';
import { privacyPolicy } from '@configs/serviceTerms';

const ServicePrivacy: React.FC = () => {
  const h3Tag = /^제\d|^제 \d/;
  const tab = /\t/;
  return (
    <M.ServiceInfoWrapper className="full-container">
      <M.GlobalStyle />
      <div>
        <LogoHeader />
      </div>
      <h2>개인정보 처리방침</h2>
      <M.ServiceTermsTextWrap>
        {privacyPolicy.split('\n').map((line) => {
          return (
            <>
              {h3Tag.test(line) ? (
                <h3>{line}</h3>
              ) : (
                <>
                  {tab.test(line) ? <>&nbsp;&nbsp;{line}</> : <>{line}</>}
                  <br />
                </>
              )}
            </>
          );
        })}
      </M.ServiceTermsTextWrap>
    </M.ServiceInfoWrapper>
  );
};

export default ServicePrivacy;
