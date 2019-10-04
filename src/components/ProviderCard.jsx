import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProviderCard = ({
  imageUrl = 'https://via.placeholder.com/400x200',
  name,
  id,
  address,
  rating,
  providerType,
  cardType
}) => (
  <div className={`card provider-card ${cardType} `}>
    {/* <div className="btn btn-sm like">
      <i className="fa fa-favorite" />
    </div> */}
    <Link to={`https://rhmo-sample-api.herokuapp.com/providers/${id}`}>
    <img src={imageUrl} alt="Provider" />
    <div className="card-details">
      <h3 className="card__title">{name}</h3>
      <p className="card__sub-title">{address}</p>
      <div className={`provider-card__lower ${cardType}`}>
        <p className="card__body-text provider-type">{providerType}</p>
        <p className="card__body-text provider-rating">
          {rating}
          /5
        </p>
      </div>
    </div>
    </Link>
  </div>
);

ProviderCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  providerType: PropTypes.string.isRequired,
  cardType: PropTypes.string.isRequired
};

export default ProviderCard;
