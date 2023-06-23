import attach from "../images/attach.png";
import img from "../images/img.png";
const TypeField = () => {
  return (
    <div className="typefield-cont">
      <input type="text" placeholder="type a message..." />
      <div className="send">
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <img src={img}></img>
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};

export default TypeField;
