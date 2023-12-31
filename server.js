// https://youtu.be/zHq0v5RD_Zk?t=4910 

const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const rappers = {
    '21 savage': {
        'age': 29,
        'birthName': 'Shéyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    },
    'chance the rapper':{
        'age': 29,
        'birthName': 'Chancelor Bennett',
        'birthLocation': 'Chicago, Illinois'
    },
    'unknown':{
        'age': 0,
        'birthName': 'unknown',
        'birthLocation': 'unknown'
    }
}

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html') 
    // STEP 2__dirname /\ tells server to look in the same directory for index.html
})
// https://youtu.be/zHq0v5RD_Zk?t=5817 
// setting up another route\/
app.get('/api/:name', (req, res)=>{
    const rapperName = req.params.name.toLowerCase()
    if( rappers[rapperName]){
        res.json(rappers[rapperName])
    }else{
        res.json(rappers['unknown'])
    }
})


// https://youtu.be/zHq0v5RD_Zk?t=5419 
// \/ STEP 3 tells where to listen
app.listen(process.env.PORT || PORT, ()=>{
    // heroku /\port hangup https://youtu.be/zHq0v5RD_Zk?t=8494 
    console.log(`The server is now running on port ${PORT}! You betta go catch it!`)
})

// HEROKU INSTRUCTIONS https://youtu.be/zHq0v5RD_Zk?t=8071 

// CORS instructions: https://youtu.be/zHq0v5RD_Zk?t=9155 