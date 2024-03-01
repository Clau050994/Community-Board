
import Card from '../Card/Card'; 
import './CardGrid.css';
import PropTypes from 'prop-types';



// In CardGrid.jsx
function CardGrid({ cards }) { // Use the passed cards prop directly
  return (
    <div className="card-grid">
      {cards.map(card => (
        <Card
          key={card.id}
          title={card.title}
          imageUrl={card.imageUrl}
          readMoreUrl={card.readMoreUrl} // Make sure this is passed correctly
        />
      ))}
    </div>
  );
}

CardGrid.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      readMoreUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
};





export default CardGrid;
