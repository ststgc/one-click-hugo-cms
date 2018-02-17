import Vue from "vue";
import Vuelidate from 'vuelidate';
import VueRouter from 'vue-router';
import questions from "./questions";
import plans from "./plans";

import { required, email } from 'vuelidate/lib/validators';
Vue.use(Vuelidate)

const touchMap = new WeakMap()




// TODO: Scripts for Router 

// import routes from './routes';
// Vue.use(VueRouter)

// const router = new VueRouter({
//   mode: 'history',
//   routes
// });

const subscribe = new Vue({
  el: '#subscribe',
  // router,
  delimiters: ["((","))"],
  data: { 
    questions: questions,
    plans: plans,
    plan_selected_url: '',
    plan_selected_name: '',

    // Validator
    name: '',
    email: '',
    show_error: false,

    // Store current question index
    questionIndex: 0,
    plan_scores: [],

  },

  validations: {
    name: {
      required,
    },
    email: {
      required,
      email
    }
  },

  filters: {
    moneyDelimiter: function(value) {
      return parseInt(value).toLocaleString();
    },
  },

  // The view will trigger these methods on click
  methods: {
    submit: function (e) {
      e.preventDefault();
      if (!this.$v.email.$invalid && !this.$v.name.$invalid) {
        let url = document.getElementById("form_select_plan").dataset.plan
        window.location.href = url;
      }
    },
    delayTouch ($v) {
      $v.$reset()
      if (touchMap.has($v)) {
        clearTimeout(touchMap.get($v))
      }
      touchMap.set($v, setTimeout($v.$touch, 500))
    },

    // Go to next question
    next: function(){
      this.questionIndex++;
    },


    which_plan_and_next: function(plan){
      this.plan_selected_url = plan.url;
      this.plan_selected_name = plan.id;
      this.questionIndex++;
    }

  },
  computed: {
    total: function(){
      if (!this.plan_scores) {
        return 0;
      }
      return this.plan_scores.reduce(function (total, score) {
        return total + score;
      }, 0);
    },
  },
})



