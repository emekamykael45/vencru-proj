import Logo from "./logo";

import Icon from "../assets/svg";

const Header = ({ open, toggle }) => {
  return (
    <div className="flex justify-between items-center p-[15px_16px] md:p-[0px_24px] w-full h-[60px] md:h-auto bg-white">
      <div className="flex items-center">
        <Logo />
        <p className="font-medium text-[20px] pl-[10px]">Untitled UI</p>
      </div>

      {window.innerWidth < 769 && (
        <>
          {open ? (
            <div className="close_menu rotate-[45deg]" onClick={() => toggle()}>
              <Icon name="plus" />
            </div>
          ) : (
            <div className="rotate-[270deg]" onClick={() => toggle()}>
              <Icon name="dashboard" />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Header;
