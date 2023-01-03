import React from 'react';
import { Button } from 'antd';

import B from './Beta.styles';

interface IProps {
  onClick: () => void;
}

const End: React.FC<IProps> = ({ onClick }) => {
  return (
    <B.EndSection>
      <div>
        <h2>
          당신을 보고 싶어 하는 <br className="mobile" />
          동창 친구들이 모이고 있어요 <br />
          지금 바로 시작해 보세요!
        </h2>
        <Button type="primary" onClick={onClick}>
          모여라 시작하기
        </Button>
      </div>
    </B.EndSection>
  );
};

export default End;
