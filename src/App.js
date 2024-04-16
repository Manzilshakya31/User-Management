// import logo from "./logo.svg";
import "./App.css";
// import Home from "./pages/Home";
import FAQ from "./pages/FAQ";
import Header from "./pages/theme/Header";
import Layout from "./pages/theme/Layout";
// import Footer from "./pages/theme/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import UserManagement from "./pages/usermanagement/UserManagement";
// import Add from "./pages/usermanagement/AddUser";
import AddUser from "./pages/usermanagement/AddUser";
import UserDetail from "./pages/usermanagement/UserDetail";
import Login from "./pages/Auth/Login";
import PrivateRoute from "./routes/PrivateRoute";
import UserDelete from "./pages/usermanagement/UserDelete";
// import Add from "./pages/UserManagement/Add";
// import Add from "./pages/usermanagement/Add";
// import UserManagement from "./pages/userManagement/UserManagement";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PrivateRoute component={Layout} />}>
            {/* <Route
              path="/header"
              element={<PrivateRoute component={Header} />}
            /> */}
            <Route
              path="/user-management"
              element={<PrivateRoute component={UserManagement} />}
            />
            <Route
              path="/user-management/add"
              element={<PrivateRoute component={AddUser} />}
            />
            <Route
              path="/user-management/edit/:userId"
              element={<PrivateRoute component={AddUser} />}
            />
            <Route
              path="/user-management/detail/:userId"
              element={<PrivateRoute component={UserDetail} />}
            />
            <Route
              path="/user-management/delete/:userId"
              element={<PrivateRoute component={UserDelete} />}
            />
            <Route path="/faq" element={<PrivateRoute component={FAQ} />} />
            <Route
              path="/contact"
              element={<PrivateRoute component={Contact} />}
            />
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
