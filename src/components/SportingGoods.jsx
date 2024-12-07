import React from "react";
import { Fade, Slide } from "react-awesome-reveal";

const SportingGoods = () => {
  //     <Slide>
  //     <h1>React Awesome Reveal</h1>
  //   </Slide>
  //   <Fade delay={1e3} cascade damping={1e-1}>
  //     Easy-to-use animation library for React apps
  //   </Fade>
//   ”bounce", "flash", "headShake”, "heartBeat", "jello”, "pulse", "rubberBand", “shake”, “shakeX", "shakeY”, "swing”, "tada" and “wobble”.

  return (
    <div className="mt-8 mb-10">
      <Slide  >
        <h1 className="text-xl md:text-2xl lg:text-4xl font-bold mb-5 text-center">
          Sporting Goods
        </h1>
      </Slide>

      <Fade delay={1e3} cascade damping={1e-1}>
        <p>
          At Escalade Sports, we offer a wide range of sports products and gear,
          including products from basketball, pickleball, billiards, darts,
          table tennis, soccer, baseball, and football training, as well as
          archery and fitness. Explore the wide variety of equipment offered
          across the board from Escalade Sports!{" "}
        </p>
      </Fade>

      <Slide>
      <h3 className="mt-4 text-lg font-bold mb-2">Basketball</h3>
      </Slide>
     <Fade delay={1e3} cascade damping={1e-1}>
     <p>
        Whether you are looking for a way to get the whole family in the
        driveway to play on a sunny afternoon, or if you're looking for a
        training tool to help develop your basketball star right there in the
        driveway, Escalade Sports offers multiple brands of basketball hoops and
        accessories to explore. Choose between four different type of basketball
        goals — in-ground, portable, wall-mounted, and youth hoops in order to
        provide fun for years to come.{" "}
      </p>
     </Fade>
      <Slide>
      <h3 className="mt-4 font-bold text-lg mb-2">Pickleball</h3>
      </Slide>
      <Fade delay={1e3} cascade damping={1e-1}>
      <p>
        Our ONIX pickleball gear and practice equipment are perfect for all
        levels of players, whether you are a beginner pickleball player just
        wanting to learn and start the game, or you are an experienced
        professional wanting to refresh your current pickleball equipment or
        gear - it's all offered from Escalade Sports. Pickleball can be played
        for fun, social matches, or in professional tournaments; explore the
        extensive lineup of pickleball equipment today.{" "}
      </p>
      </Fade>
      <Slide>
      <h3 className="mt-4 text-lg font-bold mb-2">Billiards</h3>
      </Slide>
      <Fade delay={1e3} cascade damping={1e-1}>
      <p>
        Create even more fun or upgrade your current billiards equipment by
        exploring the plethora of options from Escalade Sports. Give your game
        room the competitive edge you need with our wide selection of billiards
        supplies, including pool table equipment, cues, and billiards gear.{" "}
      </p>
      </Fade>
     <Slide>
     <h3 className="mt-4 text-lg font-bold mb-2">Darts</h3>
     </Slide>
      <Fade delay={1e3} cascade damping={1e-1}>
      <p>
        Besides the basics, our extensive collection of darts and dart supplies
        covers a wide range of products from dart sets to dartboards, cabinets,
        and backboards, as well as every accessory you could imagine. Whether
        you are someone wanting to add an extra piece of fun to the game room,
        or someone who needs to upgrade their darts before a competitive
        tournament, we offer a wide selection of options to ensure you have
        everything you need that involves darting.
      </p>
      </Fade>
     <Slide>
     <h3 className="mt-4 text-lg font-bold mb-2">Table Tennis</h3>
     </Slide>
     <Fade delay={1e3} cascade damping={1e-1}>
     <p>
        Table tennis has never been easier with our large selection of indoor
        and outdoor table tennis equipment to fit all the different levels of
        experience with the best rackets, tables, accessories and so much more
        in order to take your game to the next level. Whether it's just for fun
        or for competitive practice before a big tournament, make sure you are
        prepared with exactly the things you need!{" "}
      </p>
     </Fade>
     <Slide>
     <h3 className="mt-4 text-lg font-bold mb-2">Archery</h3>
     </Slide>
     <Fade delay={1e3} cascade damping={1e-1}>
     <p>
        Make every shot a bullseye with our range of archery supplies, with
        bows, arrows, and targets for all levels, from beginners in the sport to
        sharpshooters. There is something for every type of shot.{" "}
      </p>
     </Fade>
      <Slide>
      <h3 className="mt-4 text-lg font-bold mb-2">
        Soccer, Baseball, & Football Training{" "}
      </h3>
      </Slide>
    <Fade delay={1e3} cascade damping={1e-1}>
    <p>
        Whether you are a basketball, soccer, football, baseball, softball,
        golfer, or lacrosse player, our sports training equipment has you
        covered. Training tools from Goalrilla replicate the in-game experience
        so you are ready to perform when the time comes.
      </p>
    </Fade>
    <Slide>
    <h3 className="mt-4 text-lg font-bold mb-2">Fitness </h3>
    </Slide>
     <Fade>
     <p>
        With our wide selection of Fitness & Training Equipment, you can be sure
        to amp up your current workout routine, start new healthy habits, and
        fill your home gym in order to be your best self.
      </p>
     </Fade>
    </div>
  );
};

export default SportingGoods;
