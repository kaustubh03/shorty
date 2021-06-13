module.exports = ()=>{
    if(process.env.NODE_ENV !== 'production'){
        return {
            baseUrl:'http://localhost:5000',
            frontend:'http://localhost:3000'
        }
    }
    return {
        baseUrl:'http://localhost:5000',
        frontend:'http://localhost:3000'
    }
}