import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { cn } from "../util/util";

export const InfiniteMovingCards = ({
  items,
  direction = "right",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "right") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap ",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            className="w-full min-h-[30rem] sm:min-h-[26rem] h-full bg-white/90 rounded-lg p-3 md:p-6 flex flex-col gap-2 items-center"
          >
            <img
              src={item.img}
              className="h-[4rem] w-[4rem] object-cover rounded-full"
              alt={item.name}
            />
            <h4 className="text-lg leading-none font-bold text-black">
              {item.name}
            </h4>
            <ReactStars
              edit={false}
              value={5}
              count={5}
              size={28}
              activeColor="#FFAB23"
            />
            <p className="text-black/70 text-sm whitespace-pre-line leading-normal max-w-[18rem] sm:max-w-[22rem]">
              {item.desc}
            </p>
          </div>
        ))}
      </ul>
    </div>
  );
};
