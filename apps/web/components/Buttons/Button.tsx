export enum buttonType {
  downloadNow,
  tradeOnline,
}
const Button = ({ type }: { type: buttonType }) => {
  return (
    <span className="border rounded">
      <a
        href=""
        className={`${type === buttonType.tradeOnline ? "bg-black text-white" : null}  font-bold w-40 flex justify-center items-center h-[34px]`}
      >
        <button className=" h-full w-full">
          {type === buttonType.downloadNow ? "Download App" : "Trade Online"}
        </button>
      </a>
    </span>
  );
};

export default Button;
