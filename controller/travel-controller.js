const travelsModel = require('../model/travels-model');

const getAllCountry = (req, res) => {
    if (travelsModel && travelsModel != []) {
        return res.send({ massage: "success", travelsModel });
    };
    if(travelsModel == []){
        return res.send({massage:"travels is empty"});
    };
    return res.send({massage:"Travel not found"});
};

const createCountry = (req,res)=>{
    if(travelsModel){
        travelsModel.push(req.body);
        return res.send({massage:"success",travelsModel});
    };
    return res.send({massage:"country is not available"});
};

const updateCountry = (req,res)=>{
    const updateCountry = travelsModel.find(countryId=>countryId.id == req.params.id);
    const countryIndex = travelsModel.indexOf(updateCountry)
    if(countryIndex>-1){
        travelsModel[countryIndex] = req.body;
        return res.send({massage:"success country has been update",travelsModel});
    };
    return res.send({massage:"your country not found"});
};

const deleteCountry = (req,res)=>{
    const deleteCountryById = travelsModel.find(countryId=>countryId.id == req.params.id);
    const countryIndex = travelsModel.indexOf(deleteCountryById);
    if(countryIndex>-1){
        travelsModel.splice(countryIndex,1);
        return res.send({massage:"success",travelsModel});
    };
    return res.send({massage:"Country not found"});
};

const getCountryById = (req,res)=>{
    const countryById = travelsModel.find(countryId=>countryId.id == req.params.id);
    if(countryById){
        return res.send({massage:"success",countryById});
    };
    return res.send({massage:"country is not found"});
};



module.exports = {
    getAllCountry,
    createCountry,
    updateCountry,
    deleteCountry,
    getCountryById
};