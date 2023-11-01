import React from "react";
import PropTypes from "prop-types";

import styles from "./Durations.module.css";

const Durations = ({ config, activeDuration, onChange }) => {
  return (
    <div className={styles.durationContainer}>
      {Object.keys(config).map((duration) => (
        <div
          key={duration}
          className={`${styles.durationItem} ${
            activeDuration === duration ? styles.durationItemActive : ""
          }`}
          onClick={() => onChange(duration)}
        >
          <div>{config[duration].label}</div>
        </div>
      ))}
    </div>
  );
};

Durations.propTypes = {
  config: PropTypes.object,
  activeDuration: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

Durations.defaultProps = {
  config: {},
  activeDuration: "",
};

export default Durations;
