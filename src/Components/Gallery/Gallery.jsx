import React, {useEffect} from 'react'
import useFirestore from '../../hooks/useFirestore';
import { withRouter } from 'react-router-dom'
import './Gallery.scss'

const Gallery = () => {
    const {docs} = useFirestore('images');
    return (
        <div className='gallery-page'>
            {docs && docs.map((link,i) => {
                return(
                    <div key={link.id} className={`grid-item item-${i}`}>
                        <img className='grid-img' src={link.url} alt='display or pedestal'/>
                    </div> 
                )
            })}
        </div>
    )
}

export default withRouter(Gallery);