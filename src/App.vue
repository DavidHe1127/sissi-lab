<template>
  <div id="app">
    <h2>Todos:</h2>
    <form @submit.prevent="onSubmit">
      <input type="text" v-model.trim="text" class="nes-input" placeholder="Add TODO">
    </form>
    <ul>
      <Todo v-for="todo in todos" :key="todo.id" :todo="todo"/>
    </ul>
  </div>
</template>

<script>
import Todo from "@/components/Todo.vue";

export default {
  name: "App",
  components: {
    Todo
  },
  data() {
    return {
      text: null
    };
  },
  computed: {
    todos() {
      return this.$store.getters.todos;
    }
  },
  methods: {
    onSubmit(event) {
      if (!this.text) {
        alert("Enter some text to add");
      } else {
        // save todo
        const todo = { text: this.text, done: false, id: Date.now() };
        this.$store.dispatch("addTodo", todo);
        this.text = null;
      }
    }
  },
  created() {
    this.$store.dispatch("initTodos");
  }
};
</script>

<style>
html,
body,
pre,
code,
kbd,
samp {
  font-family: "Press Start 2P";
}

body {
  background: #20262E;
  padding: 20px;
}

#app {
  background: #fff;
  border-radius: 4px;
  padding: 20px;
  transition: all 0.2s;
  max-width: 800px;
  margin: 0 auto;
}

ul {
  margin-top: 30px !important;
  padding: 0;
}

li {
  margin: 8px 0;
  text-transform: capitalize;
}

del {
  color: rgba(0, 0, 0, 0.3);
}

.padding {
  padding: 1px 7px 2px;
}

.flex {
  display: flex;
}

.space {
  flex-grow: 1;
}

.centered {
  display: flex;
  justify-content: center;
}

@media screen and (max-width: 480px) {
  .flex {
    align-items: center;
  }

  li {
    font-size: 13px;
  }
}
</style>
