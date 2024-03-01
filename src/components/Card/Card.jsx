
import './Card.css'; 
import PropTypes from 'prop-types';

function Card({ title, imageUrl, readMoreUrl }) {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <a href={readMoreUrl} target="_blank" rel="noopener noreferrer" className="btn-read-more">
          Read More
        </a>
      </div>
    </div>
  );
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    readMoreUrl: PropTypes.string,
  };

export default Card;
