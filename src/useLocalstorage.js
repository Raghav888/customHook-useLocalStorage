import { useEffect, useState } from "react";
export const useLocalstorage = () => {
  const [wishSaved, setWishSaved] = useState(-1);
  const [wishList, setWishList] = useState([]);
  useEffect(() => {
    localStorage.setItem("wishes", JSON.stringify(wishList));
    setWishSaved((savedWishes) => savedWishes + 1);
  }, [wishList]);

  return { setWishList, wishList, wishSaved };
};
