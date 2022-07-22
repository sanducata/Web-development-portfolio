import { useEffect, useRef } from "react";
import "./style.css";

function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousemove", (event) => {
      const { clientX, clientY } = event;
      console.log(event);
      const mouseX = clientX - cursorRef.current.clientWidth / 2;
      const mouseY = clientY - cursorRef.current.clientHeight / 2;

      cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    });
  }, []);

  return (
    <div className="customCursor" ref={cursorRef}>
      <div className="line"></div>
    </div>
  );
}

export default CustomCursor;
