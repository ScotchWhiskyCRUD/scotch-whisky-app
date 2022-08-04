const { Router } = require("express");
const whiskeyController = require('../controllers/whiskeyController')

const router = Router();

// router.get('/whiskeys', (req, res) => {
//     console.log('using api route')
// })

router.get('/whiskeys', whiskeyController.getWhiskeys, (req, res) => {
    return res.status(200).json(res.locals.whiskeys)
});




module.exports = router;