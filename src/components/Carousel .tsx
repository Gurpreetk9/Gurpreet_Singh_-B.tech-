import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import "./Carousel.scss";
import Dots from "./Dots";

const maxVisibile = 3;
const imgArr = [
  {
    src: "https://images.pexels.com/photos/211760/pexels-photo-211760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Modern kitchen Utensils",
  },
  {
    src: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Modern Furniture",
  },
  {
    src: "https://images.pexels.com/photos/280471/pexels-photo-280471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Modern Furniture ",
  },
  {
    src: "https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Latest Fashion ",
  },
  {
    src: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Latest Electonics ",
  },
  {
    src: "https://images.pexels.com/photos/18533675/pexels-photo-18533675/free-photo-of-clothes-and-accessories.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Modern Fashion ",
  },
];

function Carousel() {
  const [index, setIndex] = useState(2);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(index == imgArr.length - 1 ? 0 : index + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [index]);
  function generateSlider() {
    let items = [];
    for (let i = index - 2; i < index + 3; i++) {
      let currIdx = i;
      if (i < 0) {
        currIdx = imgArr.length + i;
      } else if (i >= imgArr.length) {
        currIdx %= imgArr.length;
      }

      items.push(
        <div
          className={`imgDiv level${i - index}`}
          onClick={() => setIndex(currIdx)}
        >
          <img
            key={currIdx}
            className="carouselImg"
            src={imgArr[currIdx].src}
            alt={imgArr[currIdx].alt}
          />
          {currIdx === index ? (
            <div className="imageTitle">
              <p>{imgArr[currIdx].alt}</p>
            </div>
          ) : null}
        </div>
      );
    }
    return items;
  }
  function handlePrevButton() {
    setIndex((prev) => (prev == 0 ? imgArr.length - 1 : prev - 1));
  }

  function handleNextButton() {
    setIndex((prev) => (prev == imgArr.length - 1 ? 0 : prev + 1));
  }

  return (
    <div className="carousel">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {generateSlider()}
      </div>
      <div className="dotArrow">
        <ArrowLeft
          className="arrows"
          size={20}
          strokeWidth={3}
          absoluteStrokeWidth
          onClick={handlePrevButton}
        />
        <Dots
          activeIndex={index}
          onClick={(index) => setIndex(index)}
          imgArr={imgArr}
        />
        <ArrowRight
          className="arrows"
          size={20}
          strokeWidth={3}
          absoluteStrokeWidth
          onClick={handleNextButton}
        />
      </div>
    </div>
  );
}

export default Carousel;
