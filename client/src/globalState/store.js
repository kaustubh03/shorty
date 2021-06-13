import React from 'react';
import overhaul, { generateInitialState } from 'overhauljs';

import * as actions from './mutatorMap';

/*
    Set Initial State for all APIs
*/
const initialState = {
    urlData: generateInitialState(),
    authData: generateInitialState(),
    urlList: generateInitialState()
};

/*
    Options for Store, Currently only have persist as an option , Experimental
*/
const options = {
  persist: false,
};

/*
    Configure Store with Initial state, actions and options with React in scope.
*/

const useOverhaul = overhaul(React, initialState, actions, options);

export default useOverhaul;