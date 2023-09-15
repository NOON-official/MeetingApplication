import React from 'react';
import { Space } from 'antd';
import PrimaryModal from './PrimaryModal';
import { ReactComponent as Alert } from '../../asset/svg/ExclamationMark.svg';

export default function ServiceErrModal() {
  return (
    <PrimaryModal title=" " open footer={null} closeIcon={false}>
      <Space
        direction="vertical"
        style={{
          textAlign: 'center',
          width: '100%',
          backgroundColor: '#fff',
        }}
      >
        <Alert />
        <span style={{ fontSize: '18px', fontWeight: '600' }}>
          일시적으로 서비스 이용이 불가합니다.
        </span>
        <span style={{ fontSize: '16px' }}>
          업데이트 및 점검 중입니다.
          <br />
          완료 후 문자를 발송해드릴 예정이니
          <br />
          조금만 더 기다려 주세요!
          <br />
          이용에 불편을 드려 죄송합니다.
        </span>
      </Space>
    </PrimaryModal>
  );
}
