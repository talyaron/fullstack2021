import React, { useEffect, useState } from 'react';
import { useParams, Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';


const IceCream = () => {


  return (
    <div>


      <h1>Vanilla Ice</h1>

      <Outlet />

    </div>
  )
}

export default IceCream