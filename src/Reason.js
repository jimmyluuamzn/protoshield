import './Reason.css';

const Reason = ({ reason }) => {
  return <div className="reason">
      <p><strong>Risk detected: </strong></p>
      <p>{reason}</p>
    </div>;
};

export default Reason;