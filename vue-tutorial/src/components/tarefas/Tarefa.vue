<template>
  <div>
    <v-list-item>
      <template>
        <v-list-item-action>
          <v-checkbox :input-value=tarefa.concluido @change="$emit('changeStatus', $event)">

          </v-checkbox>
        </v-list-item-action>

        <v-list-item-content>
          <div :class="textClass">
            {{ tarefa.titulo }}
          </div>
        </v-list-item-content>
      </template>
    </v-list-item>
  </div>
</template>

<script>

export default {
  props: {
    tarefa: {
      type: Object,
      required: true
    },
  },
  computed: {
    textClass() {
      return this.tarefa.concluido ? "text-decoration-line-through" : "text-decoration-none"
    }
  }
};
</script>

<style></style>
