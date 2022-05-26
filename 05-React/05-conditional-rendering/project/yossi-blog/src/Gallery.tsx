import React, { useState } from 'react'
import useFetch from './useFetch'
import GallerryList from './GallerryList'


const Gallery = () => {

    const { isPanding, data: gallery, error } = useFetch('http://localhost:4000/gallery/')


    return (
        <div>
            {isPanding && <div className='loading'>loading... </div>}
            {error && <div>{error}</div>}
            {<div><img src={gallery} alt="" /></div>}
            {/* can do conditioning with only && like above, or with ? and alt result like this:
            {error ? <div>{error}</div>:<div>Fatch is good</div>} */}
            {gallery && <GallerryList gallery={gallery} title='All gallery' />}
        </div>

    )
}

export default Gallery


