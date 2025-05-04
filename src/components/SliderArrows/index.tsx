import chevron_left from "assets/images/loanbuilder/chevron-left.svg";
import chevron_right from "assets/images/loanbuilder/chevron-right.svg";

export const NextArrow = (props) => {
  const { style, onClick } = props;
  return (
    <div
      className={"right-arrow"}
      style={{
        ...style,
        display: "flex",
        background: "rgba(255,255,255,0.25)",
        width: "20px",
        height: "31px",
      }}
      onClick={onClick}
    >
      <img
        style={{ width: "6px", margin: "auto" }}
        src={chevron_right}
        alt=""
      />
    </div>
  );
};

export const PrevArrow = (props) => {
  const { style, onClick } = props;
  return (
    <div
      className={"left-arrow"}
      style={{
        ...style,
        display: "flex",
        background: "rgba(255,255,255,0.25)",
        width: "20px",
        height: "31px",
      }}
      onClick={onClick}
    >
      <img style={{ width: "6px", margin: "auto" }} src={chevron_left} alt="" />
    </div>
  );
};

export const Dots = ({ isActive }) => (
  <div style={{ padding: "10px 0" }}>
    <span
      style={{
        display: "inline-block",
        height: "8px",
        width: "8px",
        background: isActive ? "#ccc" : "#7e7e7e",
        borderRadius: "10px",
        bottom: "28px",
      }}
    ></span>
  </div>
);
