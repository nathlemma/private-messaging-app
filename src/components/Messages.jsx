import default_pfp from "../images/default-pfp.jpg";
import pfp_1 from "../images/pfp-1.png";
import { useState } from "react";

const Message = () => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
    console.log("Div clicked!");
  };
  const myclass = () => {
    let baseClass = "message-container";
    return isActive ? `${baseClass} friend` : `${baseClass} user`;
  };
  return (
    <div onClick={handleClick} className={myclass()}>
      <div className="message-header">
        <img src={default_pfp} className="m-pfp" />
        <span>1 min ago</span>
      </div>
      <div className="message-content">
        <p>hey</p>
        <img
          src="https://asia.olympus-imaging.com/content/000107507.jpg"
          className="m-pfp"
        />
      </div>
    </div>
  );
};
const Messages = () => {
  return (
    <div className="messages-container">
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  );
};

export default Messages;
