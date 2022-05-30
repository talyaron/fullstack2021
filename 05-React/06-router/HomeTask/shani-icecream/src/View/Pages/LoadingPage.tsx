import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";


const LoadingPage = () => {
  const navigate = useNavigate();

  useEffect(()=>{
    setTimeout(()=>{
        navigate('/home')
    },2000)
},[])

  return (
    <div className="loadingPage">
      <h1 className="loadingPage--title">Loading...</h1>
      <img src="../images/loadingGif.gif" />
    </div>
  );
};

export default LoadingPage;
