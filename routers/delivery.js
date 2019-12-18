const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/reviews', (req, res) => {
    res.render('reviews')
})

// router.post('./images', single('aaa'),(req, res) => {
//     (res.json('aaa': req.aaa))
// })

module.exports = router