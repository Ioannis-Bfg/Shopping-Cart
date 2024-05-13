import React from "react";
import { useParams } from "react-router-dom";

export default function ItemDetails({ shopItems }) {
  const { id } = useParams();
  const camera = shopItems.find((item) => item.id === Number(id));

  return <div className="w-full h-full">hey</div>;
}
