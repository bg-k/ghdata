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
        <li><LangInput onTextUpdate={text => props.onSelect(text)}/></li>
        </ul>
  )
}

const LangInput = (props) => {
    return(
        <div>
            <input type="text"
                   name="lang"
                   onChange={e => props.onTextUpdate(e.target.value)}/>
        </div>
    );
} 

SelectedLanguage.propTypes = {
    selectedLanguage: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
};

export default SelectedLanguage