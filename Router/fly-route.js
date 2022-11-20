const router = require('express').Router();
const { getAllFly, createFly, updateFly, deleteFly, getByFlyNumber, getByFirstClass, getByDepartureTimeFilter, getByDepartureLand, getByDepartureTimeDeparture, getByLandTimeLand, getByFilterOptions } = require('../controller/fly-controller');


router.get('/', getAllFly);
router.post('/create', createFly);
router.put('/update/:id', updateFly);
router.delete('/delete/:id', deleteFly);
router.get('/byFlyNumber/:flyNumber', getByFlyNumber);
router.get('/byFirstClass', getByFirstClass)
router.get('/byDepartureTime', getByDepartureTimeFilter);
router.get('/getByDepartureLand', getByDepartureLand);
router.get('/getByDepartureTimeDeparture', getByDepartureTimeDeparture);
router.get('/getByLandTimeLand', getByLandTimeLand);
router.get('/getByFilterOptions', getByFilterOptions)
module.exports = router;