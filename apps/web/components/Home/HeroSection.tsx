import Image from "next/image";
import Button, { buttonType } from "../Buttons/Button";

const HeroSection = () => {
  return (
    <div className="grid grid-cols-2 w-3/4">
      <div className=" ">
        <h1 className="mt-40 text-7xl font-medium">Turn Opinions</h1>
        <h1 className="ml-2 mt-2 text-4xl ">into Opportunities</h1>
        <div className="ml-2 mt-10 text-gray-500  text-xl">
          Sports, Entertainment, Economy or Finance.
        </div>
        <div className="flex mt-20 gap-x-5 ml-2">
          <Button type={buttonType.downloadNow} />

          <Button type={buttonType.tradeOnline} />
        </div>
      </div>
      <div className=" mt-20 flex">
        <Image
          className=""
          src={"/hero_sec_image.png"}
          height={600}
          width={600}
          alt="image"
        />
      </div>
    </div>
  );
};

export default HeroSection;
