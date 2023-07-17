import React from "react";
import "./Grid.css";

function Grid(props) {

  const {cols,gridCount} = props;

  const renderGrid = () => {
    //const { rows, columns } = props;
    const cells = [];
    let k = 0;
    for (let row = 0; row < gridCount; row++) {
      // for (let col = 0; col < columns; col++) {
        const cellId = `cell-${row}}`;
        k++;
        cells.push(
          <div
            className="cell"
            style={{minHeight:'150px',backgroundColor:'blue',color:'#fff'}}
            onClick={(evt) =>
              alert(`${evt.currentTarget.textContent} was pressed`)
            }
            key={cellId}
            value={k}
          >
            {k}
          </div>
        );
      // }
    }

    return cells;
  };

  return (
    <div
      className="grid"
      style={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, auto)`,
        // gridTemplateRows: `repeat(${rows}, auto)`,
      }}
    >
      {renderGrid()}
    </div>
  );
}

export default Grid;
