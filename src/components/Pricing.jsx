import React from "react";
import { pricingOptions } from "../constants";
import { CheckCircle2 } from "lucide-react";

const Pricing = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wider">
        Pricing
      </h2>
      <div className="flex flex-wrap">
        {pricingOptions.map((item, index) => (
          <div className="w-full sm:w-1/2 lg:w-1/3 p-2" key={index}>
            <div className="p-10 border border-neutral-700 rounded-xl">
              <p className="text-4xl mb-8">
                {item.title}
                {item.title == "Pro" && (
                  <span className="bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-xl mb-4 ml-2">
                    (Most Popular)
                  </span>
                )}
              </p>
              <p className="mb-8">
                <span className="mr-2 mt-6 text-5xl">{item.price}</span>
                <span className="text-neutral-400 tracking-right">/Month</span>
              </p>
              <ul>
                {item.features.map((feature, index) => (
                  <li key={index} className="mt-8 flex items-center">
                    <CheckCircle2 />
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="#" className="inline-flex text-center justify-center items-center w-full mt-20 h-12 p-5 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200">Subscribe</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
