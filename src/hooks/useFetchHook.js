import { useState, useEffect } from "react";

export const useFetchHook = url => {
  const [state, setState] = useState([]);

  let fetchData = () => fetch(url).then(res => res.json()); //url created by "Web Server for Chrome"

  let saveData = async () => {
    try {
      let data = await fetchData();
      setState(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    saveData();
  }, []);

  return { state };
};
