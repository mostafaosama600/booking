import { useState, useEffect } from "react";

const useFetchData = (apiCall, dependencies = []) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiCall();
        setData(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, dependencies);

  return { data };
};

export default useFetchData;
