const fetchVariables = () =>{
    if(process.env.NODE_ENV !== 'production'){
        return {
            apiBaseUrl:'http://localhost:5000'
        }
    }
    // Can change for Production
    return {
        apiBaseUrl:'http://localhost:5000'
    }
}

export default fetchVariables;