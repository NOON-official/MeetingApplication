import { Card, Col, Row } from 'antd';
import styled from 'styled-components';
import Section from '../../components/Section';
import MyinfoLayout from '../../layout/MyinfoLayout';

export default function Account() {
  return (
    <MyinfoLayout title="계정 관리">
      <Section my="12px">
        <Subtitle>내 정보</Subtitle>
        <InfoCard>
          <Row>
            <Col span={4}>이름</Col>
            <Col span={20}>문규원</Col>
          </Row>
          <Row>
            <Col span={4}>전화번호</Col>
            <Col span={20}>010-7777-7777</Col>
          </Row>
        </InfoCard>
      </Section>
    </MyinfoLayout>
  );
}

const Subtitle = styled.div`
  font-size: 14px;
  color: ${(props) => props.theme.grey};
  padding-left: 20px;
  padding-bottom: 2px;
`;

const InfoCard = styled(Card)`
  .ant-col {
    font-family: 'Nanum JungHagSaeng';
    font-size: 18px;

    :first-child {
      color: #bbbbbb;
    }
    :last-child {
      color: #777777;
    }
  }
`;
