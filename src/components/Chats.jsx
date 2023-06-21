import "../styles.scss";
import cam from "../images/cam.png";
import more from "../images/more.png";
import add from "../images/add.png";

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
    </div>
  );
};
export default Chats;
