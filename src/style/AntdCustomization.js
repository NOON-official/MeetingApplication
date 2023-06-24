import { createGlobalStyle } from 'styled-components';

const AntdCustomization = createGlobalStyle`
    .ant-notification-no-description {
        .ant-notification-notice-message {
            margin-bottom: 0;
        }
    }
    .ant-tooltip {
        --antd-arrow-background-color: #eb8888;
    .ant-tooltip-inner {
      background-color: #eb8888;
    }
  }
`;

export default AntdCustomization;
