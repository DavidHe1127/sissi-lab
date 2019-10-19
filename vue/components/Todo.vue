<template>
  <li class="flex">
    <label>
      <input type="checkbox" class="nes-checkbox" :checked="todo.done" @change="toggle(todo.id)">
      <span>&nbsp;</span>
    </label>
    <del v-if="todo.done">{{ todo.text }}</del>
    <span v-else>{{ todo.text }}</span>
    <div class="space"></div>
    <button class="nes-btn is-error padding" @click="removeTodo(todo.id)">X</button>
  </li>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "todo",
  props: ["todo"],
  methods: {
    ...mapActions(["removeTodo", "toggle"])
  }
};
</script>

<style>
</style>
