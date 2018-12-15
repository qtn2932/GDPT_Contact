const server= require('./api/server.js');
const port= process.env.PORT || 3300; //port is dynamic for heroku deploy, change as neccessary for other deployment method
server.listen(port, ()=>{
    console.log('Up and running @ 3300 or whatever')
})