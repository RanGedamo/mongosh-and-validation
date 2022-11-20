const flyModel = require('../model/fly-model');

const getAllFly = (req, res) => {
    if (flyModel && flyModel != []) {
        return res.send({ massage: "success", flyModel });
    };
    if (flyModel == []) {
        return res.send({ massage: "fly is empty" });
    };
    return res.send({ massage: "fly not found" });
};

const createFly = (req, res) => {
    if (flyModel) {
        flyModel.push(req.body);
        return res.send({ massage: "success", flyModel });
    };
    return res.send({ massage: "fly not available" });
};

const updateFly = (req, res) => {
    const flyById = flyModel.find(flyId => flyId.id == req.params.id);
    const flyIndex = flyModel.indexOf(flyById);
    if (flyIndex > -1) {
        flyModel[flyIndex] = req.body;
        return res.send({ massage: "success", flyModel });
    };
    return res.send({ massage: "fly not available" });
};

const deleteFly = (req, res) => {
    const flyById = flyModel.find(flyId => flyId.id == req.params.id);
    const flyIndex = flyModel.indexOf(flyById);
    if (flyIndex > -1) {
        flyModel.splice(flyIndex, 1);
        return res.send({ massage: "success", flyModel });
    };
    return res.send({ massage: "fly not found" });
};

const getByFlyNumber = (req, res) => {
    const byFlyNumber = flyModel.find(flyId => flyId.flyNumber == req.params.flyNumber);
    if (byFlyNumber) {
        return res.send({ massage: "success", byFlyNumber });
    };
    return res.send({ massage: "flyNumber not found" });
};

const getByFirstClass = (req, res) => {
    const byFirstClass = flyModel.filter(flyId => flyId.firstClass == true);

    if (byFirstClass) {
        return res.send({ massage: "success", byFirstClass });
    };
    return res.send({ massage: "firstClass not found" });
};

const getByDepartureTimeFilter = (req, res) => {
    const myDeparture = new Date("March 13, 08 15:20");
    const DepartureTime = flyModel.filter(departureTime => {
        if (departureTime.departureTime.getHours() > myDeparture.getHours() || (departureTime.departureTime.getHours() == myDeparture.getHours() && departureTime.departureTime.getMinutes() > myDeparture.getMinutes()))
            return departureTime
    });
    if (DepartureTime && DepartureTime != []) {
        return res.send({ massage: 'success', DepartureTime });
    };
    if (DepartureTime == []) {
        return res.send({ massage: 'DepartureTime not found' });
    };
};

const getByDepartureLand = (req, res) => {
    const DepartureLand = flyModel.filter(filterDepartureLand => {
        if (filterDepartureLand.departure == req.body.departure && filterDepartureLand.land == req.body.land) {
            return filterDepartureLand
        };
    });
    if (DepartureLand && DepartureLand != []) {
        return res.send({ massage: "success", DepartureLand });
    };
    return res.send({ massage: "not found" });
};

const getByDepartureTimeDeparture = (req, res) => {
    const reqTimeDeparture = new Date(req.body.departureTime);
    const DepartureTimeDeparture = flyModel.filter(filterDepartureTimeDeparture => {
        if (filterDepartureTimeDeparture.departure == req.body.departure) {
            if (filterDepartureTimeDeparture.departureTime.getHours() == reqTimeDeparture.getHours()) {
                if (filterDepartureTimeDeparture.departureTime.getMinutes() == reqTimeDeparture.getMinutes()) {
                    if (filterDepartureTimeDeparture.seatsAvailable) {
                        return filterDepartureTimeDeparture;
                    };
                };
            };
        };
    });
    if (DepartureTimeDeparture && DepartureTimeDeparture != []) {
        return res.send({ massage: "success", DepartureTimeDeparture });
    };
    return res.send({ massage: "not found" });
};


const getByLandTimeLand = (req, res) => {
    const reqTimeLand = new Date(req.body.landTime);
    const LandTimeLand = flyModel.filter(filterLandTimeLand => {
        if (filterLandTimeLand.land == req.body.land) {
            if (filterLandTimeLand.landTime.getHours() == reqTimeLand.getHours()) {
                if (filterLandTimeLand.landTime.getMinutes() == reqTimeLand.getMinutes()) {
                    if (filterLandTimeLand.seatsAvailable) {
                        return filterLandTimeLand;
                    }
                };
            };
        };
    });
    if (LandTimeLand && LandTimeLand != []) {
        return res.send({ massage: 'success', LandTimeLand });
    };
    return res.send({ massage: "not found" });
};

const getByFilterOptions = (req, res) => {
    const reqOptions = {
        departure: req.body.departure,
        land: req.body.land,
        departureTime: new Date(req.body.departureTime),
        landTime: new Date(req.body.landTime)
    };
    const getAllReq = flyModel.filter(filterAllOptions => {
        if (filterAllOptions.departure == reqOptions.departure) {
            if (filterAllOptions.departureTime.getHours() == reqOptions.departureTime.getHours()) {
                if (filterAllOptions.departureTime.getMinutes() == reqOptions.departureTime.getMinutes()) {
                    if (filterAllOptions.land == reqOptions.land) {
                        if (filterAllOptions.landTime.getHours() == reqOptions.landTime.getHours()) {
                            if (filterAllOptions.landTime.getMinutes() == reqOptions.landTime.getMinutes()) {
                                if(filterAllOptions.seatsAvailable){
                                    return filterAllOptions;
                                };
                            };
                        };
                    };
                };
            };
        };
    });
    if (getAllReq && getAllReq != []) {
        return res.send({ massage: 'success', getAllReq });
    };
    return res.send({ massage: "Fly not Found" })
};

module.exports = {
    getAllFly,
    createFly,
    updateFly,
    deleteFly,
    getByFlyNumber,
    getByFirstClass,
    getByDepartureTimeFilter,
    getByDepartureLand,
    getByDepartureTimeDeparture,
    getByLandTimeLand,
    getByFilterOptions
};

