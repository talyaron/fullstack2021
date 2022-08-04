                                                                 import React from 'react';
import {useState} from "react";






   export function SearchMentor() {  
const myMovies = [

        {
            id:1,
            name: "spiderman",

        },

        {
            id:2,
            name: "doctor strange"
        },

        {
            id:3,
            name: "venom"
        },

        // {
        //     id:1,

        //     name: "spiderman 2"
        // },

        // {
        //     id:1,

        //     name: "doctor strange 2"
        // },

        // {
        //     id:1,

        //     name: "venom 2"
        // },

        // {
        //     id:1,

        //     name: "spiderman 3"
        // },

        // {
        //     id:1,

        //     name: "doctor strange 3"
        // },

        // {
        //     id:1,

        //     name: "venom 2"
        // },

        // {
        //     id:1,

        //     name: "thor 2"
        // },

        // {
        //     id:1,

        //     name: "hulk 2"
        // },

        // {
        //     id:1,

        //     name: "batman 2"
        // },

        // {
        //     id:1,

        //     name: "thor"
        // },

        // {
        //     id:1,

        //     name: "hulk"
        // },

        // {
        //     id:1,

        //     name: "batman"
        // },

  
    ]





// const SearchForm = () => {
    // let results:any=[];
    interface res{
      id:number,
      name:string
    }
    const [search,setSearch] =useState(false)
    const [resultFound, setResultFound] = useState<Array<res>>([]);

  async function handleForm(ev: any) {
    ev.preventDefault();
    
    const search = ev.target.value;

    const regex: RegExp = new RegExp(search, 'i');
    let flag=0;
    setSearch(true)
    if (search) {

        for (let i in myMovies) {

            if (regex.test(myMovies[i].name)) {
          
                setResultFound([...resultFound,myMovies[i]]);
 
                flag=1; 

            }
            
                       

        }
        if (flag===0){
            return <h1 className="searchNotFound">NotFound </h1>
   
        }
    }
    
  }

  if(search)
  {

    
    return(
      <>
      <input type="text" placeholder="Enter name" onBlur={handleForm} />
      <div style={{height:50 ,width:50}}>
      {resultFound.map((res:any,i) => {
        return(
          <p>{res.name}</p>
        )
      })}
      </div>
      </>
    )
  }else {
    return (
      <div   className="App">
          
         {/* <form onSubmit={handleSubmitForm}> */}
          {/* <input type="text" name="title" placeholder="searchTerm" /> */}
          <input type="text" placeholder="Enter name" onBlur={handleForm} />
          
  
          {/* <button type="submit">Submit</button> */}
          
  
        {/* </form> */}
  {/* 
        
        {resultFound.map((user) => (
            <p key={user.id}>{user.name}</p>
          ))} */}
  
          {/* {resultFound.map((res, i)=>{ return <p id="map" key={i} title={res.name} />} )} */}
  
  
  
      </div>
       
        
      
    );
  }
  

      {/* <div id="search">
      < SearchForm /> 

      </div> */}
    

}






// import SearchForm from './components/SearchForm';

   export function Search_mentor() {  
const myMovies = [

        {
            id:1,
            name: "spiderman",

        },

        {
            id:2,
            name: "doctor strange"
        },

        {
            id:3,
            name: "venom"
        },

        // {
        //     id:1,

        //     name: "spiderman 2"
        // },

        // {
        //     id:1,

        //     name: "doctor strange 2"
        // },

        // {
        //     id:1,

        //     name: "venom 2"
        // },

        // {
        //     id:1,

        //     name: "spiderman 3"
        // },

        // {
        //     id:1,

        //     name: "doctor strange 3"
        // },

        // {
        //     id:1,

        //     name: "venom 2"
        // },

        // {
        //     id:1,

        //     name: "thor 2"
        // },

        // {
        //     id:1,

        //     name: "hulk 2"
        // },

        // {
        //     id:1,

        //     name: "batman 2"
        // },

        // {
        //     id:1,

        //     name: "thor"
        // },

        // {
        //     id:1,

        //     name: "hulk"
        // },

        // {
        //     id:1,

        //     name: "batman"
        // },

  
    ]





// const SearchForm = () => {
    // let results:any=[];
    interface res{
      id:number,
      name:string
    }
    const [search,setSearch] =useState(false)
    const [resultFound, setResultFound] = useState<Array<res>>([]);

  async function handleForm(ev: any) {
    ev.preventDefault();
    
    const search = ev.target.value;

    const regex: RegExp = new RegExp(search, 'i');
    let flag=0;
    setSearch(true)
    if (search) {

        for (let i in myMovies) {

            if (regex.test(myMovies[i].name)) {
            
                setResultFound([...resultFound,myMovies[i]]);


                flag=1; 

            }
            
                       

        }
        if (flag===0){

            return <h1 className="searchNotFound">NotFound </h1>
   
        }
    }
    
  }

  if(search)
  {

    
    return(
      <>
      <input type="text" placeholder="Enter name" onBlur={handleForm} />
      <div style={{height:50 ,width:50}}>
      {resultFound.map((res:any,i) => {
        return(
          <p>{res.name}</p>
        )
      })}
      </div>
      </>
    )
  }else {
    return (
      <div   className="App">
          
         {/* <form onSubmit={handleSubmitForm}> */}
          {/* <input type="text" name="title" placeholder="searchTerm" /> */}
          <input type="text" placeholder="Enter name" onBlur={handleForm} />
          
  
          {/* <button type="submit">Submit</button> */}
          
  
        {/* </form> */}
  {/* 
        
        {resultFound.map((user) => (
            <p key={user.id}>{user.name}</p>
          ))} */}
  
          {/* {resultFound.map((res, i)=>{ return <p id="map" key={i} title={res.name} />} )} */}
  
  
  
      </div>
       
        
      
    );
  }
  

      {/* <div id="search">
      < SearchForm /> 

      </div> */}
    

}

export default SearchMentor;

