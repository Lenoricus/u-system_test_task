import Sidebar from './components/Sidebar'
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

function App() {
    return (
        <div className="relative">
            <div className="w-80 fixed bg-gray-100 border-2 border-gray-200 z-50">
                <Sidebar/>
            </div>
            <div className="fixed bg-white border-2 border-gray-200 w-full z-40">
                <Navbar/>
            </div>
            <div id="detail" className="ml-80 pt-20 pr-8 pb-4 pl-8">
                <Outlet />
            </div>
        </div>
    );
}

export default App;