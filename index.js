const server= require('./api/server.js');
const port= process.env.PORT || 3300;
server.listen(port, ()=>{
    console.log('Up and running @ 3300 or whatever')
})