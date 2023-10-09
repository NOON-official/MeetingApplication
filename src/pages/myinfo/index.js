import styled from 'styled-components';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as RightArrow } from '../../asset/svg/RightArrow.svg';
import { ReactComponent as Glasses } from '../../asset/svg/Glasses.svg';
import Section from '../../components/Section';
import MenuBox, { LinkButton, MenuItem } from '../../components/MenuBox';
import { logout } from '../../features/user/asyncActions';
import SigninView from '../../components/Auth/SigninView';
import HeaderBottomLayout from '../../layout/HeaderBottomLayout';

function MyInfo() {
  const dispatch = useDispatch();
  const { accessToken } = useSelector((state) => state.user);

  if (!accessToken) {
    return <SigninView />;
  }

  return (
    <HeaderBottomLayout>
      <Section>
        <MyProfileBox>
          <Glasses />
          <SLink to="/myinfo/account">
            <Text>내 정보 보러가기</Text>
            <SRightArrow />
          </SLink>
        </MyProfileBox>
      </Section>
      <Section>
        <MenuBox>
          <MenuItem>
            <Link to="/myinfo/studentcard">
              <LinkButton>
                학교 인증 <RightArrow />
              </LinkButton>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to="https://moingclub.notion.site/2023-ver-9c7eacd16070426fab83478adfd4c091"
              target="_blank"
            >
              <LinkButton>
                서비스 소개
                <RightArrow />
              </LinkButton>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/guide">
              <LinkButton>
                서비스 가이드
                <RightArrow />
              </LinkButton>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/myinfo/ting">
              <LinkButton>
                보유 팅
                <RightArrow />
              </LinkButton>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/myinfo/review">
              <LinkButton>
                미팅 후기
                <RightArrow />
              </LinkButton>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link>
              <LinkButton>
                이벤트 <RightArrow />
              </LinkButton>
            </Link>
          </MenuItem>
          <MenuItem>
            <LinkButton
              onClick={() => {
                window.open(
                  'https://docs.google.com/forms/d/e/1FAIpQLScjiIvjK7UTXLeR5c5C4unZWXKarGR0sq_9TjMqi51IKtyvUg/viewform',
                );
              }}
              target="_blank"
            >
              제안하기 <RightArrow />
            </LinkButton>
          </MenuItem>
        </MenuBox>
      </Section>
      <Section my="8px" style={{ textAlign: 'right' }}>
        <LogoutButton
          type="text"
          onClick={() => {
            dispatch(logout());
            localStorage.clear();
          }}
        >
          로그아웃
        </LogoutButton>
      </Section>
    </HeaderBottomLayout>
  );
}

export default MyInfo;

const MyProfileBox = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  height: 35px;
  margin-top: 5%;
  padding: 5%;
  border: none;
  border-radius: 10px;
  background-color: #e5e5e5;
`;

const SLink = styled(Link)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #000000e5;
`;

const Text = styled.span`
  margin-left: 3%;
`;

const SRightArrow = styled(RightArrow)`
  margin-left: auto;
`;

const LogoutButton = styled(Button)`
  > span {
    color: ${(props) => props.theme.grey};
  }
`;
