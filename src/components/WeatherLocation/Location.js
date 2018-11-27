import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export const addSpaceString = city => {
    const regex = /,/g;
    return city.replace(regex, ', ');
};

const Location = ( {city} ) => {
    // Destructuring
    //const {city} = props;
    
    return (
        <div className="locationCont">
            <h1>{addSpaceString(city)}</h1>
        </div>
    );
};

Location.propTypes = {
    city: PropTypes.string.isRequired
};

export default Location;
