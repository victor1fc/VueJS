import { Tarefa } from '@/models/tarefa';
import api from "./api-service";

export class TaskService {
    async getAllTasks() {
        const {data} = await api.get(`/tarefas`);
        return data;
    }

    async getTask(id) {
        const {data} = await api.get(`/tarefas/`, id);
        return data;
    }

    async createTask(description) {
        const task = new Tarefa(0, description);
        const {data} = await api.post(`/tarefas`, task);
        return data;
    }

    async deleteTask(id) {
        const {data} = await api.delete(`/tarefas`, id);
        return data;
    }
}



