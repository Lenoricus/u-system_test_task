import Sidebar from './components/Sidebar'
import Navbar from "./components/Navbar";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";

function App() {
    return (
        <div className="relative">
            <BrowserRouter>
                <div className="w-80 fixed sidebar bg-gray-100 border-2 border-gray-200 z-10">
                    <Sidebar/>
                </div>
                <div className="fixed bg-white border-2 border-gray-200 navbar w-full z-0">
                    <Navbar/>
                </div>
                <AppRouter/>
            </BrowserRouter>
        </div>
    );
}

export default App;