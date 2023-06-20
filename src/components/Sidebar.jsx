import "../styles.scss";
import Navbar from "./Navbar";
import Search from "./Search";
import FriendIcon from "./FriendIcon";

const Sidebar = ()=>{
    return(
        <div className="sidebar">
            <Navbar/>
            <Search/>
            <FriendIcon/>
        </div>
    )
}
export default Sidebar