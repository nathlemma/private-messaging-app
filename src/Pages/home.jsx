import Chats from "../components/Chats"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import "../styles.scss";

const Home = ()=>{
    return(
        <div className="home">
            <div className="h-container">
                <Sidebar/>
                <Chats/>
            </div>
        </div>
    )
}
export default Home