"use strict";

function Stars({count}) {
  const stars =
    typeof count === "number" && count >= 1 && count <= 5
      ? count
      : null;
  return (
    count && (
      <ul className="card-body-stars u-clearfix">
        {new Array(stars).fill(<li><Star /></li>) }
      </ul>
    )
  );
}
