import Appbar from "../components/Appbar/Appbar";
import HeroSection from "../components/Home/HeroSection";

export default function Home() {
  function wait(duration: number): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, duration * 1000);
    });
  }
  return (
    <div>
      <section className="flex justify-center">
        <HeroSection />
        {/* <button onClick={() => {

        }}></button> */}
      </section>
    </div>
  );
}
