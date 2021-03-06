import React from 'react';

const Navigation = () => {
    return (
        <div id="navigation" className="Navigation">
            <nav>
                <ul style={{listStyleType: 'none'}}>
                    <li>Browse</li>
                    <li>My List</li>
                    <li>Top Picks</li>
                    <li>Recent</li>
                </ul>
            </nav>
        </div>
    )
};

export default Navigation;