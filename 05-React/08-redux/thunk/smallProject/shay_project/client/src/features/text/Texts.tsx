import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';

import {
  addText,
  editText,
  deleteText,
  getAllText,
  selectGivenText,

} from './textSlice';
import { getText,addNewText, removeText, editAllText } from './textApi';
import { image, text } from '@cloudinary/url-gen/qualifiers/source';
import { Value } from 'sass';
// import {AdvancedImage} from '@cloudinary/react';
// import {Cloudinary} from "@cloudinary/url-gen";
// import {Transformation} from "@cloudinary/url-gen";

// // Import required actions.
// import {thumbnail, scale} from "@cloudinary/url-gen/actions/resize";
// import {byRadius} from "@cloudinary/url-gen/actions/roundCorners";
// import {sepia} from "@cloudinary/url-gen/actions/effect";
// import {source} from "@cloudinary/url-gen/actions/overlay";
// import {opacity,brightness} from "@cloudinary/url-gen/actions/adjust";
// import {byAngle} from "@cloudinary/url-gen/actions/rotate"

// // Import required qualifiers.
// import {image} from "@cloudinary/url-gen/qualifiers/source";
// import {Position} from "@cloudinary/url-gen/qualifiers/position";
// import {compass} from "@cloudinary/url-gen/qualifiers/gravity";
// import {focusOn} from "@cloudinary/url-gen/qualifiers/gravity";
// import {FocusOn} from "@cloudinary/url-gen/qualifiers/focusOn";


export function Texts() {
  const userText = useAppSelector(selectGivenText);
 
  const dispatch = useAppDispatch();

  async function handleAddText(e:any){
 
  
e.preventDefault();
const value = e.target.elements.newText.value;

console.log(value);

 const {data}= await axios.post('/text/add-text',{value})
  console.log(data);
  dispatch(addText(value));
 }
 async function handleDeleteText(id:any){
  console.log(id);
  
  
  const {data}= await axios.patch('/text/delete-text',{id})
  console.log(data);
  dispatch(deleteText(id))
 }
async function handleEditText(e:any){
  e.preventDefault()
  const updateText =e.target.elements.editText.value;

  const id = e.target.id;
  console.log(id, updateText);
 
  const {data}= await axios.patch('/text/update-text',{id, updateText})
  console.log(data);
   dispatch(editText({ id, updateText}))
 }
 useEffect(() => {
  dispatch(getText())
}, []);
 async function handleGetText() {
  const  {data} = await axios.get("/text/get-text");
  const userText = data;
  console.log(userText);
  
  dispatch(getAllText(userText))
 }
async function handleAddImage(e:any) {
  e.preventDefault();

}
 const previewFile = (file:any)=>{
  const reader =new FileReader();
  reader.readAsDataURL(file);
  reader.onload = ()=>{

  }
 }
const handleFileInputChange=(e:any)=>{
  const image = e.target.elements.image.value;
const file = e.target.file[0];
}

 
  return (
    <div>
      
      <div>
        

                <form onSubmit={(e) => handleAddText(e)}>

      <input type="text" name="newText" id=""/> 
     
        <button>ADD TEXT</button>
        </form>
        
        <form onClick={(e) => handleAddImage(e)}>

 <input type="file" alt="send image" name='img' placeholder='send your image' onChange={handleFileInputChange}/>
  <button>ADD TEXT</button>
  </form>
        <div>
        {userText.map((texts)=>{
          console.log(texts);
          
          return(
            <div key={texts._id} >
              
              <p onClick={()=>{handleDeleteText(texts._id)}}>{texts.value}</p>
              <form id={texts._id} onSubmit={(ev)=>handleEditText(ev)}>
                <input type="text" name="editText" placeholder='edit text'/>
              
              <button>EDIT</button>
              </form>
              </div>
            
          )
        })}</div>
      
      </div>

 
    </div>
  );
}
