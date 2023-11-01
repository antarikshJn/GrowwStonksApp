import React from "react";
import PropTypes from "prop-types";

import { WrapItem, Tag, TagLabel } from "@chakra-ui/react";

const ProductTagItem = ({ label, value }) => (
  <WrapItem>
    <Tag size="lg" colorScheme="red" borderRadius="full">
      <TagLabel>
        {label} : {value}
      </TagLabel>
    </Tag>
  </WrapItem>
);

ProductTagItem.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
};

ProductTagItem.defaultProps = {
  label: "",
  value: "",
};

export default ProductTagItem;
