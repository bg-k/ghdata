import React from 'react';
import PropTypes from 'prop-types';

const RepoGrid = (props) => {
    return(
        <ul className='popular-list'>
            {props.repos.map((repo, index) => {
                return (
                    <li key={repo.name} className='popular-item'>
                        <div className='popular-rank'>#{index + 1}</div>
                        <ul className='space-list-items'>
                            <li>
                                <img
                                    className='avatar'
                                    src={repo.owner.avatar_url}
                                    alt={'Avatar for ' + repo.owner.login}
                                />
                            </li>
                            <li><a className='item-name' href={repo.html_url}>{repo.name}</a></li>
                            <li className='item-name'>@{repo.owner.login}</li>
                            <li>{repo.stargazers_count} stars</li>
                        </ul>
                </li>);
            })}
        </ul>
    )
}

RepoGrid.propTypes = {
    repos: PropTypes.array.isRequired,
}

export default RepoGrid