import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { Tooltip as ReactTooltip } from "react-tooltip";

const SportsCategory = () => {
  return (
    <div className="  rounded-lg  mb-14">
      <h1 className="text-center text-red-500 text-xl md:text-2xl lg:text-4xl font-bold underline mb-5 ">
        <Typewriter
          words={["Sports Category"]}
          loop={true}
          cursor
          cursorStyle="...!"
          typeSpeed={100}
          deleteSpeed={100}
          delaySpeed={1000}
        ></Typewriter>
      </h1>
      <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 relative ">
        <div className="text-center transition hover:scale-105  ">
          <img
            data-tooltip-id="my-tooltip-1"
            src="https://dawsonsportsme.com/cdn/shop/files/ATHLETICS-W_a328d818-34fb-42fc-a1ea-363b3dc476e9.jpg?v=1699599003&width=500"
            alt=""
          />
          <ReactTooltip id="my-tooltip-1" place="top" content="Athletics" />
          <p className="text-center -mt-14 text-xl font-bold ">Athletics</p>
        </div>
        <div className="text-center transition hover:scale-105">
          <img
            data-tooltip-id="my-tooltip-2"
            src="https://dawsonsportsme.com/cdn/shop/files/BADMINTON-W_67167b4f-9e4f-491f-a503-f788fdc5422c.jpg?v=1699599009&width=500"
            alt=""
          />
          <ReactTooltip id="my-tooltip-2" place="top" content="Badminton" />
          <p className="text-center -mt-14 text-xl font-bold ">Badminton</p>
        </div>
        <div className="text-center transition hover:scale-105">
          <img
            data-tooltip-id="my-tooltip-3"
            src="https://dawsonsportsme.com/cdn/shop/files/BASEBALL___ROUNDERS-W_5e97ba13-ee93-4343-a1ae-1295e758088c.jpg?v=1699599016&width=500"
            alt=""
          />
          <ReactTooltip id="my-tooltip-3" place="top" content="Baseball" />
          <p className="text-center -mt-14 text-xl font-bold ">
            Baseball, Softball & Rounders
          </p>
        </div>
        <div className="text-center transition hover:scale-105">
          <img
            data-tooltip-id="my-tooltip-4"
            src="https://dawsonsportsme.com/cdn/shop/files/BASKETBALL-W_d14d0571-1825-4dd0-912d-14c563e8971e.jpg?v=1699599021&width=500"
            alt=""
          />
          <ReactTooltip id="my-tooltip-4" place="top" content="Basketball" />
          <p className="text-center -mt-14 text-xl font-bold ">Basketball</p>
        </div>
        <div className="text-center transition hover:scale-105">
          <img
            data-tooltip-id="my-tooltip-5"
            src="https://dawsonsportsme.com/cdn/shop/files/CRICKET-W.jpg?v=1696401580&width=500"
            alt=""
          />
          <ReactTooltip id="my-tooltip-5" place="top" content="Cricket" />
          <p className="text-center -mt-14 text-xl font-bold ">Cricket</p>
        </div>
        <div className="text-center transition hover:scale-105">
          <img
            data-tooltip-id="my-tooltip-6"
            src="https://dawsonsportsme.com/cdn/shop/files/FOOTBALL-W.jpg?v=1696401580&width=500"
            alt=""
          />
          <ReactTooltip id="my-tooltip-6" place="top" content="Football" />
          <p className="text-center -mt-14 text-xl font-bold ">Football</p>
        </div>
        <div className="text-center transition hover:scale-105">
          <img
            data-tooltip-id="my-tooltip-7"
            src="https://dawsonsportsme.com/cdn/shop/files/VOLLEYBALL-W.jpg?v=1696401668&width=500"
            alt=""
          />
          <ReactTooltip id="my-tooltip-7" place="top" content="Volleyball" />
          <p className="text-center -mt-14 text-xl font-bold ">Volleyball</p>
        </div>
        <div className="text-center transition hover:scale-105">
          <img
            data-tooltip-id="my-tooltip-8"
            src="https://dawsonsportsme.com/cdn/shop/files/TABLE_TENNIS-W.jpg?v=1696401669&width=500"
            alt=""
          />
          <ReactTooltip id="my-tooltip-8" place="top" content="Table Tennis" />
          <p className="text-center -mt-14 text-xl font-bold ">Table Tennis</p>
        </div>
        <div className="text-center transition hover:scale-105">
          <img
            data-tooltip-id="my-tooltip-9"
            src="https://dawsonsportsme.com/cdn/shop/files/RUGBY-W.jpg?v=1696401670&width=500"
            alt=""
          />
          <ReactTooltip id="my-tooltip-9" place="top" content="Rugby" />
          <p className="text-center -mt-12 text-xl font-bold ">Rugby</p>
        </div>
        <div className="text-center transition hover:scale-105">
          <img
            data-tooltip-id="my-tooltip-10"
            src="https://dawsonsportsme.com/cdn/shop/files/NETBALL-W.jpg?v=1696401579&width=500"
            alt=""
          />
          <ReactTooltip id="my-tooltip-10" place="top" content="Netball" />
          <p className="text-center -mt-12 text-xl font-bold ">Netball</p>
        </div>
        <div className="text-center transition hover:scale-105">
          <img
            data-tooltip-id="my-tooltip-11"
            src="https://dawsonsportsme.com/cdn/shop/files/Water_Polo-W.jpg?v=1696401668&width=500"
            alt=""
          />
          <ReactTooltip id="my-tooltip-11" place="top" content="Water Polo" />
          <p className="text-center -mt-14 text-xl font-bold ">Water Polo</p>
        </div>
        <div className="text-center transition hover:scale-105">
          <img
            data-tooltip-id="my-tooltip-12"
            src="https://dawsonsportsme.com/cdn/shop/files/TENNIS___PADDLE-W.jpg?v=1696401669&width=500"
            alt=""
          />
          <ReactTooltip
            id="my-tooltip-12"
            place="top"
            content="Tennis & Padel"
          />
          <p className="text-center -mt-14 text-xl font-bold ">
            Tennis & Padel
          </p>
        </div>
      </div>
    </div>
  );
};

export default SportsCategory;
