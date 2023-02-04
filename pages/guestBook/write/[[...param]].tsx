import React, { useState } from 'react';
import W from '@components/GuestBook/WriteBeta.styles';
import LogoHeader from '@components/Common/LogoHeader';
import Image from 'next/image';
import { TStickerType } from '@configs/bigContents';
import WarningIcon from '@public/svgs/icon-warning.svg';
import { Checkbox, RadioChangeEvent } from 'antd';
import { useToggle } from 'react-use';
import { useRouter } from 'next/router';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import stickers from '@configs/stickers';
import { useAddSchoolGuestBook } from '@APIs/schoolGuestBook';
import { useAddNote } from '@APIs/note';
import { useMyInfo } from '@APIs/user';

const WriteBeta: React.FC = () => {
  const router = useRouter();
  const { data: me } = useMyInfo();
  const [id] = router.query.param ?? '';
  const [selectedSticker, setSelectedSticker] = useState<TStickerType>('1');
  const [isPublic, togglePublic] = useToggle(false);
  const onChangeStar = (e: RadioChangeEvent) => {
    setSelectedSticker(e.target.value);
  };
  const [guestBookText, setGuestBookText] = useState('');
  const onChangeGuestBookText: React.ChangeEventHandler<HTMLTextAreaElement> = (e) =>
    setGuestBookText(e.target.value);

  const [alert, onToggleAlert] = useToggle(false);
  const [confirm, onToggleConfirm] = useToggle(false);

  const { mutate: guestBookMutate } = useAddSchoolGuestBook();
  const { mutate: noteMutate } = useAddNote();

  const onClickFinish = () => {
    if (guestBookText.trim().length < 2) {
      onToggleAlert();
    } else {
      onToggleConfirm();
    }
  };

  const onClickWrite = () => {
    if (id === 'mySchool')
      guestBookMutate({
        content: guestBookText,
        schoolId: +(me?.schoolId ?? 0),
        sticker: selectedSticker,
      });
    else noteMutate({ content: guestBookText, sticker: selectedSticker, userId: +id, isPublic });
    router.replace(`/guestBook/list/${id}`);
  };
  const onChange = (e: CheckboxChangeEvent) => {
    togglePublic(e.target.checked);
  };
  return (
    <>
      <W.GuestBookWriteWrapper>
        <LogoHeader headerIcons={true} />
        <h1>{id === 'mySchool' ? `우리 학교 방명록 남기기` : `OO에게 쪽지 쓰기`}</h1>
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
            placeholder="남기고 싶은 말을 써주세요."
            bordered={false}
            autoSize={{ minRows: 3, maxRows: 8 }}
            onChange={onChangeGuestBookText}
          />
          {id === 'mySchool' ? (
            ''
          ) : (
            <Checkbox checked={isPublic} onChange={onChange}>
              비공개로 작성하기
            </Checkbox>
          )}
        </W.TextAreaSection>
        <W.WarningSection>
          <Image src={WarningIcon} alt="warningIcon" />
          &nbsp;비속어 사용은 자제해 주세요!
        </W.WarningSection>
        <W.SelectStarSection>
          <h1>나만의 별을 선택해 주세요</h1>
          <W.StarGroup onChange={onChangeStar} defaultValue={selectedSticker}>
            {Object.entries(stickers).map(([key, value]) => (
              <W.Star key={key} value={key}>
                <Image src={value.sticker} alt="sticker" />
              </W.Star>
            ))}
          </W.StarGroup>
        </W.SelectStarSection>
        <W.FinishButton type="primary" onClick={onClickFinish}>
          <p>작성 완료</p>
        </W.FinishButton>
        <W.AlertModal
          closable={false}
          maskStyle={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}
          open={alert}
          onCancel={onToggleAlert}
          footer={[]}
          centered
        >
          <Image src={stickers[5].sticker} alt="sticker" />
          <h2>최소 2자 이상 입력해 주세요!</h2>
          <W.ModalButton type="primary" onClick={onToggleAlert}>
            <p>닫기</p>
          </W.ModalButton>
        </W.AlertModal>
        <W.ConfirmModal
          closable={false}
          maskStyle={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}
          open={confirm}
          footer={[]}
          centered
        >
          <Image src={stickers[1].sticker} alt="sticker" />
          <h2>작성을 완료하셨나요?</h2>
          <h3>완료하시면 수정, 삭제가 불가능해요!</h3>
          <W.ModalButton type="primary" onClick={onClickWrite}>
            <p>네, 확인했어요.</p>
          </W.ModalButton>
          <W.ModalButton onClick={onToggleConfirm}>
            <p>더 작성할게요.</p>
          </W.ModalButton>
        </W.ConfirmModal>
      </W.GuestBookWriteWrapper>
    </>
  );
};

export default WriteBeta;
