import React from "react";
import PropTypes from 'prop-types';

const Filter = ({value, onChange}) => {
    return (
        <section>
            <label htmlFor="">Find contacts by name
                <input type="text" onChange={onChange} value={value} />
            </label>
        </section>
    )
};

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default Filter;