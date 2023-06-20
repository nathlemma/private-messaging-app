import "../styles.scss";
import Friend from "./Friend";
import default_pfp from "../images/default-pfp.jpg"
const Search = () => {
  return (
    <div className="s-container">
      <div className="search">
        <form>
          <input type="text" placeholder="Search a user" />
        </form>
      </div>
      <div className="s-result" >
        <img src={default_pfp}/>
        <div className="s-username">User Name</div>
      </div>
    </div>
  );
};

export default Search;
