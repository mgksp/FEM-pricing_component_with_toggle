import React from "react";

interface ToggleProps {
  priceMonthly: Boolean;
  setPriceMonthly: Function;
}

export default function Toggle({ priceMonthly, setPriceMonthly }: ToggleProps) {
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    setPriceMonthly(evt.target.checked);
  };

  return (
    <div className="flex items-center justify-center gap-6">
      <p className="">Annually</p>
      <label
        className="relative h-8 w-14 block rounded-full bg-gradient-to-r from-primaryGradient-from to-primaryGradient-to cursor-pointer"
        htmlFor="toggleBtn"
      >
        <input
          className="invisible"
          checked={priceMonthly ? true : false}
          onChange={handleChange}
          type="checkbox"
          id="toggleBtn"
        />
        <span
          className={
            priceMonthly
              ? "absolute top-1/2 translate-x-[15px] -translate-y-1/2 h-6 w-6 rounded-full bg-white transition-transform duration-300 ease-in-out"
              : "absolute top-1/2 left-1 -translate-y-1/2 h-6 w-6 rounded-full bg-white transition-transform duration-300 ease-in-out"
          }
        ></span>
      </label>
      <p className="">Monthly</p>
    </div>
  );
}
