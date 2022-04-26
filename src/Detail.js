import './Detail.css';

const Detail = ({ detail }) => {
  return ( 
    <div className="detail">
      <p>More details about this user.</p>
      <p>{detail}</p>
    </div>
    );
};

export default Detail;