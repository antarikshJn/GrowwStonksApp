import PropTypes from "prop-types";

const PropertyControlledComponent = ({
  controllerProperty,
  children,
  fallback = null,
}) => {
  if (!controllerProperty) return fallback;
  return children;
};

PropertyControlledComponent.propTypes = {
  controllerProperty: PropTypes.bool,
  children: PropTypes.node,
  fallback: PropTypes.node,
};

PropertyControlledComponent.defaultProps = {
  controllerProperty: true,
  children: null,
  fallback: null,
};

export default PropertyControlledComponent;
