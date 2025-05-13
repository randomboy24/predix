import Link from "next/link";
import Button, { buttonType } from "../Buttons/Button";

const Appbar = () => {
  return (
    <nav className="flex h-[69px] justify-center ">
      <div className="h-full w-3/4 flex justify-between items-center  text-sm border-b border-gray-200">
        <div className=" flex gap-x-11">
          <Link href="/" className=" text-2xl font-bold  ">
            <button>Predix</button>
          </Link>
          <Link href="/events" className="ml-10  flex items-center">
            <button>Trading</button>
          </Link>
          <Link href="/portfolio" className=" flex items-center ">
            <button>portfolio</button>
          </Link>
          <Link href="/recharge" className=" flex items-center">
            <button>Recharge</button>
          </Link>
        </div>
        <div className="flex gap-x-4   h-9">
          <span className=" w-28 flex justify-end flex-row text-right">
            <span>For 18 years and above only</span>
          </span>
          <Button type={buttonType.downloadNow} />
          <Button type={buttonType.tradeOnline} />
        </div>
      </div>
    </nav>
  );
};

export default Appbar;
