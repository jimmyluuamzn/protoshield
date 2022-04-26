import './Profile.css';
import Reason from './Reason';

const Profile = ({ userData }) => {
    
    const reasons = [
        "Constantly exporting customer data.",
        "Login around midnight.",
        "Watching NSFW contents.",
        "Login from a malicious location.",
        "Bad language detected.",
        "Unknown reason.",
        "Copying data into unauthorized sources.",
        "Lots of copy-paste detected.",
        "Gift card issued to CSA.",
        "Copying credit card number."
    ]

    function toggleDetails(e) {
        e.preventDefault();
        alert("Details");
    }

    function getReason(r) {
        return reasons[r];
    }

    return (
        <div className="profile" onClick={toggleDetails}>
            <div className="profile__title">{userData.name.first} {userData.name.last}</div>
            <div className="profile__body">
                <Reason reason={getReason(Math.floor(Math.random() * 10))}/>
                <div className="profile__image"><img src={userData.picture.medium}/></div>
            </div>
        </div>
    )
};

export default Profile;