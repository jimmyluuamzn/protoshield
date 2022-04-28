import './Detail.css';

const Detail = ({ userData }) => {
  return (
    <div class="wrapper">
        <div class="infobar">
            <div class="detailpic"><img src={userData.picture.large} /></div>
            <h2>{userData.name.first} {userData.name.last}</h2>
        </div>
        <div class="tabs">

            <div class="tab">
                <input type="radio" name="css-tabs" id="tab-1" class="tab-switch" />
                <label for="tab-1" class="tab-label">CSA Information</label>
                <div class="tab-content">
                    <h3>Last Login Location:</h3>
                    <p>{userData.location.street.number} {userData.location.street.name}, </p>
                    <p>{userData.location.city}, {userData.location.state}, {userData.location.postcode}, {userData.location.country}</p>
                </div>
            </div>
            <div class="tab">
                <input type="radio" name="css-tabs" id="tab-2" class="tab-switch"/>
                <label for="tab-2" class="tab-label">Audit History</label>
                <div class="tab-content">

                </div>
            </div>
            <div class="tab">
                <input type="radio" name="css-tabs" id="tab-3" class="tab-switch"/>
                <label for="tab-3" class="tab-label">Notes</label>
                <div class="tab-content">
                    <h3>How many times this CSA has been blocked previously: {userData.registered.age % 10}</h3>
                </div>
            </div>
        </div>
    </div>
  )
};

export default Detail;