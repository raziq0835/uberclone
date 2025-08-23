const mapServises = require('./../services/map.services'); 
const {validationResult} = require('express-validator') 

exports.getCoordinates = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
    }
  try {
    const coordinates = await mapServises.getCoordinates();
    res.json(coordinates);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getDistanceTime = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const { start, end } = req.query;
        const distanceTime = await mapServises.getDistanceTime(start, end);
        res.json(distanceTime);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.getSuggestion = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const { address } = req.query;
        const suggestions = await mapServises.getSuggestion(address);
        res.json(suggestions);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
