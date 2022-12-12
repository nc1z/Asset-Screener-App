import React from "react";
import { FaRegBookmark } from "react-icons/fa";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import { useState } from "react";

const Saved = () => {
  const [saved, setSaved] = useState(false);
  const handleSave = () => {
    setSaved(!saved);
  };
  return (
    <>
      {saved ? (
        <BsFillBookmarkCheckFill onClick={handleSave} />
      ) : (
        <FaRegBookmark onClick={handleSave} />
      )}
    </>
  );
};

export default Saved;
