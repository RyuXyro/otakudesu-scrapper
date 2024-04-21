const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const router = require('./routes/index')
const cors = require('cors')

app.use(cors())

app.use('/api', router)

app.use('*', (req, res) => {
    res.json({
        status: 'not found path',
        message: 'read the docs here: error_cant_find_repos'
    })
})

app.get("/", (req, res) => {
    res.status(200).json({
        status: 200,
        api_detail: {
            name: "Otakudesu API",
            author: "KazuoYK",
            description: "A Anime Scrapper",
            version: "v1.0.0",
            repository: "error_cant_find_repos",
        },
        connect_with_me: {
            email: "user@kazuo.rf.gd",
            github: "https://github.com/RyuXyro",
        }
    });
});

app.listen(port, () => {
    console.log('listening on port', port)
})