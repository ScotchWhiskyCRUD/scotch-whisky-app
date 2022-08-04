const { Router } = require("express");
const whiskeyController = require('../controllers/whiskeyController')

const router = Router();

// router.get('/whiskeys', (req, res) => {
//     console.log('using api route')
// })

//to get all data from elephant SQL
router.get('/', whiskeyController.getWhiskeys, (req, res) => {
    return res.status(200).json(res.locals.whiskeys)
});

//to add row in table at elephan SQL
router.post('/add', whiskeyController.addWhiskeys, (req, res) => {
    console.log('whiskey router here', res.locals.stuff)
    return res.status(200).json(res.locals.stuff);
});


module.exports = router;