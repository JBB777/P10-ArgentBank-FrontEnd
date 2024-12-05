import './Feature.scss';

function Feature({ img, title, description }) {
  return (
    <div className="feature">
      <img src={img} alt="Chat Icon" className="feature__icon" />
      <h3 className="feature__title">{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Feature;
