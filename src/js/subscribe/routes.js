import PageBottle from './components/bottle.vue';
import PageFrequency from './components/frequency.vue';
// import PagePlan from './components/plan';
// import PageRegister from './components/register';
import questions from "./questions.json";

export default [
  {
    path: '/subscribe/:id',
    component: PageBottle,
    name: 'bottle',
    props: {
      hoge: true
    }
  },
  {
    path: '/subscribe/frequency',
    component: PageFrequency
  }
]
