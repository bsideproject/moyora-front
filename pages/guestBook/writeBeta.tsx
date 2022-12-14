import React, { useState } from 'react';
import W from '@components/GuestBook/WriteBeta.styles';
import LogoHeader from '@components/Common/LogoHeader';
import Image from 'next/image';
import Sticker1 from '@public/svgs/sticker-1.svg';
import Sticker2 from '@public/svgs/sticker-2.svg';
import Sticker3 from '@public/svgs/sticker-3.svg';
import Sticker4 from '@public/svgs/sticker-4.svg';
import Sticker5 from '@public/svgs/sticker-5.svg';
import Sticker6 from '@public/svgs/sticker-6.svg';
import Sticker7 from '@public/svgs/sticker-7.svg';
import Sticker8 from '@public/svgs/sticker-8.svg';
import Sticker9 from '@public/svgs/sticker-9.svg';
import Sticker10 from '@public/svgs/sticker-10.svg';
import Sticker11 from '@public/svgs/sticker-11.svg';
import Sticker12 from '@public/svgs/sticker-12.svg';
import QuotationMark1 from '@public/svgs/quotationMark-1.svg';
import QuotationMark2 from '@public/svgs/quotationMark-2.svg';
import QuotationMark3 from '@public/svgs/quotationMark-3.svg';
import QuotationMark4 from '@public/svgs/quotationMark-4.svg';
import QuotationMark5 from '@public/svgs/quotationMark-5.svg';
import { TStickerType } from '@configs/bigContents';
import WarningIcon from '@public/svgs/icon-warning.svg';
import { RadioChangeEvent } from 'antd';
import { useToggle } from 'react-use';
import { useRouter } from 'next/router';

const stickers = {
  '1': { sticker: Sticker1, quotationMark: QuotationMark1 },
  '2': { sticker: Sticker2, quotationMark: QuotationMark1 },
  '3': { sticker: Sticker3, quotationMark: QuotationMark1 },
  '4': { sticker: Sticker4, quotationMark: QuotationMark1 },
  '5': { sticker: Sticker5, quotationMark: QuotationMark2 },
  '6': { sticker: Sticker6, quotationMark: QuotationMark2 },
  '7': { sticker: Sticker7, quotationMark: QuotationMark3 },
  '8': { sticker: Sticker8, quotationMark: QuotationMark3 },
  '9': { sticker: Sticker9, quotationMark: QuotationMark4 },
  '10': { sticker: Sticker10, quotationMark: QuotationMark4 },
  '11': { sticker: Sticker11, quotationMark: QuotationMark5 },
  '12': { sticker: Sticker12, quotationMark: QuotationMark5 },
};

const WriteBeta: React.FC = () => {
  const router = useRouter();
  const [selectedSticker, setSelectedSticker] = useState<TStickerType>('1');
  const onChangeStar = (e: RadioChangeEvent) => {
    setSelectedSticker(e.target.value);
  };
  const [guestBookText, setGuestBookText] = useState('');
  const onChangeGuestBookText: React.ChangeEventHandler<HTMLTextAreaElement> = (e) =>
    setGuestBookText(e.target.value);

  const [alert, onToggleAlert] = useToggle(false);
  const [confirm, onToggleConfirm] = useToggle(false);
  const onClickFinish = () => {
    if (guestBookText.trim().length < 2) {
      onToggleAlert();
    } else {
      onToggleConfirm();
    }
  };
  const onClickWrite = () => router.replace('/guestBook/list');
  return (
    <>
      <W.GuestBookWriteWrapper>
        <LogoHeader headerIcons={true} />
        <h1>?????? ?????? ????????? ?????????</h1>
        <W.TextAreaSection>
          <section>
            <div>
              <Image src={stickers[selectedSticker].quotationMark} alt="quotationMark" />
            </div>
            <div>
              <Image src={stickers[selectedSticker].sticker} alt="sticker" />
            </div>
          </section>
          <W.TextArea
            showCount
            maxLength={200}
            placeholder="????????? ?????? ?????? ????????????."
            bordered={false}
            autoSize={{ minRows: 3, maxRows: 8 }}
            onChange={onChangeGuestBookText}
          />
        </W.TextAreaSection>
        <W.WarningSection>
          <Image src={WarningIcon} alt="warningIcon" />
          &nbsp;????????? ????????? ????????? ?????????!
        </W.WarningSection>
        <W.SelectStarSection>
          <h1>????????? ?????? ????????? ?????????</h1>
          <W.StarGroup onChange={onChangeStar} defaultValue={selectedSticker}>
            {Object.entries(stickers).map(([key, value]) => (
              <W.Star key={key} value={key}>
                <Image src={value.sticker} alt="sticker" />
              </W.Star>
            ))}
          </W.StarGroup>
        </W.SelectStarSection>
        <W.FinishButton type="primary" onClick={onClickFinish}>
          <p>?????? ??????</p>
        </W.FinishButton>
        <W.AlertModal
          closable={false}
          maskStyle={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}
          open={alert}
          onCancel={onToggleAlert}
          footer={[]}
          centered
        >
          <Image src={Sticker5} alt="sticker" />
          <h2>?????? 2??? ?????? ????????? ?????????!</h2>
          <W.ModalButton type="primary" onClick={onToggleAlert}>
            <p>??????</p>
          </W.ModalButton>
        </W.AlertModal>
        <W.ConfirmModal
          closable={false}
          maskStyle={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}
          open={confirm}
          footer={[]}
          centered
        >
          <Image src={Sticker1} alt="sticker" />
          <h2>????????? ???????????????????</h2>
          <h3>??????????????? ??????, ????????? ???????????????!</h3>
          <W.ModalButton type="primary" onClick={onClickWrite}>
            <p>???, ???????????????.</p>
          </W.ModalButton>
          <W.ModalButton onClick={onToggleConfirm}>
            <p>??? ???????????????.</p>
          </W.ModalButton>
        </W.ConfirmModal>
      </W.GuestBookWriteWrapper>
    </>
  );
};

export default WriteBeta;
