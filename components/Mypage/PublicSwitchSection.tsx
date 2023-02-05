import React from 'react';
import { Switch } from 'antd';

import M from './Mypage.styles';

interface IProps {
  isPublic: boolean;
  onChange: () => void;
}

const PublicSwitchSection: React.FC<IProps> = ({ isPublic, onChange }) => {
  return (
    <M.MypageSwitchWrap>
      <div>
        <h3>필수 정보 비공개 설정</h3>
        <Switch checked={!isPublic} onChange={onChange} />
      </div>
      <p>비공개 시 통계 집계에는 포함되지만 프로필에는 공개되지 않습니다.</p>
    </M.MypageSwitchWrap>
  );
};

export default PublicSwitchSection;
