import React from 'react'
import PropTypes from 'prop-types'

const SelectedLanguage = (props) =>  {
    let languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
    return(
        <ul className='languages'>
        {languages.map((lang) => {
            return (
            <li
                style={lang === props.selectedLanguage ? { color: '#d0021b'} : null}
                onClick={props.onSelect.bind(null, lang)}
                key={lang}>
                {lang}
            </li>
            );
        })}
        </ul>
  )
}

SelectedLanguage.propTypes = {
    selectedLanguage: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
};

export default SelectedLanguage