import SideBar from "../../components/sideBar/SideBar"
import TopBar from "../../components/topBar/TopBar"
import Feed from "../../components/feed/Feed"
import './home.css'

const Home = () => {
    return (
        <div>
            <TopBar />
            <div className="homeContainer">
                <SideBar />
                <Feed />
            </div>
        </div>
    )
}

export default Home