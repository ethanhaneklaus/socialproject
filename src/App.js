import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import RegisterPage from "./display/RegisterPage";
import LoginPage from "./display/LoginPage";
import UserPage from "./display/UserPage";
import AccountPage from "./display/AccountPage";
import SearchPage from "./display/SearchPage";
import LikesPage from "./display/LikesPage";
import Menu from "./display/Menu";
import SettingsPage from "./menu-pages/SettingsPage";
import NotificationsPage from "./menu-pages/NotificationsPage";
import PrivacyPage from "./menu-pages/PrivacyPage";
import DisplayPage from "./menu-pages/DisplayPage";
import SharePage from "./menu-pages/SharePage";
import DayDarkPage from "./menu-pages/DayDarkPage";
import LoginInfoPage from "./menu-pages/LoginInfoPage";
import VersionPage from "./menu-pages/VersionPage";
import DeactivateAccountPage from "./menu-pages/DeactivateAccountPage";

import ProtectedRoute from "./shared/ProtectedRoute";




function App() {
  return (
    <>
      <Router>
        <Menu />
        <Routes>
          <Route
            path="/register"
            element={
              <ProtectedRoute requiresLogin={false} component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <ProtectedRoute requiresLogin={false} component={<LoginPage />} />
            }
          />
          <Route
            path="/user"
            element={
              <ProtectedRoute requiresLogin={true} component={<UserPage />}
              />
            }
          />
          <Route
            path="/account"
            element={
              <ProtectedRoute requiresLogin={true} component={<AccountPage />}
              />
            }
          />
          <Route
            path="/search"
            element={
              <ProtectedRoute requiresLogin={true} component={<SearchPage />} />
            }
          />
          <Route
            path="/likes"
            element={
              <ProtectedRoute requiresLogin={true} component={<LikesPage />}
              />
            }
          />
          <Route
            path="/settings"
            element={
              <ProtectedRoute requiresLogin={true} component={<SettingsPage />}
              />
            }
          />
          <Route
            path="/notify"
            element={
              <ProtectedRoute requiresLogin={true} component={<NotificationsPage />}
              />
            }
          />
          <Route
            path="/privacy"
            element={
              <ProtectedRoute requiresLogin={true} component={<PrivacyPage />}
              />
            }
          />
          <Route
            path="/display"
            element={
              <ProtectedRoute requiresLogin={true} component={<DisplayPage />}
              />
            }
          />
          <Route
            path="/share"
            element={
              <ProtectedRoute requiresLogin={true} component={<SharePage />}
              />
            }
          />
          <Route
            path="/brightness"
            element={
              <ProtectedRoute requiresLogin={true} component={<DayDarkPage />}
              />
            }
          />
          <Route
            path="/logininfo"
            element={
              <ProtectedRoute requiresLogin={true} component={<LoginInfoPage />}
              />
            }
          />
          <Route
            path="/version"
            element={
              <ProtectedRoute requiresLogin={true} component={<VersionPage />}
              />
            }
          />
          <Route
            path="/deactivate"
            element={
              <ProtectedRoute requiresLogin={true} component={<DeactivateAccountPage />}
              />
            }
          />
          <Route path="*" element={<Navigate to="/login" />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;