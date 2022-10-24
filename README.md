# eslint-plugin-eslint-react-query

Eslint plugin to check for React-Query expecific rules
## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
yarn add eslint -D
pnpm add eslint -D
```

Next, install `eslint-plugin-eslint-react-query`:

```sh
npm install eslint-plugin-eslint-react-query --save-dev
yarn add eslint-plugin-eslint-react-query -D
pnpm add eslint-plugin-eslint-react-query -D
```

## Usage

Add `eslint-react-query` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "eslint-react-query"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "eslint-react-query/react-query-exhaustive-keys": 2
    }
}
```

## Supported Rules

* `react-query-exhauistive-keys`: This rule will check the use of `useQuery` to be sure that the query key used is composed of all the variables related with it. Example:


```javascript
// This is valid code
function Todos({ date, todoId }) {
  const otherThing = true
  const result = useQuery(['todos', todoId, date], () => fetchTodoById(todoId))
}  


// This is invalid code
const Todos2 = ({ date, todoId}) => {
   const result = useQuery(['todos', todoId], () => fetchTodoById(todoId))
}
```

Check a working example [in this astexplorer link](https://astexplorer.net/#/gist/ff6f4da4425bcfb69c836aff5b0755f4/60e4c9dd2ae60aef9a2a802251fd963ad4c5968d)


