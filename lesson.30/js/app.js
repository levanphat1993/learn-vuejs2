var let = new Vue({
   el: '#databinding',
   data: {
   },
   methods : {
   },
});
let myMixin = {
   created: function () {
      this.startmixin()
   },
   methods: {
      startmixin: function () {
         alert("Welcome  to mixin example");
      }
   }
};
var Component = Vue.extend({
   mixins: [myMixin]
})
var component = new Component();