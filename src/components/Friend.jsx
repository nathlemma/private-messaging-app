import default_pfp from "../images/default-pfp.jpg";
const Friend = () => {
  return (
    <div className="friend">
      <img src={default_pfp} />
      <div className="f-message-disp">
        <div className="f-username">User Name</div>
        <div className="f-last-message">Hey how is it going?</div>
      </div>
    </div>
  )
}

export default Friend;
