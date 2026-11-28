<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field v-model="description" label="Descrição da tarefa" hide-details="auto"></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
          <v-btn color="primary" @click="addTask()">

            Adicionar Tarefa
          </v-btn>
        </v-col>
      </v-row>
    </v-container>

    <v-list flat subheader>
      <v-list-item-group multiple active-class="">
        <div v-for="tarefa, index in tarefas" :key="index">
          <v-row align="center">
            <Tarefa :tarefa="tarefa" @changeStatus="changeStatus(tarefa, $event)" />
            <v-btn fab dark x-small color="secundary" @click="removeTask(tarefa)">
              <v-icon dark>
                mdi-minus
              </v-icon>
            </v-btn>
          </v-row>
        </div>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
import { Tarefa } from '@/models/tarefa';
import TarefaComponent from '@/components/tarefas/Tarefa.vue';
import { TaskService } from '@/services/task-service';


export default {
  name: "Home",

  components: {
    Tarefa: TarefaComponent,
  },
  data() {
    return {
      description: "",
      tarefas: []
    }
  },
  created() {
    this.taskService = new TaskService();
    this.getTasks();
  },
  methods: {
    async getTasks(){
      try {
        this.tarefas = await this.taskService.getAllTasks();
      } catch (error) {
        console.error("Erro ao buscar tarefas:", error);
      }
      
    },
    async addTask() {
      if (!this.description.trim()) return;
      try {
        this.taskService.createTask(this.description);  
        this.tarefas = await this.taskService.getAllTasks();
        
      } catch (error) {
        console.log(error);
      }
      
      this.description = "";
    },
    changeStatus(tarefa, $event) {
      tarefa.concluido = $event;
    },
    removeTask(tarefa) {
      this.tarefas = this.tarefas.filter((tsk) => {
        return tarefa.id !== tsk.id
      })
    }
  }
};
</script>
