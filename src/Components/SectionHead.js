import { ReactComponent as HamMenu } from "./hamburger-menu.svg";

const SectionHead = ({ title }) => {
  return (
    <div className="section-head side-section-head">
      <span></span>
      <h3>{title}</h3>
      <button className="ham-btn">
        <HamMenu width="15px" height="15px" />
      </button>
    </div>
  );
};

export default SectionHead;
