import PaperPlaneIcon from '../Icons/PaperPlaneRight';
import {useRef} from 'react'
import Axios from 'axios'


function DocsTab() {

  function handleUploadFile(){

    const myFile = fileToUpload?.current?.files[0]
    const formData = new FormData();
    const reader = new FileReader();
    reader.readAsDataURL(myFile)
    console.log(reader);
    formData.append("file", myFile)
    formData.append("upload-file",'q3wqh4p7')
    
    Axios.post("https://api.cloudinary.com/v1_1/etanheyman/image/upload", formData).then((response) =>{
      console.log(response)
    })
  }

  const fileToUpload = useRef<any>();

  return (
    <div className="chat__chatWindowTabs">
      DocsTab
      <div className="chat__chatWindow__messageBar">
          <input type='file' className="fileUpload" ref={fileToUpload}/>
          <label>
                    <button
                        style={{display: 'none'}}
                        onClick={(ev) => {
                            handleUploadFile();
                        }}
                        className='sendButton'
                    />
                    <PaperPlaneIcon/>
                </label>
      </div>


    </div>
  )
}

export default DocsTab