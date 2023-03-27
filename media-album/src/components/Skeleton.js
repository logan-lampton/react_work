import classNames from "classnames";

function Skeleton({ times }) {
  const boxes = Array(times)
    .fill(0)
    .map((_, i) => {
      return <div key={i}></div>;
    });
  return boxes;

  // for loop version of solution:
  // const boxes = [];
  // for (let i = 0; i < times; i++) {
  //     boxes.push(<div key={i} />);
  // }
  // return boxes;
}

export default Skeleton;
