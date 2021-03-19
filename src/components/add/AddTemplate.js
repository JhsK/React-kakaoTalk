import React from "react";
import AddCard from "./AddCard";
import AddIconList from "./AddIconList";
import BgTemplate from "../../lib/styles/BgTemplate";

const AddTemplate = () => {
  return (
    <BgTemplate>
      <AddCard />
      <AddIconList />
    </BgTemplate>
  );
};

export default AddTemplate;
