// import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import FAQ from "./pages/FAQ";
import Header from "./pages/theme/Header";
import Layout from "./pages/theme/Layout";
import Footer from "./pages/theme/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import UserManagement from "./pages/usermanagement/UserManagement";
// import Add from "./pages/usermanagement/AddUser";
import AddUser from "./pages/usermanagement/AddUser";
import UserDetail from "./pages/usermanagement/UserDetail";
import Login from "./pages/Auth/Login";
// import Add from "./pages/UserManagement/Add";
// import Add from "./pages/usermanagement/Add";
// import UserManagement from "./pages/userManagement/UserManagement";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/header" element={<Header />} />
            <Route path="/user-management" element={<UserManagement />} />
            <Route path="/user-management/add" element={<AddUser />} />
            <Route
              path="/user-management/detail/:id"
              element={<UserDetail />}
            />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
      {/* <header className="App-header"> */}

      {/* <div>
        <p> */}

      {/* <h2>HEllO!!!</h2> */}
      {/* <Home />
            <FAQ /> */}

      {/*    <Layout />
          <Footer />
        </p>
      </div> */}

      {/* </header> */}
    </div>
  );
}

export default App;
