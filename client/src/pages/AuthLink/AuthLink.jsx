import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

// Component Imports
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Loader from '../../components/Loader/Loader';

// Global State Imports
import useOverhaul from '../../globalState/store';


// Stylesheet Imports
import './AuthLink.css';

const AuthLink = ({ match }) =>{
    const [{ authData }, globalActions] = useOverhaul();
    const history = useHistory();
    const [password, setPassword] = useState(null);
    useEffect(()=>{
        console.log(match.params.url)
        if(!match.params.url){
            history.push('/status/notfound');
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    const onInputChange = (e) =>{
        setPassword(e.target.value);
    }
    
    const onSubmit = (e) =>{
        globalActions.auth.verifyPassword({ password, url:match.params.url});
    }
    useEffect(()=>{
        if(!authData.loading && authData.data){
            window.location.assign(authData.data.url);
        }
    },[authData]);

    return <div className="uss_authlink">
        <div className="uss_authlink_modal">
            <div className="uss_authlink_header">
                <h1>Shorty<span>.io</span></h1>
                <small>URL shortening on your tips</small>
            </div>
            <Input name="password" value={password || ''}  placeholder="Enter password to access shortlink" onChangeHandler={onInputChange} type='password' classNameStr='uss_authlink_password' />
            <Button name="urlSubmit" value={authData.loading ? <Loader /> :"Go"} onClickHandler={onSubmit} type='button' classNameStr='uss_home_button-border-radius' />
        </div>
    </div>
}

export default AuthLink;