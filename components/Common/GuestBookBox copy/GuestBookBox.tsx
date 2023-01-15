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
            {info?.lock ? (
              <span>
                <Image src={Lock} alt="lock" width={16} />
                <br />
                비공개 쪽지
              </span>
            ) : (
              <textarea
                disabled
                value={text}
                style={
                  size.line
                    ? {
                        WebkitLineClamp: size.line,
                        height: `${parseInt(size.line) * 20}px`,
                        width: `${parseInt(size.width) - 32}px`,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }
                    : {
                        height: '200px',
                        width: `${parseInt(size.width) - 32}px`,
                        overflow: 'auto',
                      }
                }
              />
            )}
          </div>
        </div>
        {info?.name ? (
          <span>
            <div>{info.lock ? <Image src={Lock} alt="lock" /> : ''}</div>
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
