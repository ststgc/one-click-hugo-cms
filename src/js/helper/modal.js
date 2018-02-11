import Vue from "vue";

Vue.component('modal', {
  template: '#modal-template'
})

const modal1 = new Vue({
  el: '#modal1',
  delimiters: ["((","))"],
  data: { 
    showModal: false,
  }
})

const modal2 = new Vue({
  el: '#modal2',
  delimiters: ["((","))"],
  data: { 
    showModal: false,
  }
})