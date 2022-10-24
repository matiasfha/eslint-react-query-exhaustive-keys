/**
 * @fileoverview React Query checks
 * @author Matias Hernández
 */

// Base config
import rules from "./rules";

const configs = {
  recommended: {
    plugins: ["react-query"],
    rules: {
      "react-query/exhaustive-keys": "warn",
    },
  },
};
// eslint-disable-next-line
const configuration = {
  rules,
  configs,
};

export = configuration;
