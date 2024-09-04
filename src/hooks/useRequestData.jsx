import React, { useState, useCallback } from 'react'; 
import axios from 'axios';

const useRequestData = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const makeRequest = useCallback(async (apiurl, method = 'GET', bodydata = null, headers = null, params = null) => {
    setIsLoading(true);

    try {
      let response;
      switch (method) {
        case 'GET':
          response = await axios.get(apiurl, { headers, params });
          break;
        case 'POST':
          response = await axios.post(apiurl, bodydata, { headers, params });
          break;
        case 'PUT':
          response = await axios.put(apiurl, bodydata, { headers, params });
          break;
        case 'PATCH':
          response = await axios.patch(apiurl, bodydata, { headers, params });
          break;
        case 'DELETE':
          response = await axios.delete(apiurl, { headers, params });
          break;
        default:
          throw new Error('Invalid method - expected GET, POST, PUT, PATCH, DELETE');
      }

      if (response.data) {
        setData(response.data);
        setError(null);
      } else {
        throw new Error('Empty response / no data');
      }
    } catch (error) {
      setError(error.message);
      setData(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { data, isLoading, error, makeRequest };
};

export default useRequestData;
