
import React from 'react'


const GallerryList = ({ gallery }: any) => {
    return (
        <div className='blog-list'>


            {gallery.map((image: any) => (
                <div key={image.id} className="image-preview">
                    {/* <div><img src={gallery.image} alt="" /></div> */}
                    <div>{gallery.image}</div>
                    <div>{gallery.author}</div>
                    <div><img src={gallery.image} alt="" /></div>

                </div>
            ))}
        </div>
    )
}

export default GallerryList