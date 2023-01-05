import Logo from "./logo";

import Icon from "../assets/svg";

const Header = ({ open, toggle }) => {
  return (
    <div
      className="flex justify-between items-center p-[13px_0px] md:p-[0px_24px] w-full h-[60px] md:h-auto"
      onClick={() => toggle()}
    >
      <div className="flex">
        <Logo />
        <p className="font-medium text-[20px] pl-[10px]">Untitled UI</p>
      </div>

      {window.innerWidth < 769 && <Icon name="dashboard" />}
    </div>
  );
};

export default Header;
