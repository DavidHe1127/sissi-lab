import Vue from "vue";
import Vuex from "vuex";
import todos from "../data/todos";
import VuexPersistence from "vuex-persist";

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: null
  },
  getters: {
    todos: state => {
      return state.todos;
    }
  },
  mutations: {
    setTodos(state, todos) {
      state.todos = todos;
    },
    addTodo: (state, todo) => {
      state.todos.push(todo);
    },
    toggle: (state, id) => {
      state.todos = state.todos.map(todo => {
        // console.log(id);
        if (todo.id === id) {
          todo.done = !todo.done;
        }
        return todo;
      });
    },
    removeTodo: (state, id) => {
      state.todos = state.todos.filter(el => el.id !== id);
    }
  },
  actions: {
    initTodos: ({ commit }) => {
      commit("setTodos", todos);
    },
    addTodo: ({ commit }, todo) => {
      commit("addTodo", todo);
    },
    toggle: ({ commit }, id) => {
      commit("toggle", id);
    },
    removeTodo: ({ commit }, id) => {
      commit("removeTodo", id);
    }
  },
  plugins: [vuexLocal.plugin]
});
