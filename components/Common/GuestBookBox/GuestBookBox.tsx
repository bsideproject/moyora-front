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
  info?: { id: string; name: string; nickname?: string; lock?: boolean };
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
      <G.GuestBookBoxWrapper size={size} onClick={onClick}>
        <G.StickerDiv>{children}</G.StickerDiv>
        <div>
          {info?.lock && info.id != 'myPage' ? (
            <G.LockTextArea size={size}>
              <Image src={Lock} alt="lock" width={16} />
              <br />
              비공개 쪽지
            </G.LockTextArea>
          ) : (
            <G.Textarea disabled size={size} value={text} />
          )}
        </div>
        <G.BoxInfo lock={info?.lock}>
          <div>{info?.name && !info?.lock ? <Image src={Lock} alt="lock" /> : ''}</div>
          <div>
            {info?.name ? (
              <>
                <Image src={User} alt="user" />
                &nbsp;{info.name}({info.nickname ?? info.name})
                {parseInt(size.width) >= 350 ? <div> · {formattedDate}</div> : ''}
              </>
            ) : (
              <div>{formattedDate}</div>
            )}
          </div>
        </G.BoxInfo>
      </G.GuestBookBoxWrapper>
    </>
  );
};
export default memo(GuestBookBox, equal);
