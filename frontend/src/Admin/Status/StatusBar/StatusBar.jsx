import "./StatusBar.css";

const StatusBar = () => {
  return (
    <div className="frame-parent69">
        <button type="button" className="rectangle-parent61 frame-child100 pending">Pending</button>
        <button type="button" className="rectangle-parent62 frame-child101 active">Active</button>
        <button type="button" className="rectangle-parent63 frame-child102 reject">Reject</button>
    </div>
  );
};

export default StatusBar;
