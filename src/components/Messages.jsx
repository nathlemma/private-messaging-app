import default_pfp from "../images/default-pfp.jpg";

const Message = () => {
   
  return (
    <div className="message-cont">
      <img
        src={default_pfp}
        className="m-pfp"
        style={{ height: "20px", width: "20px" }}
      />
      <p>hey how are you</p>
    </div>
  );
};
const Messages = () => {
  return (
    <div className="messages-cont">
      <Message />
      <Message  />
      <Message />
      <Message />
    </div>
  );
};

export default Messages;
