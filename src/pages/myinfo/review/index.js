import React from 'react';
import Section from '../../../components/Section';
import MyinfoLayout from '../../../layout/MyinfoLayout';
import Review from './review';

export default function MyInfoReview() {
  return (
    <MyinfoLayout title="미팅 후기">
      <Section>
        <Review />
      </Section>
    </MyinfoLayout>
  );
}
