import "./navButton.css";
type Props = {
  handleNext: () => void;
  handlePrev: () => void;
};
const NavButton = (props: Props) => {
  return (
    <div className="navbuttons">
      <div className="leftbutton" onClick={props.handlePrev}>
        <a id="left">
          <i className="fa-solid fa-long-arrow-left"></i>
        </a>
      </div>
      <div className="rightbutton" onClick={props.handleNext}>
        <a id="right">
          <i className="fa-solid fa-long-arrow-right"></i>
        </a>
      </div>
    </div>
  );
};

export default NavButton;
