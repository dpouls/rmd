import React from 'react'
import { withRouter } from 'react-router-dom'
import './Gallery.scss'
import logo from '../../assets/rmd-logo.png';
import wood2 from '../../assets/wood2.jpg';
import wood3 from '../../assets/wood3.jpg';
let imageLinks = [logo,wood2,logo,wood3,'','','','','','','','','',''];
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