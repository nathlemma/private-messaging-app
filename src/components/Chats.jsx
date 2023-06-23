import "../styles.scss";
import cam from "../images/cam.png";
import more from "../images/more.png";
import add from "../images/add.png";
import TypeField from "./TypeField";
import Messages from "./Messages";

const Chats = () => {
  return (
    <div className="chats">
      <div className="c-nav">
        <div className="c-icons">
          <img src={cam} />
          <img src={add} />
          <img src={more} />
        </div>
      </div>
      <Messages />
      <TypeField />
    </div>
  );
};
export default Chats;
