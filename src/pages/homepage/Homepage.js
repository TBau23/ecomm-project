import React from 'react';
import './homepage.styles.scss';
import {Link, useHistory} from 'react-router-dom';

import Directory from '../../components/directory/Directory'

const Homepage = (props) => {

    let history = useHistory()

    return (
        <div className='homepage'>
            <button onClick={() => history.push('/hats')}>Hats</button>
            <Link to='/hats'>Hats</Link>
            <Directory />
        </div>
    )
};

export default Homepage