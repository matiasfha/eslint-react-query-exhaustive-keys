import { Scope } from "@typescript-eslint/scope-manager";
import { TSESLint, TSESTree, ESLintUtils } from "@typescript-eslint/utils";

export const createRule = ESLintUtils.RuleCreator(
  () =>
    "https://github.com/matiasfha/eslint-plugin-react-query/blob/main/README.md"
);

export default createRule({
  name: "react-query-exhaustive-keys",
  meta: {
    type: "suggestion",
    hasSuggestions: false,
    schema: {},
    docs: {
      description: "Use all the variables in the query key definition",
      recommended: "warn",
      requiresTypeChecking: false,
    },
    messages: {
      "missing-key-param": "The query key is missing a required parameter",
    },
  },
  defaultOptions: [],
  create: function (
    context: Readonly<TSESLint.RuleContext<"missing-key-param", never[]>>
  ) {
    return {
      CallExpression(node: TSESTree.CallExpression) {
        const callee = node.callee as TSESTree.Identifier;
        if (callee.name === "useQuery") {
          const scope = context.getScope();
          const queryKeyVariables = getQueryKeyVariables(node);
          const parameters = getFunctionParameters(scope);

          if (!arrayEquals(parameters, queryKeyVariables)) {
            return context.report({
              node,
              messageId: "missing-key-param",
              data: {
                variables: parameters,
                queryKey: queryKeyVariables,
              },
            });
          }
        }
      },
    };
  },
});

function arrayEquals(a: unknown[], b: unknown[]) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
}

function getFunctionParameters(scope: Scope) {
  return scope.variables
    .filter((v) => v.defs[0].type === "Parameter")
    .map((p) => p.name)
    .sort();
}

function getQueryKeyVariables(node: TSESTree.CallExpression) {
  const expression = node.arguments.at(0) as TSESTree.ArrayExpression;
  return expression.elements
    .filter((node) => node.type === "Identifier")
    .map((node) => (node as TSESTree.Identifier).name)
    .sort();
}
