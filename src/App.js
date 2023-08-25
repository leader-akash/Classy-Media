import { Route, Routes } from "react-router-dom";
import Mockman from "mockman-js";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import Authentication from "./pages/authentication/Authentication";
import Homepage from "./pages/homepage/Homepage";
import Explore from "./pages/explorePage/Explore";
import Bookmark from "./pages/bookmarkPage/Bookmark";
import Profile from "./pages/profile/Profile";

function App() {
  return (
    <div className="App">
        {/* <Authentication /> */}

        <Routes>
          <Route path="/" element={<Authentication /> } />
          <Route path="/home" element={<Homepage /> } />
          <Route path="/explore" element={<Explore /> } />
          <Route path="/bookmarks" element={<Bookmark /> } />
          <Route path="/profile" element={<Profile /> } />
        <Route path="/mockman" element={<Mockman />} />
        </Routes>
        <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default App;
