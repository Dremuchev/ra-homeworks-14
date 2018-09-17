'use strict';

const HexInput = ({ value, onChange }) => (
  <input
    value={value}
    onChange={event => onChange(event.currentTarget.value)}
    type="text"
    className="hex-field js-hex-field"
    placeholder="#000000"
  />
);
