import "./App.css";
import Admin from "./Components/Admin";
import EmployeeDetails from "./Components/EmployeeDetails";
import Header from "./Components/Header";
import LoginPage from "./Components/Login";
import RegisterEmployee from "./Components/RegisterEmployee";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<LoginPage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/create-employee" element={<RegisterEmployee />} />
        <Route path="/employee" element={<EmployeeDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
