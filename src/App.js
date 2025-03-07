import "./App.css";
import Home from "./components/Pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./components/Pages/Contact/Contact";
import NotFound from "./components/Pages/NotFound/NotFound";
import AuthContext from "./context/AuthContext";
import Login from "./components/Authorization/Login/Login";
import Register from "./components/Authorization/Login/Register";
import Dashboard from "./components/Dashboard/Dashboard";
import MakeAdmin from "./components/Dashboard/MakeAdmin/MakeAdmin";
import AddServices from "./components/Dashboard/AddServices/AddServices";
import ManageAppoinment from "./components/Dashboard/ManageAppointMents/ManageAppoinment";
import Payments from "./components/Dashboard/Payments/Payments";
import MyCarts from "./components/Dashboard/MyCarts/MyCarts";
import Doctors from "./components/Pages/Doctors/Doctors";

function App() {
  return (
    <AuthContext>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/doctors" element={<Doctors/>} />
          {/* dashboard route  */}
          <Route path="/dashboard/*" element={<Dashboard />}>
            <Route path="makeadmin" element={<MakeAdmin />} />
            <Route path="addservices" element={<AddServices />} />
            <Route path="manageappoinment" element={<ManageAppoinment />} />
            <Route path="payments" element={<Payments />} />
            <Route path="mycarts" element={<MyCarts />} />
          </Route>
          {/* dashboard route ends  */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthContext>
  );
}

export default App;
