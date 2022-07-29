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
import Menu from "./components/Menu";
import SettingsPage from "./menu-pages/SettingsPage";
import NotificationsPage from "./menu-pages/NotificationsPage";
import PrivacyPage from "./menu-pages/PrivacyPage";
import DisplayPage from "./menu-pages/DisplayPage";
import SharePage from "./menu-pages/SharePage";
import DayDarkPage from "./menu-pages/DayDarkPage";
import LoginInfoPage from "./menu-pages/LoginInfoPage";
import VersionPage from "./menu-pages/VersionPage";
import DeactivateAccountPage from "./menu-pages/DeactivateAccountPage";
import { SearchContext } from "./context/SearchContext";
import { LikesContext } from "./context/LikesContext";

import ProtectedRoute from "./shared/ProtectedRoute";
import { useState, useContext, useMemo } from "react";




function App() {
  const [url, setUrl] = useState("");
  const [search, setSearch] = useState("");
  const { searchResults, setSearchResults } = useContext(SearchContext);
  const { likes, add, remove, data } = useContext(LikesContext);
  const likesIDs = useMemo(
    () => likes.map((val) => val.data_id),
    [likes]
  );

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
      <form>
        <label htmlFor="search">Search</label>
        <input
          type="search"
          name="searchBar"
          id="search-bar"
          value={searchResults}
          onChange={(e) => { setSearchResults(e.target.value) }}
        />
        <button
          onClick={(e) => { e.preventDefault(); setUrl("&q=" + searchResults); }}
        >submit</button>
      </form >
      <div className="flex flex-wrap">

        {data && data.map((data, idx) => (<div className="" key={idx} >
          <img
            onClick={(data) => (data)}
            src={data.url}
            alt={data.title}
            add={add}
            remove={remove}
            isLikes={likesIDs.includes(data.data_id)}
          />
        </div>
        ))}
        {data && data.length === 0 && (
          <h3 className="text-center col-12">No results found</h3>
        )}
        {console.log(data)}
      </div>
      <div>
        <div>
          <div>
            <div class="d-flex flex-column col-md-8">
              <div class="d-flex flex-row align-items-center text-left comment-top p-2 bg-white border-bottom px-4">
                <div class="profile-image"><img class="rounded-circle" src="https://i.imgur.com/t9toMAQ.jpg" width="70" /></div>
                <div class="d-flex flex-column-reverse flex-grow-0 align-items-center votings ml-1"><i class="fa fa-sort-up fa-2x hit-voting"></i><span>127</span><i class="fa fa-sort-down fa-2x hit-voting"></i></div>
                <div class="d-flex flex-column ml-3">
                  <div class="d-flex flex-row post-title">
                    <h5>Is sketch 3.9.1 stable?</h5><span class="ml-2">(Jesshead)</span></div>
                  <div class="d-flex flex-row align-items-center align-content-center post-title"><span class="bdge mr-1">video</span><span class="mr-2 comments">13 comments&nbsp;</span><span class="mr-2 dot"></span><span>6 hours ago</span></div>
                </div>
              </div>
              <div class="coment-bottom bg-white p-2 px-4">
                <div class="d-flex flex-row add-comment-section mt-4 mb-4"><img class="img-fluid img-responsive rounded-circle mr-2" src="https://i.imgur.com/qdiP4DB.jpg" width="38" /><input type="text" class="form-control mr-3" placeholder="Add comment" /><button class="btn btn-primary" type="button">Comment</button></div>
                <div
                  class="commented-section mt-2">
                  <div class="d-flex flex-row align-items-center commented-user">
                    <h5 class="mr-2">Corey oates</h5><span class="dot mb-1"></span><span class="mb-1 ml-2">4 hours ago</span></div>
                  <div class="comment-text-sm"><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></div>
                  <div
                    class="reply-section">
                    <div class="d-flex flex-row align-items-center voting-icons"><i class="fa fa-sort-up fa-2x mt-3 hit-voting"></i><i class="fa fa-sort-down fa-2x mb-3 hit-voting"></i><span class="ml-2">10</span><span class="dot ml-2"></span>
                      <h6 class="ml-2 mt-1">Reply</h6>
                    </div>
                  </div>
                </div>
                <div class="commented-section mt-2">
                  <div class="d-flex flex-row align-items-center commented-user">
                    <h5 class="mr-2">Samoya Johns</h5><span class="dot mb-1"></span><span class="mb-1 ml-2">5 hours ago</span></div>
                  <div class="comment-text-sm"><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..</span></div>
                  <div class="reply-section">
                    <div class="d-flex flex-row align-items-center voting-icons"><i class="fa fa-sort-up fa-2x mt-3 hit-voting"></i><i class="fa fa-sort-down fa-2x mb-3 hit-voting"></i><span class="ml-2">15</span><span class="dot ml-2"></span>
                      <h6 class="ml-2 mt-1">Reply</h6>
                    </div>
                  </div>
                </div>
                <div class="commented-section mt-2">
                  <div class="d-flex flex-row align-items-center commented-user">
                    <h5 class="mr-2">Makhaya andrew</h5><span class="dot mb-1"></span><span class="mb-1 ml-2">10 hours ago</span></div>
                  <div class="comment-text-sm"><span>Nunc sed id semper risus in hendrerit gravida rutrum. Non odio euismod lacinia at quis risus sed. Commodo ullamcorper a lacus vestibulum sed arcu non odio euismod. Enim facilisis gravida neque convallis a. In mollis nunc sed id. Adipiscing elit pellentesque habitant morbi tristique senectus et netus. Ultrices mi tempus imperdiet nulla malesuada pellentesque.</span></div>
                  <div
                    class="reply-section">
                    <div class="d-flex flex-row align-items-center voting-icons"><i class="fa fa-sort-up fa-2x mt-3 hit-voting"></i><i class="fa fa-sort-down fa-2x mb-3 hit-voting"></i><span class="ml-2">25</span><span class="dot ml-2"></span>
                      <h6 class="ml-2 mt-1">Reply</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>


  );
}

export default App;