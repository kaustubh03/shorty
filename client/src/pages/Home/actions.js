import { stateSettler } from 'overhauljs';
import fetchVariables from '../../utility/envSpecificConfig';

export function addUrl(store, data){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data })
    };
    stateSettler(store, 'urlData', 'loading');
    fetch(`${fetchVariables().apiBaseUrl}/api/v1/url/add`, requestOptions)
        .then(response => response.json())
        .then(data => stateSettler(store, 'urlData', 'success', data))
        .catch(error=>stateSettler(store, 'urlData', 'failure', error));
}

export function getUrlList(store){
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    stateSettler(store, 'urlList', 'loading');
    fetch(`${fetchVariables().apiBaseUrl}/api/v1/url/list`, requestOptions)
        .then(response => response.json())
        .then(data => stateSettler(store, 'urlList', 'success', data))
        .catch(error=>stateSettler(store, 'urlList', 'failure', error));
}