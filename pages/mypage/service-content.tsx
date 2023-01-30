import React from 'react';
import LogoHeader from '@components/Common/LogoHeader';
import { contentUsageRules } from '@configs/serviceTerms';

import M from '@components/Mypage/Mypage.styles';
const ServiceContent: React.FC = () => {
  const h3Tag = /#h3#/;
  const h2Tag = /#h2#/;
  return (
    <M.ServiceInfoWrapper className="full-container">
      <M.GlobalStyle />
      <div>
        <LogoHeader />
      </div>
      <h2>콘텐츠 이용 규칙</h2>
      <M.ServiceTermsTextWrap>
        {contentUsageRules.split('\n').map((line) => {
          return (
            <>
              {h2Tag.test(line) ? (
                <h2>{line.replaceAll('#h2#', '')}</h2>
              ) : h3Tag.test(line) ? (
                <h3>{line.replaceAll('#h3#', '')}</h3>
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

export default ServiceContent;
