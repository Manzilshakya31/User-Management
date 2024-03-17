// import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import FAQ from "./pages/FAQ";
import Header from "./pages/theme/Header";
import Layout from "./pages/theme/Layout";
import Footer from "./pages/theme/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserManagement from "./pages/UserManagement";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/user-management" element={<UserManagement />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
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
