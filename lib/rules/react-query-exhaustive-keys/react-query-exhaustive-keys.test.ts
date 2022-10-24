import { ESLintUtils } from '@typescript-eslint/utils'
import rule from './react-query-exhaustive-keys'

const ruleTester = new ESLintUtils.RuleTester({
  parser: '@typescript-eslint/parser'
})

ruleTester.run('react-query-exhaustive-keys', rule, {
  valid: [
    {
      code: `function Todos({ date, todoId }) {
                const otherThing = true
                const result = useQuery(['todos', todoId, date], () => fetchTodoById(todoId))
              }
            `
    },
    {
      code: `const Todos2 = ({ date, todoId}) => {
                const result = useQuery(['todos', todoId, date], () => fetchTodoById(todoId))
             }
            `
    }
  ],
  invalid: [
    {
      code: `function Todos({ date, todoId }) {
                const otherThing = true
                const result = useQuery(['todos', todoId], () => fetchTodoById(todoId))
              }
            `,
      errors: [
        {
          messageId: 'missing-key-param'
        }
      ]
    },
    {
      code: `const Todos2 = ({ date, todoId}) => {
                const result = useQuery(['todos', date], () => fetchTodoById(todoId))
             }
            `,
      errors: [
        {
          messageId: 'missing-key-param'
        }
      ]
    }
  ]
})
