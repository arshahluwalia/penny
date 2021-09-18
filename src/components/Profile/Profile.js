import React from 'react';
import './Profile.css';
import lady from '../lady.svg';
import man from '../man.svg';
import swirl from '../swirl.svg';

class Profile extends React.Component {

    render() {
        return (
            <div className="profile">
                <img className="swirl" src={swirl} alt="swirl"></img>
                <h1>It's the thought that counts...</h1>
                <div className="profile_container">
                    <div className="deposit">
                        <h1>Deposits</h1>
                        <p>You have deposited <b>128</b> thoughts. Keep up the great work!</p>
                    </div>
                    <img src={lady} alt="lady"></img>
                    <img src={man} alt="guy"></img>
                    <div className="withdraw">
                        <h1>Withdrawals</h1>
                        <p>Look at you go! Your thoughts have earned <b>50</b> pennies (that's a lot!)</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;