import React, { useEffect, useState } from "react";
const CarouselItem = [
  {
    id: 1,
    name: "image1",
    url: "https://picsum.photos/200/300?image=1",
  },
  {
    id: 2,
    name: "image2",
    url: "https://picsum.photos/200/300?image=2",
  },
  {
    id: 3,
    name: "image3",
    url: "https://picsum.photos/200/300?image=3",
  },
  {
    id: 4,
    name: "image4",
    url: "https://picsum.photos/200/300?image=4",
  },
  {
    id: 5,
    name: "image5",
    url: "https://picsum.photos/200/300?image=5",
  },
  {
    id: 6,
    name: "image6",
    url: "https://picsum.photos/200/300?image=6",
  },
];
const Caraousel = () => {
  const [currentItem, setCurrentItem] = useState(0);
  const nextItem = () => {
    setCurrentItem((prev) => (prev + 1) % CarouselItem.length);
  };
  const prevItem = () => {
    setCurrentItem(
      (prev) => (prev - 1 + CarouselItem.length) % CarouselItem.length
    );
  };
  useEffect(() => {
    const timer = setInterval(() => {
      nextItem();
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-8/12 flex justify-center items-center">
        {CarouselItem.map((item, index) => (
          <div
            className={`${
              currentItem === index
                ? "relative top-[50%] w-96 h-96 border p-2 rounded-lg"
                : "hidden"
            }`}
          >
            <img src={item.url} className="w-full h-2/3 object-fill" />
            <h1 className="text-center text-3xl font-bold mt-4">{item.name}</h1>
          </div>
        ))}
        <div className="absolute w-96 flex  justify-between">
          <button className="text-3xl" onClick={prevItem}>
            ⬅️
          </button>
          <button className="text-3xl" onClick={nextItem}>
            ➡️
          </button>
        </div>
      </div>
    </div>
  );
};

export default Caraousel;
