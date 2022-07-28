import React from "react";


export function SettingsPage(props) {

    return (
        <>
            <h1>Settings</h1>
            <nav>
                <li><NavLink to="/notify">Notifications</NavLink></li>
                <li><NavLink to="/privacy">Privacy Settings</NavLink></li>
                <li><NavLink to="/display">Display Settings</NavLink></li>
                <li><NavLink to="/share">Share Settings</NavLink></li>
                <li><NavLink to="/brightness">Day/Dark Mode</NavLink></li>
                <li><NavLink to="/logininfo">Username and Password</NavLink></li>
                <li><NavLink to="/version">Version 00.00(000)</NavLink></li>
                <li><NavLink to="/deactivate">Deactivate Account</NavLink></li>
            </nav>
        </>
    );
}

export default SettingsPage;

// +Settings
//             -Notifications
//                 `Mute
//                     +Temp Mute
//                         -Time Amout Specified Days00:Hours00:Minutes00
//                     +On/Off
//             -Privacy Settings
//                 `Visible to
//                     +Everyone (default)
//                     +Friends and Followers
//                     +Private
//                     +Invite Only
//             -Display Settings
//                 `Pronouns/Identification
//                 `Age
//                 `Location (Country,State/Province)
//             -Share Settings
//                 `Show Shareable Options
//                     +Contacts
//                     +Download
//                     +Email
//                     +Facebook
//                     +Facebook Messanger
//                     +Instagram
//                     +Snapchat
//                     +TikTok
//                     +Twitter
//             -Day/Dark Mode
//                 `On/Off
//             -Username&Password {Requires Authentication}
//                 `Displayed Username&Password
//                 `Change Username or Password
//                 `Pin {Requires Authentication}
//                     +Display Pin
//                     +Change Pin
//             -Version 00.00(000)
//             -Log Out
//             -Deactivate Account {Requires Authentication} {Requires Re-acknowledgment}