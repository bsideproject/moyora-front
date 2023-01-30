import React from 'react';
import LogoHeader from '@components/Common/LogoHeader';
import { serviceTerms } from '@configs/serviceTerms';

import M from '@components/Mypage/Mypage.styles';
const ServiceTerms: React.FC = () => {
  const h3Tag = /^제\d|^제 \d/;
  return (
    <M.ServiceInfoWrapper className="full-container">
      <M.GlobalStyle />
      <div>
        <LogoHeader />
      </div>
      <h2>서비스 이용 약관</h2>
      <M.ServiceTermsTextWrap>
        {serviceTerms.split('\n').map((line) => {
          return (
            <>
              {h3Tag.test(line) ? (
                <h3>{line}</h3>
              ) : (
                <>
                  {line}
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

export default ServiceTerms;
