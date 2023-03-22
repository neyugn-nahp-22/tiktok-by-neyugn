import PropTypes from "prop-types";

import "./GlobalStyless.scss";

function GlobalStyless({ children }) {
  return children;
}

GlobalStyless.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalStyless;
