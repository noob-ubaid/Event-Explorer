import React from "react";
import Header from "../../components/Header/Header";
import { useLoaderData, useParams } from "react-router";
import DetailsCard from "../DetailsCard/DetailsCard";
import ReserveSeat from "../ReserveSeat/ReserveSeat";

const Details = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const singleEvent = data.find((card) => card.id == id);
  return (
    <>
      <div className="max-w-[1600px] mx-auto">
        <Header></Header>
        <main>
          <DetailsCard singleEvent={singleEvent}></DetailsCard>
        </main>
      </div>
      <ReserveSeat></ReserveSeat>
    </>
  );
};

export default Details;
