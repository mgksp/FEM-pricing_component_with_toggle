import { useState } from "react";
import { Card, Toggle } from "./components";
import bgTop from "./images/bg-top.svg";
import bgBottom from "./images/bg-bottom.svg";

function App() {
  const [priceMonthly, setPriceMonthly] = useState(true);

  return (
    <main className="relative z-0 overflow-hidden min-h-screen font-montserrat text-mini text-grayishBlue bg-ltrGrayishBlue px-6 py-16">
      <img
        className="absolute -z-50 -top-8 -right-2/4 lg:top-0 lg:right-0"
        src={bgTop}
        alt=""
      />
      <img
        className="absolute -z-50 hidden lg:block lg:bottom-0 lg:left-0"
        src={bgBottom}
        alt=""
      />
      <h1 className="text-32 text-center mb-12 lg:mb-8">Our Pricing</h1>
      <Toggle priceMonthly={priceMonthly} setPriceMonthly={setPriceMonthly} />
      <div className="max-w-6xl mx-auto mt-20 grid gap-8 items-center lg:gap-0 lg:grid-cols-3 lg:mt-9">
        <Card
          title="Basic"
          price={priceMonthly ? 19.99 : 199.99}
          whatYouGet={["500 GB Storage", "2 Users Allowed", "Send up to 3 GB"]}
        />
        <Card
          title="Professional"
          price={priceMonthly ? 24.99 : 249.99}
          whatYouGet={["1 TB Storage", "5 Users Allowed", "Send up to 10 GB"]}
          bgColor="bg-gradient-to-br from-primaryGradient-from to-primaryGradient-to"
          textColor="text-white"
          priceColor="text-white"
        />
        <Card
          title="Master"
          price={priceMonthly ? 39.99 : 399.99}
          whatYouGet={["2 TB Storage", "10 Users Allowed", "Send up to 20 GB"]}
        />
      </div>
      <Attribution />
    </main>
  );
}

const Attribution = () => {
  return (
    <footer className="text-xs text-center w-full py-1 absolute bottom-0 left-0">
      Challenge by&nbsp;
      <a
        className="text-sm font-bold text-primaryGradient-to"
        href="https://www.frontendmentor.io?ref=challenge"
        rel="noreferrer"
        target="_blank"
      >
        Frontend Mentor
      </a>
      . Coded by&nbsp;
      <a
        className="text-sm font-bold text-primaryGradient-to"
        href="https://www.github.com/mgksp"
        rel="noreferrer"
        target="_blank"
      >
        Prabu
      </a>
      .
    </footer>
  );
};

export default App;
