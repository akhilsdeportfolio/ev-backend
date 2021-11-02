const app = require('./app');
const connect = require('./config/db')

app.listen(3000,()=>{
console.log("listening on port 3000");
});
