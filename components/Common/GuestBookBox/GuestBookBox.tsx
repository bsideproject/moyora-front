import React, { memo } from 'react';
import equal from 'fast-deep-equal';
import G from './GuestBookBox.styles';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';

dayjs.locale('ko');

interface IProps {
  size: { width: string; height: string; line: string | false };
  text: string;
  date?: string;
  onClick?: () => void;
  children: React.ReactElement;
}

const GuestBookBox: React.FC<IProps> = ({ size, text, date, onClick, children }) => {
  const formattedDate = date ? dayjs(date).format('YYYY/MM/DD') : '';
  return (
    <>
      <G style={{ width: size.width, height: size.height }} onClick={onClick}>
        <div>
          <section>{children}</section>
          <textarea
            disabled
            value={text}
            style={
              size.line
                ? {
                    WebkitLineClamp: size.line,
                    height: `${parseInt(size.line) * 20}rem`,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }
                : {
                    height: '200rem',
                    overflow: 'auto',
                  }
            }
          />
        </div>
        <section>{formattedDate}</section>
      </G>
    </>
  );
};

export default memo(GuestBookBox, equal);
