import { createStore } from 'vuex';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import $ from 'jquery';

export default createStore({
  state: {
    recipeList:[]
  },
  mutations: {
    update(state, data) {
      state.recipeList = data;
    }
  },
  actions: {
    update(context) {
      return $.ajax({
        url: 'https://sheets.googleapis.com/v4/spreadsheets/1BGcX7HwzAUEj8e0cMYTRZ0R6eNsfXJjqtGVOAvCFtVw/values/A:D?key=AIzaSyAnuX0hx2KL13czhkA0-XTMNNZUGQmq004',
        method: 'GET',
        success: function(data) {
          data.values = data.values.slice(1);
          context.commit('update', data);
        },
        error: function(data) {
          console.log(data);
        }
      });
    }
  },
  modules: {
  }
});
