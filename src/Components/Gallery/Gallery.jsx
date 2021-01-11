import React, {useEffect} from 'react'
import { withRouter } from 'react-router-dom'
import './Gallery.scss'
import logo from '../../assets/rmd-logo.png';
import wood2 from '../../assets/wood2.jpg';
import wood3 from '../../assets/wood3.jpg';
import _1 from '../../assets/pieces/1.jpg';
import _2 from '../../assets/pieces/2.jpg';
import _3 from '../../assets/pieces/3.jpg';
import _4 from '../../assets/pieces/4.jpg';
import _5 from '../../assets/pieces/5.jpg';
import _6 from '../../assets/pieces/6.jpg';
import _7 from '../../assets/pieces/7.jpg';
import _8 from '../../assets/pieces/8.jpg';
import _9 from '../../assets/pieces/9.jpg';
import _10 from '../../assets/pieces/10.jpg';
import _11 from '../../assets/pieces/11.jpg';
import _12 from '../../assets/pieces/12.jpg';
import _13 from '../../assets/pieces/13.jpg';
import _14 from '../../assets/pieces/14.jpg';
import _15 from '../../assets/pieces/15.jpg';
import _16 from '../../assets/pieces/16.jpg';
import _17 from '../../assets/pieces/17.PNG';
import _18 from '../../assets/pieces/18.jpg';
import _19 from '../../assets/pieces/19.jpg';
import _20 from '../../assets/pieces/20.jpg';
import _21 from '../../assets/pieces/21.jpg';
import _22 from '../../assets/pieces/22.jpg';
import _23 from '../../assets/pieces/23.jpg';
import _24 from '../../assets/pieces/24.jpg';
import _25 from '../../assets/pieces/25.jpg';

let imageLinks = [_1,_2,_3,_4,_5,_6,_7,_8,_9,_10,_11,_12,_13,_14,_15,_16,_17,_18,_19,_20,_21,_22,_23,_24,_25];

const Gallery = () => {

    return (
        <div className='gallery-page'>
            {imageLinks.map((link,i) => {
                return(
                    <div className={`grid-item item-${i}`}>
                        <img className='grid-img' src={link} alt='display or pedestal'/>
                    </div>
                )
            })}
        </div>
    )
}

export default withRouter(Gallery);