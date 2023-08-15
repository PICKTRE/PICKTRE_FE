import { useState, useEffect } from "react";

export const useGeoLocation = () => {
  const [location, setLocation] = useState();
  const [error, setError] = useState("");

  const handleSuccess = (pos) => {
    const { latitude, longitude } = pos.coords;

    setLocation({
      latitude,
      longitude,
    });
  };

  const handleError = (err) => {
    setError(err.message);
  };

  useEffect(() => {
    const { geolocation } = navigator;

    if (!geolocation) {
      setError("Geolocation is not supported.");
      return;
    }

    geolocation.getCurrentPosition(handleSuccess, handleError);
  }, []);

  return { location, error };
};
