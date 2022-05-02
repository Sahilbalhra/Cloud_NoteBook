const connectToMongo =require('./db');
const express = require('express')
//connent to mongo data base
connectToMongo();
const app = express()
const port = 5000

//middleware app.use
app.use(express.json())
// app.get('/', (req, res) => {
//   res.send('Hello Sahil!')
// })

//Available Routes
//for authentication (api getting from auth file in the routes folder )
app.use('/api/auth',require('./routes/auth'))
// app.use('/api/notes',require('./routes/notes'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})