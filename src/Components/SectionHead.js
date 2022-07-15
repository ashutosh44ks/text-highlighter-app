import { ReactComponent as HamMenu } from "./hamburger-menu.svg";

const SectionHead = ({ title, openSide, setOpenSide }) => {
  return (
    <div className="section-head side-section-head">
      <span></span>
      <h3>{title}</h3>
      <button className="ham-btn" onClick={() => setOpenSide(!openSide)}>
        <HamMenu width="15px" height="15px" />
      </button>
    </div>
  );
};

export default SectionHead;
