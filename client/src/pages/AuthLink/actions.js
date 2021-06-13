import { stateSettler } from 'overhauljs';
import fetchVariables from '../../utility/envSpecificConfig';

export function verifyPassword(store, data){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data })
    };
    stateSettler(store, 'authData', 'loading');
    fetch(`${fetchVariables().apiBaseUrl}/auth`, requestOptions)
        .then(response => response.json())
        .then(data => stateSettler(store, 'authData', 'success', data))
        .catch(error=>stateSettler(store, 'authData', 'failure', error));
}