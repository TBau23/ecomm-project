import React from 'react';
import './Homepage.styles.scss'

const Homepage = () => {

    return (
        <div className='homepage'>
            <div className='directory-menu'>
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>HATS</h1>
                        <span>Shop Now</span>

                    </div>

                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>PANTS</h1>
                        <span>Shop Now</span>

                    </div>

                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>SHIRTS</h1>
                        <span>Shop Now</span>

                    </div>

                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>GEAR</h1>
                        <span>Shop Now</span>

                    </div>

                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>SWEATERS</h1>
                        <span>Shop Now</span>

                    </div>

                </div>
            </div>
        </div>
    )
};

export default Homepage