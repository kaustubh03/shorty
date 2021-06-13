// React Imports
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// Node Modules Import
import DatePicker from 'react-date-picker';

// Component Imports
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';

import Loader from '../../components/Loader/Loader';
import List from '../../components/List/List';

// Utility Imports
import messages from '../../utility/messages';
import fetchVariables from '../../utility/envSpecificConfig';

// Stylesheet Imports
import './Home.css';

// Global State Imports
import useOverhaul from '../../globalState/store';

const Home = (props) => {
    const history = useHistory();
    const [formData, setFormData] = useState({});
    const [onScreenMessages, setMessage] = useState(null);
    
    const [{ urlData, urlList }, globalActions] = useOverhaul();
    useEffect(()=>{
        globalActions.home.getUrlList();
    },[globalActions.home]);

    useEffect(()=>{
        if(!urlData.loading && urlData.data){
            setFormData({});
            setMessage(`${messages.success} ${fetchVariables().apiBaseUrl}/${urlData.data.shortenUrl}`);
        }
    },[urlData])
    
    useEffect(()=>{
        const pathName = history.location.pathname;
        switch(pathName){
            case '/status/notfound':
                setMessage(messages.notFound);
                break;
            case '/status/expired':
                setMessage(messages.expired);
                break;
            default:
                return null;
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const onInputChange = (e) =>{
        const formDataCopy = { ...formData };
        formDataCopy[e.target.name] = e.target.value;
        if(e.target.name==='passwordRequired' || e.target.name==='logging'){
            formDataCopy[e.target.name] = e.target.checked;
        }
        setFormData(formDataCopy);
    }

    const onDateChange = (e) =>{
        let formDataCopy = { ...formData };
        if(e){
            formDataCopy['expirationDate'] = e.toISOString();
        }
        else{
            formDataCopy['expirationDate'] = null;
        }
        setFormData(formDataCopy);
    }

    const onSubmit = (e) =>{
        // Regex source - https://stackoverflow.com/questions/30970068/js-regex-url-validation
        const urlPattern = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
        if(formData.url && formData.url.match(urlPattern)){
            setMessage(null);
            globalActions.home.addUrl(formData);
        }
        else{
            setMessage(messages.invalidUrl);
        }
    }

    const getMinDate = () =>{
        const today = new Date()
        const tomorrow = new Date(today)
        tomorrow.setDate(tomorrow.getDate() + 1)
        return tomorrow;
    }
    console.log(history);
    return <div className="uss_layout_wrapper">
        <div className="uss_home_header">
            <h1>Shorty<span>.io</span></h1>
            <small>URL shortening on your tips</small>
        </div>
        <div className="uss_home_body">
            <div className="uss_home_body_input">
                <Input value={formData.url || ''} name="url" placeholder="Add your URL to shorten" onChangeHandler={onInputChange} type='text' classNameStr='uss_home_input-border-radius' />
                <Button name="urlSubmit" value={urlData.loading ? <Loader /> :"Go"} onClickHandler={onSubmit} type='button' classNameStr='uss_home_button-border-radius' />
            </div>
            <div className="uss_home_body_controls">
                <Input name="logging" onChangeHandler={onInputChange} type='checkbox' label="Logging" />
                <div className="uss_home_expiry-date">
                    <span className="label">Expiry Date</span>
                    <DatePicker className='uss_home_date-picker' onChange={onDateChange} value={formData.expirationDate ? new Date(formData.expirationDate):null} minDate={getMinDate()} />
                </div>
                <Input name="passwordRequired" onChangeHandler={onInputChange} type='checkbox' label="Password" />
                <Input name="password" value={formData.password || ''} disabled={formData['passwordRequired']?false:true} placeholder="Enter your password" onChangeHandler={onInputChange} type='password' classNameStr='uss_home_password' />
            </div>
            {onScreenMessages && <div className="uss_message_pane">
                {onScreenMessages}
            </div>}
            <List urlList={urlList} />
        </div>
    </div>
}

export default Home;