import MainHeader from "../header/MainHeader";
import TopHeader from "../header/TopHeader";

const MainLayOut = ({ children }) => {
  return (
    <div>
      <TopHeader />
      <MainHeader />
      {children}
    </div>
  );
};
export default MainLayOut;
