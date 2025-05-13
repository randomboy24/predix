import Link from "next/link";

export enum buttonType {
  downloadNow,
  tradeOnline,
}

const Button = ({ type }: { type: buttonType }) => {
  return (
    <span className="border rounded hover:cursor-pointer">
      <Link
        href="/events"
        className={`font-bold w-40 flex justify-center items-center h-[34px] ${
          type === buttonType.tradeOnline ? "bg-black text-white" : ""
        }`}
      >
        {type === buttonType.downloadNow ? "Download App" : "Trade Online"}
      </Link>
    </span>
  );
};

export default Button;
