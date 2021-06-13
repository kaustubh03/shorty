import React from 'react';
import Loader from '../Loader/Loader';
import './List.css';

const List = ({urlList}) =>{
    const getRemainingDays = (date)=>{
        const today = new Date();
        const diff = date.getTime() - today.getTime();
        const dateObj = new Date(diff)
        console.log(diff)
        if(diff<0){
            return 'Expired'
        }
        const years = dateObj.getUTCFullYear() - 1970; // Gives difference as year
        const months = dateObj.getUTCMonth(); // Gives month count of difference
        const days = dateObj.getUTCDate()-1; // Gives day count of difference
        const seconds = Math.floor( (dateObj/1000) % 60 );
        const minutes = Math.floor( (dateObj/1000/60) % 60 );
        const hours = Math.floor( (dateObj/(1000*60*60)) % 24 );
        let string = [];
        if(years>0){
            string.push(`${years}y`);
        }
        if(months>0){
            string.push(`${months}mo`);
        }
        if(days>0){
            string.push(`${days}d`);
        }
        if(hours>0){
            string.push(`${hours}h`);
        }
        if(minutes>0){
            string.push(`${minutes}m`);
        }
        if(seconds>0){
            string.push(`${seconds}s`);
        }
        return string.join(' ');
    }

    return  <div className="uss_list">
                {
                    urlList.loading && <Loader />
                }
                {!urlList.loading && urlList.data && <ul>
                    <li className="uss_list-headers">
                        <span>URL</span>
                        <span>Expiration Time Remaining</span>
                        <span>Password Required</span>
                    </li>
                    {
                        urlList.data && urlList.data.data.map((item)=>{
                            return <li key={Math.random()}>
                                <span>{item.shortenUrl}</span>
                                <span>{item.expirationDate ? getRemainingDays(new Date(item.expirationDate)):'N/A'}</span>
                                <span>{item.passwordRequire?'Yes':'No'}</span>
                            </li>
                        })
                    }
                </ul>}
            </div>
}

export default List;