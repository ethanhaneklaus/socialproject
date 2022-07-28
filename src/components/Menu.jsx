import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { SearchContext } from "../context/SearchContext";
import { AccountContext } from "../context/AccountContext";
import { SettingsContext } from "../context/SettingsContext";
import { UserContext } from "../context/UserContext";
import { LikesContext } from "../context/LikesContext";
function Menu() {
    const { loggedInUser, logout } = useContext(UserContext);
    const { setSearchResults } = useContext(SearchContext);
    const { clear } = useContext(LikesContext);

    return (
        <nav>
            <div class="dropdown">
                <button class="dropbtn">Menu</button>
/* dropbtn changes the color of the actual button */
                <div class="dropdown-content">
/* dropdown-content changes color of tabs in drop down */
                    <ul>
                        {loggedInUser && (
                            <>
                                <li><NavLink to="/settings">Settings</NavLink></li>
                                <li><NavLink to="/accountinfo">Account Info</NavLink></li>
                                <li><NavLink to="/selfcontacts">Self Contacts Info</NavLink></li>
                                <li><NavLink to="/support">Contact Support</NavLink></li>
                                <li><NavLink to="/agreements">User Agreements</NavLink></li>
                                <li><NavLink onClick={() => { clear(); setSearchResults([]); logout(); }} to="/login">Logout</NavLink></li>
                            </>
                        )}
                        {!loggedInUser && (
                            <>
                                <li><NavLink to="/login">Login</NavLink></li>
                                <li><NavLink to="/register">Register</NavLink></li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default Menu;
