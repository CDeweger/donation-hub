import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import EditOrganization from "./components/EditOrganization/EditOrganization";
import LogoutPage from "./pages/LogoutPage/LogoutPage";
import FirstNationPage from "./pages/FirstNationPage/FirstNationPage";
//import DonationPage from "./components/DonationPage/DonationPage";
//import EditDonationCard from "./components/EditDonationCard/EditDonationCard";
import DonationCard from "./components/DonationCard/DonationCard";
import EditDonationCardModal from "./components/EditDonationCardModal/EditDonationCardModal";
import AlexSample from "./components/AlexSample/AlexSample";
import OrganizationDetailPage from "./pages/FirstNationDetailPage/OrganizationDetailPage";
const App = () => {
  const isLoggedIn = sessionStorage.getItem("token");
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/signup" exact component={SignupPage} />
          <Route path="/profile" exact component={ProfilePage} />
          <Route path="/profile/:id/edit" exact component={EditOrganization} />
          {/* <Route path="/:id/edit" exact component={EditOrganization} /> */}

          <Route path="/test" exact component={AlexSample} />
          <Route
            path="/login"
            exact
            component={!isLoggedIn ? LoginPage : ProfilePage}
          />
          <Route path="/logout" exact component={LogoutPage} />
          <Route path="/organization/" exact component={FirstNationPage} />

          <Route
            path="/organization/:id"
            exact
            component={OrganizationDetailPage}
          />
          {/* <Route path="*" exact>
            <Redirect to="/" exact component={HomePage} />
          </Route> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
