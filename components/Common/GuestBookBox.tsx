import React, { memo } from 'react';
import equal from 'fast-deep-equal';
import G from './GuestBookBox.styles';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';

dayjs.locale('ko');

interface IProps {
  size: { width: string; height: string; line: string };
  text: string;
  date?: string;
  children: React.ReactElement;
}

const GuestBookBox: React.FC<IProps> = ({ size, text, date, children }) => {
  const formattedDate = date ? dayjs(date).format('YYYY/MM/DD') : '';
  return (
    <>
      <G style={{ width: size.width, height: size.height }}>
        <div>
          <section>{children}</section>
          <textarea
            disabled
            value={text}
            style={{ WebkitLineClamp: size.line, height: `${parseInt(size.line) * 20}rem` }}
          />
        </div>
        <section>{formattedDate}</section>
      </G>
    </>
  );
};

export default memo(GuestBookBox, equal);
