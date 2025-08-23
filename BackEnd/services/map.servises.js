const axios = require('axios');


exports.getCoordinates = {
  getMapData: async (req, res) => {
    try {
      const response = await axios.get('https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/auto/500x300?access_token=YOUR_MAPBOX_ACCESS_TOKEN');
      res.json(response.data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch map data' });
    }
  }
};

exports.getDistanceTime = (req, res) => {
    const { start, end } = req.query;
    if (!start || !end) {
        return res.status(400).json({ error: 'Start and end locations are required' });
    }
    // Call to external API or service to get distance and time
    axios.get(`https://api.mapbox.com/directions/v5/mapbox/driving/${start};${end}?access_token=YOUR_MAPBOX_ACCESS_TOKEN`)
        .then(response => {
            const { distance, duration } = response.data.routes[0];
            res.json({ distance, duration });
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ error: 'Failed to fetch distance and time' });
        });
};


exports.getSuggestion = (req, res) => {
    const { address } = req.query;
    if (!address) {
        return res.status(400).json({ error: 'Address is required' });
    }
    // Call to external API or service to get suggestions
    axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=YOUR_MAPBOX_ACCESS_TOKEN`)
        .then(response => {
            const suggestions = response.data.features.map(feature => feature.place_name);
            res.json(suggestions);
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ error: 'Failed to fetch suggestions' });
        });
};
