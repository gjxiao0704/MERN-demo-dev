import axios, { AxiosResponse } from 'axios'
import { type } from 'os'
const API_URL = 'http://localhost:8888/api'

const getTodos = async (): Promise<AxiosResponse<todosResponse>> => {
    try {
        const res = await axios.get<todosResponse>(`${API_URL}/todos`)
        return res
    } catch (e:any) {
        console.error(`GET /api/todos ERROR: ${e}`)
        throw new Error(e)
    }
}

const addTodo = async (todoBody: ITodo): Promise<AxiosResponse<todoResponse>> => {
    try {
        const newTodo = {
            ...todoBody,
            status: false
        }
        const res = await axios.post(`${API_URL}/todos`, newTodo)
        return res
    } catch (error:any) {
        console.error(`POST /api/todos ERROR: ${error}`)
        throw new Error(error)
    }
}

const updateTodo = async (todoBody: ITodo): Promise<AxiosResponse<todoResponse>> => {
    try {
        const newTodo = {
            ...todoBody,
            status: true
        }
        const res = await axios.put(`${API_URL}/todos/${todoBody._id}`, newTodo)
        return res
    } catch (error:any) {
        console.error(`PUT /api/todos/${todoBody._id} ERROR: ${error}`)
        throw new Error(error)
    }
}

const deleteTodo = async (id: string): Promise<AxiosResponse> => {
    try {
        const res = await axios.delete(`${API_URL}/todos/${id}`)
        return res
    } catch (error:any) {
        console.error(`DELETE /api/todos/${id} ERROR: ${error}`)
        throw new Error(error)
    }
}

export { getTodos, addTodo, updateTodo, deleteTodo }
