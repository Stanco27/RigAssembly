import React, { useEffect, useRef, ReactNode } from 'react';
import './HorizontalScrollWheel.css'

interface Props {
  name: string;
  children: ReactNode;
  notSelected?: boolean
}

const ScrollWheelContainer: React.FC<Props> = ({ name, children, notSelected }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    if (!scrollContainer) return;

    const onWheel = (e: WheelEvent) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        scrollContainer.scrollLeft += e.deltaY;
      }
    };

    scrollContainer.addEventListener('wheel', onWheel);

    return () => {
      scrollContainer.removeEventListener('wheel', onWheel);
    };
  }, []);

  return (
    <>
      <h2 className="category-title">{name}</h2>
    <div className={notSelected ? "scroll-container not-selected" : "scroll-container"} ref={scrollContainerRef}>
      {children}
    </div>
    </>
  );
};

export default ScrollWheelContainer;
