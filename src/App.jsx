import uuid from "react-uuid";
import { useState } from "react";
import "./styles.css";
import { useLocalstorage } from "./useLocalstorage";

function WishList() {
  const [wishText, setWishText] = useState("");
  const { setWishList, wishList, wishSaved } = useLocalstorage(); //customHook
  const handleWishAdd = () => {
    setWishList((list) => list.concat({ id: uuid(), wish: wishText }));
    setWishText("");
  };

  const handleWishInput = (event) => setWishText(event.target.value);

  return (
    <div>
      <input
        onChange={handleWishInput}
        value={wishText}
        placeholder={"I wish..."}
      />
      <button onClick={handleWishAdd}>Add </button>
      <ul>
        {wishList.map(({ id, wish }) => (
          <li key={id}> {wish} </li>
        ))}
      </ul>

      <span> wishes saved {wishSaved} </span>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <h1 className="app-header">wishing well</h1>
      <div className="app-body">
        <WishList />
      </div>
    </div>
  );
}
