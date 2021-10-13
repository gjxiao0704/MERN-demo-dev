interface ITodo {
    _id: string
    name: string
    description: string
    status: boolean
    createdAt?: string
    updatedAt?: string
}

interface TodoProps {
    todo: ITodo
}

interface todosResponse {
    todos: Array<ITodo>
}
interface todoResponse {
    todo : ITodo 
}