const express = require('express');
const cors = require ('cors');

const app = express();
app.use(cors());
app.use(express.json());



const port = process.env.PORT || 3000;
 
app.get('/',(req,res)=>{
    res.send('hello world');
});
app.post('/users',(req,res)=>{
    console.log('post method called',req.body);
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser);

});


  



const users = [
    {name : '' ,id : 1,email : 'kalagmail.com',phone : 1234567890},
    {name : '' ,id : 2,email : 'kalagmail.com',phone : 1234567890},
    {name : '' ,id : 3,email : 'kalagmail.com',phone : 1234567890},
    {name : '' ,id : 4,email : 'kalagmail.com',phone : 1234567890},
    {name : '' ,id : 5,email : 'kalagmail.com',phone : 1234567890},
]

app.get('/users',(req,res)=>{
    res.send(users);
})

app.listen(port,()=>{
    console.log(`users server is running on port ${port}`);
})