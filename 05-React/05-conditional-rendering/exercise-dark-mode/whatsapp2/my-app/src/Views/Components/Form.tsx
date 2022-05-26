import React, { useState, useEffect } from 'react';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';
import PopUpsAttach from './PopUpsAttach'


interface FormProps {
  handleSubmit: any;
}

interface ImgArray {
  img: any;
}

const Form = (props: FormProps) => {
  const { handleSubmit } = props;
  const [attach, setAttach] = useState(true);
  const [imging, setImging] = useState<Array<ImgArray>>([])
  const [position, setPosition] = useState(50)


  function handleImg(e: any) {

    const newImg = { img: URL.createObjectURL(e.target.files[0]) }

    setImging([...imging, newImg])
    // const bottom = 150;
    setPosition(position)

  }

  // useEffect(() => {
  //   const objectUrl = URL.createObjectURL(imging);
  //   setPreview(objectUrl)

  // }, [imging])



  return (
    <div className="box form">
      <form onSubmit={handleSubmit}>
        <input type="submit" value="⪢" />
        <input type="text" name="text" placeholder="הקלדת ההודעה" required />

        {attach ? <div className='wrapper1'>
          <AttachFileIcon className='attach' onClick={() => setAttach(!attach)} />
        </div> :
          <div className='wrapper2'>
            <PopUpsAttach handleImg={handleImg} />
            <AttachFileIcon className='attach' onClick={() => setAttach(!attach)} />

          </div>}

        <div className="atan">
        {imging.map((img: any, i: number) => {
          return (
            <div className="containerImgs">
              <img key={i} src={img.img} />
            </div>
            

          )
        })}
        </div>
        


        <TagFacesIcon className='smiley' />
      </form>

    </div>
  )

}

export default Form