const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3001

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))

app.get('/api', (req, res) => {
    res.json( [{
                id: 0,
             
            },
            
        ]
    )
})

app.listen(port)