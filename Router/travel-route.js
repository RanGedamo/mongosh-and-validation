const router = require('express').Router();
const { getAllCountry, createCountry, updateCountry ,deleteCountry,getCountryById} = require('../controller/travel-controller');

router.get('/', getAllCountry);
router.post('/create', createCountry);
router.put('/update/:id', updateCountry);
router.delete('/delete/:id',deleteCountry);
router.get('/byId/:id', getCountryById);



module.exports = router;