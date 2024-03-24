import { Dot } from "lucide-react";

type props = {
  activeIndex: number;
  onClick: (index: number) => void;
  imgArr: {
    src: string;
    alt: string;
  }[];
};
function Dots({ activeIndex, onClick, imgArr }: props) {
  return (
    <div className="allDots">
      {imgArr.map((_, index) => {
        return (
          <span
            key={index}
            onClick={() => onClick(index)}
            className={activeIndex === index ? "dot activeDot" : "dot"}
          >
            <Dot size={44} strokeWidth={3} />
          </span>
        );
      })}
    </div>
  );
}

export default Dots;
