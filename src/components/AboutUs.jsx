import React from "react";
import { Typewriter } from "react-simple-typewriter";

const AboutUs = () => {
  return (
    <div className="mt-8 mb-10">
      <h1 className="text-red-500 text-xl md:text-2xl lg:text-4xl text-center mb-5 underline">
        
        <Typewriter
        words={["About us"]}
        loop={true}
        cursor
        cursorStyle="...!"
        typeSpeed={100}
        deleteSpeed={100}
        delaySpeed={1000}>

        </Typewriter>
      </h1>
      <div className="collapse collapse-arrow bg-base-200 border  mb-2">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          What types of sports equipment do you sell?
        </div>
        <div className="collapse-content">
          <p>
            We offer a wide range of sports equipment, including gear for
            football, cricket, badminton, basketball, tennis, and more. Our
            inventory includes equipment, apparel, and accessories for both
            professional and recreational use.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200 border ">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Do you provide customization options for sports gear?
        </div>
        <div className="collapse-content">
          <p>
            Yes, we provide customization options for selected products, such as
            jerseys, rackets, and other equipment. You can add names, numbers,
            logos, or adjust specifications like string tension for rackets.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200 mb-2 ">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          What is your return and exchange policy?
        </div>
        <div className="collapse-content">
          <p>
            You can return or exchange items within 15 days of purchase,
            provided they are unused and in their original packaging. Please
            refer to our Return Policy section for detailed guidelines.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200 mb-2 border ">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Do you offer discounts for bulk orders?
        </div>
        <div className="collapse-content">
          <p>
            Yes, we provide special discounts for bulk or team orders. Contact
            our customer support team for a custom quote tailored to your needs.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200 border ">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          How long does delivery take?
        </div>
        <div className="collapse-content">
          <p>
            Delivery typically takes 3-7 business days, depending on your
            location. Expedited shipping options are also available at checkout
            for faster delivery.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
