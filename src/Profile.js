import './Profile.css';
import Reason from './Reason';

const Profile = ({ userData }) => {
    function toggleDetails(e) {
        e.preventDefault();
        alert("Details");
    }
    return (
        <div className="profile" onClick={toggleDetails}>
            <div className="profile__title">{userData.name.first} {userData.name.last}</div>
            <div className="profile__body">
                <Reason reason={userData.location}/>
                <div className="profile__image"><img src={userData.picture.medium}/></div>
            </div>
        </div>
    )
};

export default Profile;