import React from 'react';
import './style.css';

import img from '../../assets/banner.png';

const Banner: React.FC = () => {
    return(
        <div className="banner">
            <img src={img} alt="Banner" width="100%" height="100%" />
        </div>
    );
};

export default Banner;