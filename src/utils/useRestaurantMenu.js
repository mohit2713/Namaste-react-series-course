import { useEffect, useState } from "react";
import { RESAPI } from "./../utils/constants";

const useRestaurantMenu = (id) => {
  const [resInfo, setResInfo] = useState(null);
  // console.log(resInfo);
  // console.log(id);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(RESAPI + id);
    const json = await data.json();
    setResInfo(json.data);
  };
  return resInfo;
};

export default useRestaurantMenu;
