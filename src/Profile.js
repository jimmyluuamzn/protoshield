import './Profile.css';
import Reason from './Reason';
import React from 'react';
import Modal from './Modal';

const Profile = ({ userData }) => {

    const [showModal, setShowModal] = React.useState(false);

    const openModal = () => {
        setShowModal(true);
      }
    
    const reasons = [
        "Constantly exporting customer data.",
        "Login around midnight.",
        "Watching NSFW contents.",
        "Login from a malicious location.",
        "Bad language detected.",
        "Unknown reason.",
        "Played a NSFW game.",
        "High volume of copy-paste detected.",
        "Gift card issued to CSA.",
        "Copying credit card number."
    ]

    function getReason(r) {
        return reasons[r % 10];
    }

    function getRiskLevel(c) {
        if (c == "Ravendale1"){
            return "High";
        }
        else if (c == "Ravendale2"){
            return "Medium";
        }
        else {
            return "Low";
        }
    }

    return (
        <>
        <div>
            {showModal && <Modal setShowModal={setShowModal} userData={userData} />}
        </div>
        <div className="profile" dataId={userData.name.first + userData.name.last} onClick={openModal}>
                <div className="profile__title">{userData.name.first} {userData.name.last}</div>
                <div className="profile__body">
                    <Reason reason={getReason(userData.dob.age)} />
                    <div className="profile__image"><img src={userData.picture.medium} /></div>
                </div>
                <div className="risk_level">
                    <p><strong>Risk level: </strong>{getRiskLevel(userData.location.city)}</p>
                </div>
        </div>
        </>
    )
};

export default Profile;