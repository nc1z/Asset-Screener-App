import React from "react";
import { FaRegBookmark } from "react-icons/fa";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import { useState } from "react";
import axios from "axios";
import notify from "../functions/notify";

const Saved = ({ asset }) => {
  const [saved, setSaved] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const handleSave = async () => {
    try {
      const { data: response } = await axios.put(
        "http://localhost:8080/details/watchlist",
        {
          symbol: asset.symbol,
          coin: asset.name,
          image: asset.image,
        }
      );

      if (response.data) {
        setDisabled(true);
        setSaved(!saved);
        notify({
          success: "Added to watchlist",
          error: "",
        });
      }
    } catch (error) {
      console.log(error.message);
      console.log(error.response.data);
      notify({
        success: "",
        error: error.response.data.error,
      });
    }
  };
  return (
    <>
      {saved ? (
        <BsFillBookmarkCheckFill
          onClick={handleSave}
          className={disabled ? "pointer-events-none" : "cursor-pointer"}
        />
      ) : (
        <FaRegBookmark onClick={handleSave} />
      )}
    </>
  );
};

export default Saved;
