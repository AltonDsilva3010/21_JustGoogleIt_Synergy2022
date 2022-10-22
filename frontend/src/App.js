import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import DashBoard from "./components/DashBoard";
import NavbarComponent from "./components/Navbar";
import AddEvent from "./components/AddEvent";
import AdminPage from "./components/AdminPage";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<DashBoard />} />
        <Route path="/adminpage" element={<AdminPage />} />
        <Route path="/addevent" element={<AddEvent />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
