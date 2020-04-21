const init = () => {
    const express = require('express')
    const router = express.Router()

    router.get('/', (req, res) => {
        res.render('home')
    })

    return router;
}

module.exports = init