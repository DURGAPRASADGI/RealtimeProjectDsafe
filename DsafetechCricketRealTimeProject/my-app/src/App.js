import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import UserDashboard from "./pages/UserDashboard";
import Dashboard from "./pages/Dashboard";
import AddBrands from "./pages/AddBrands";
import Analytics from "./pages/Analytics";
import LiveMatch from "./pages/LiveMatch";
import Results from "./pages/Results";
import UserDetails from "./pages/UserDetails";
import AdminRegistration from "./pages/AdminRegistration";
import Home from "./pages/Home";
import Events from "./components/Events/Events";
import TeamRegistration from "./components/Events/TeamRegistration";
import Brands from "./pages/Brands";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <UserDashboard />
              <Home />
            </>
          }
        />

        <Route
          path="/event"
          element={
            <>
              <UserDashboard />
              <Events />{" "}
            </>
          }
        />

        <Route
          path="/team"
          element={
            <>
              <UserDashboard />
              <TeamRegistration />{" "}
            </>
          }
        />

        <Route
          path="/admin"
          element={
            <LayoutHeader>
              <Dashboard />
            </LayoutHeader>
          }
        />
        <Route
          path="/adminRegistration"
          element={
            <LayoutHeader>
              <AdminRegistration />
            </LayoutHeader>
          }
        />
        <Route
          path="/userdata"
          element={
            <LayoutHeader>
              <UserDetails />
            </LayoutHeader>
          }
        />
        <Route
          path="/analytics"
          element={
            <LayoutHeader>
              <Analytics />
            </LayoutHeader>
          }
        />
        <Route
          path="/livematch"
          element={
            <LayoutHeader>
              <LiveMatch />
            </LayoutHeader>
          }
        />
        <Route
          path="/result"
          element={
            <LayoutHeader>
              <Results />
            </LayoutHeader>
          }
        />
        <Route
          path="/addbrands"
          element={
            <LayoutHeader>
              <AddBrands />
            </LayoutHeader>
          }
        />
        <Route
          path="/brands"
          element={
            <>
              <LayoutHeader>
                <Brands />{" "}
              </LayoutHeader>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

function LayoutHeader({ children }) {
  return (
    <>
      <Layout>{children}</Layout>
    </>
  );
}

export default App;
