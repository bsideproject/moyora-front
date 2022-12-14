import React, { memo } from 'react';
import equal from 'fast-deep-equal';
import G from './GuestBookBox.styles';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import Lock from '@public/svgs/icon-note-lock.svg';
import User from '@public/svgs/icon-note-user.svg';
import Image from 'next/image';

dayjs.locale('ko');

interface IProps {
  info?: { name: string; nickname?: string; lock?: boolean };
  size: { width: string; height: string; line: string | false };
  text: string;
  date?: string;
  onClick?: () => void;
  children: React.ReactElement;
}

const GuestBookBox: React.FC<IProps> = ({ info, size, text, date, onClick, children }) => {
  const formattedDate = date ? dayjs(date).format('YYYY/MM/DD') : '';
  return (
    <>
      <G style={{ width: size.width, height: size.height }} onClick={onClick}>
        <div>
          <section>{children}</section>
          <div>
            <textarea
              disabled
              value={text}
              style={
                size.line
                  ? {
                      WebkitLineClamp: size.line,
                      height: `${parseInt(size.line) * 20}rem`,
                      width: `${parseInt(size.width) - 32}rem`,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }
                  : {
                      height: '200rem',
                      width: `${parseInt(size.width) - 32}rem`,
                      overflow: 'auto',
                    }
              }
            />
          </div>
        </div>
        {info?.name ? (
          <span>
            <div>
              <Image src={Lock} alt="lock" />
            </div>
            <div>
              <Image src={User} alt="user" />
              &nbsp;{info.name}({info.nickname ?? info.name})
            </div>
          </span>
        ) : (
          <section>{formattedDate}</section>
        )}
      </G>
    </>
  );
};

export default memo(GuestBookBox, equal);
