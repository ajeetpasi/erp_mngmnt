import "./App.css";
import ForgetPass from "./components/ForgetPass";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/login";
import Dashboard from "./components/Sidebar";
import Employee from "./components/Employee";
import Layout from "./components/Layout";
import Device from "./components/Device";
import Main from "./components/Main";

import Common from "./components/Common";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/test" element={<Common />}></Route>
        <Route path="/forgetpass" element={<ForgetPass />}></Route>
        <Route
          path="/dashboard"
          element={
            <Layout>
              <Main />
            </Layout>
          }
        ></Route>
        <Route
          path="/employee"
          element={
            <Layout>
              <Employee />
            </Layout>
          }
        ></Route>
        <Route
          path="/device"
          element={
            <Layout>
              <Device />
            </Layout>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
