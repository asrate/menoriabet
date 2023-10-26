import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignOut from "./pages/SignOut";
import Payments from "./pages/Payments";
import Tenants from "./pages/Tenants";
import Utilities from "./pages/Utilities";
import Home from "./pages/Home";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signout" element={<SignOut />} />
        <Route path="/payment" element={<Payments />} />
        <Route path="/tenants" element={<Tenants />} />
        <Route path="/utilities" element={<Utilities />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
