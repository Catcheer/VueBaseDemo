/**
 * Created by Administrator on 2017/1/9.
 */
import Vue from 'vue';
import Vuex from  'vuex';

Vue.use(Vuex);
export const store = new Vuex.Store({
  state: {
    studentsArr: [
      {
        sId: 0,
        name: "Jhone",
        age: 15,
        grade: 3
      },
      {
        sId: 1,
        name: "Sufee",
        age: 14,
        grade: 3
      },
      {
        sId: 2,
        name: "Ason",
        age: 12,
        grade: 2
      },
    ],
    doneTodoArr: [
      {id: 1, text: '...', done: true},
      {id: 2, text: '...', done: false}
    ]
  },
  mutations: {
    remove(state, payload){
      const index = state.studentsArr.findIndex((x)=>x.sId == payload.item.sId);
      state.studentsArr.splice(index, 1)
    },
    add(state, newInfo){
      state.studentsArr.push(newInfo)
    }
  },
  getters: {
    doneTodos: (state)=> {
      return state.doneTodoArr.filter((item)=>item.done)
    }
  },
  actions: {
    remove({commit},item){
      setTimeout(()=> {
        commit('remove',item);
      }, 3000)
    }
  }
});

