const axios = require("axios");
const captainModel = require('../models/captan.model')

module.exports.getCoordinates = async (address) => {
  if (!address) {
    console.error("Address is required");
    return null;
  } else {
    const apiKey = process.env.GOOGLE_MAPS_API_KEY; // Replace with your actual API key
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      address
    )}&key=${apiKey}`;

    try {
      const response = await axios.get(url);
      
      if (response.data.status === "OK") {
        const location = response.data.results[0].geometry.location;
        console.log("Latitude:", location.lat, "Longitude:", location.lng);
        return location;
      } else {
        console.error("Error from API:", response.data.status);
        return null;
      }
    } catch (err) {
      console.error("Request failed:", err.message);
    }
  }
};

module.exports.getDistanceTime = async (origin , destination) => {
  if (!origin.lat || !origin.lng || !destination.lat || !destination.lng) {

    console.log("Both origin and destination coordinates are required");
    console.log(origin , destination)
    return null;
  }

  const apiKey = process.env.GOOGLE_MAPS_API_KEY; // Replace with your actual API key
  const url = "https://routes.googleapis.com/directions/v2:computeRoutes";

  try {
    const response = await axios.post(
      url,
      {
        origin: {
          location: {
            latLng: {
              latitude: origin.lat,
              longitude: origin.lng
            },
           },
        },
        destination: {
          location: {
            latLng: {
              latitude: destination.lat,
              longitude: destination.lng
            },
          },
        },
        travelMode: "DRIVE", // DRIVE | WALK | BICYCLE | TRANSIT
      },
      {
        headers: {
          "Content-Type": "application/json",
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask":
            "routes.duration,routes.distanceMeters,routes.polyline.encodedPolyline",
        },
      }
    );

    const route = response.data.routes[0];
    console.log("Duration:", route.duration);
    console.log("Distance (meters):", route.distanceMeters);
    

    return { duration: route.duration, distance: route.distanceMeters };
  }
  catch (error) {
    console.error("Error occurred while fetching distance and time:", error);
    return null;
  }
};

module.exports.getSuggestion = async (address) => {

  if (!address) {
    return { error: "Address is required" };
  }
  
  const apiKey = process.env.GOOGLE_MAPS_API_KEY; // Replace with your actual API key
  const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(address)}&key=${apiKey}`;

  try {
    const response = await axios.get(url);
    const suggestions = response.data.predictions.map(
      (prediction) => prediction.description
    );
    return suggestions;
  } catch (error) {
    console.error(error);
    return { error: "Failed to fetch suggestions" };
  }
};


  module.exports.getCaptainsInTheRadius = async (ltd, lng, radius) => {

    // radius in km


    const captains = await captainModel.find({
        location: {
            $geoWithin: {
                $centerSphere: [ [ ltd, lng ], radius / 6371 ]
            }
        }
    });

  return captains;
}

