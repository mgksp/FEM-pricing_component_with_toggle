interface CardProps {
  title: string;
  price: number;
  whatYouGet: string[];
  bgColor?: string;
  textColor?: string;
  priceColor?: string;
}

export default function Card({
  title,
  price,
  whatYouGet,
  bgColor = "bg-white",
  textColor = "text-grayishBlue",
  priceColor = "text-dkGrayishBlue",
}: CardProps) {
  return (
    <div
      className={`rounded-2xl p-8 text-center shadow-md lg:first:rounded-r-none lg:last:rounded-l-none lg:even:py-14 ${bgColor} ${textColor}`}
    >
      <p className="mb-9 text-lg">{title}</p>
      <h2
        className={`text-7xl -tracking-[0.1125rem] flex items-center justify-center mb-9 ${priceColor}`}
      >
        <span className="text-[2.5rem]">$</span>
        {price}
      </h2>
      <div className="mb-8">
        <ul className="border-y-1">
          <li className="py-4 border-b-1">{whatYouGet[0]}</li>
          <li className="py-4 border-b-1">{whatYouGet[1]}</li>
          <li className="py-4">{whatYouGet[2]}</li>
        </ul>
      </div>
      <button className={bgColor !== "bg-white" ? "btnWhite" : "btnGradient"}>
        LEARN MORE
      </button>
    </div>
  );
}
