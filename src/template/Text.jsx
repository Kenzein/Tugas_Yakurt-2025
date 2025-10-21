import SplitText from "../../ReactAnim/SplitText/SplitText.jsx";
import RotatingText from "../../ReactAnim/RotatingText/RotatingText.jsx";

const Text = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <h1 className="text-3xl font-bold text-white">
        <SplitText text="Selamat Datang di Bioskop APP" />
      </h1>
      <div className="flex flex-col justify-center items-center">
        <span className="mt-2 text-red-500 text-2xl font-bold">
          <RotatingText
            texts={["Pesan ", "Tiket", "Bioskop", "Kapan dan Dimana pun"]}
            mainClassName="font-semibold text-lg px-2 sm:px-2 md:px-3 text-galaxy-p overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </span>
      </div>
    </div>
  );
};
export default Text;
