import React from 'react';
import {useNavigate} from 'react-router-dom';
function LoginPage() {
    const navigate = useNavigate();
    return <div>LoginPage
        <button onClick={()=>{navigate('home')}}>Go Home</button>
    </div>;
}

export default LoginPage;
