import { Routes as Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { AuthContextProvider } from "./context/AuthContext";

const App = () => {
  return (
    <>
      <AuthContextProvider>
        <Switch>
          <Route path="/login" element={<Login />} />
        </Switch>
        <Switch>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/register"
            element={
              <Layout>
                <Register />
              </Layout>
            }
          />
        </Switch>
      </AuthContextProvider>
    </>
  );
};

export default App;
