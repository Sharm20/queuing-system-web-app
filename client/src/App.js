import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CreateClinic from "./pages/CreateClinic";
import CreateAdmin from "./pages/CreateAdmin";
import { AuthContextProvider } from "./context/AuthContext";
import Admin from "./pages/adminDashboard";
import Clinic from "./pages/clinicDashboard";

const App = () => {
  return (
    <Router>
      <AuthContextProvider>
        <Switch>
          <Route path="/" element={<Login />} />
        </Switch>
        <Switch>
          <Route
            path="/home"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/create-clinic"
            element={
              <Layout>
                <CreateClinic />
              </Layout>
            }
          />
          <Route
            path="/create-admin"
            element={
              <Layout>
                <CreateAdmin />
              </Layout>
            }
          />

          <Route
            path="/admin-dashboard"
            element={
              <Layout>
                <Admin />
              </Layout>
            }
          />

          <Route
            path="/clinic-dashboard"
            element={
              <Layout>
                <Clinic />
              </Layout>
            }
          />
        </Switch>
      </AuthContextProvider>
    </Router>
  );
};

export default App;
