import React, { Component } from 'react';

class Profile extends Component {
    render() {
        return (
            <div class="profile dropdown">
                <img class="profile-image dropdown-toggle" id="dropdownMenuButton2" data-bs-toggle="dropdown" src="https://lh3.googleusercontent.com/proxy/lSbQ24YNlbISRFHTp8Zs5RxFVCBx2u13SupqI6ryc9UF-hN-aGfbxo48tGW-5FcM_FSuWUtIqoP1iXukSUcUPXLzI-uwlNoHtrRl8dmXKHQCuE3vQ8NxrmW_CQvRn-IZrG0XmWlzSbiZPwlDYFs" alt="profile" />
                <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                    <li><a class="dropdown-item" href="/">Profile</a></li>
                    <li><a class="dropdown-item" href="/">Dashboard</a></li>
                    <li><a class="dropdown-item" href="/">Settings</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><a class="dropdown-item" href="/">Exit</a></li>
                </ul>
            </div>
        );
    }
}

export default Profile;
