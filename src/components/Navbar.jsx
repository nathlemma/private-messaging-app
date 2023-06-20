import "../styles.scss";
import default_pfp from "../images/default-pfp.jpg"
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="n-userdetail">
        <img src={default_pfp} className="n-profile-pic"/>
        <span className="n-username">Abel Synth</span>
      </div>
      <button>Logout</button>
    </div>
  )
}
export default Navbar;
