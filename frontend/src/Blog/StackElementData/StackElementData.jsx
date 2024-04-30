import { useMemo } from "react";
import "./StackElementData.css";

const StackElementData = ({
  heapElementPriority,
  frameDivWidth,
  frameDivHeight,
}) => {
  const frameDiv1Style = useMemo(() => {
    return {
      width: frameDivWidth,
      height: frameDivHeight,
    };
  }, [frameDivWidth, frameDivHeight]);

  return (
    <div className="stack-element-data">
      <img
        className="heap-element-priority"
        loading="lazy"
        alt=""
        src={heapElementPriority}
      />
      <div className="stack-element-data-child" style={frameDiv1Style} />
    </div>
  );
};

export default StackElementData;
