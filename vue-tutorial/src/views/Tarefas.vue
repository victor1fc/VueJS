<template>
  <div>
    <v-list flat subheader>
      <v-list-item-group v-model="settings" multiple active-class="">
        <div
        v-for="tarefa, index in tarefas"
        :key="index"
        >
          <Tarefa 
          :tarefa="tarefa"/>
        </div>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
import Tarefa from "../components/tarefas/Tarefa.vue";

export default {
  name: "Home",

  components: {
    Tarefa,
  },
  data: () => ({
    tarefas: [
      { titulo: "Ir ao mercado", concluido: false },
      { titulo: "Tarefa 2", concluido: true },
      { titulo: "Tarefa 3", concluido: false },
    ],
  }),
};
</script>
