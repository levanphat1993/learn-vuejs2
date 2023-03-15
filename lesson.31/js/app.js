var mixin = {
   methods: {
      hellworld: function () {
         console.log('In HelloWorld');
      },
      samemethod: function () {
         console.log('Mixin:Same Method');
      }
   }
};
var vm = new Vue({
   mixins: [mixin],
   methods: {
      start: function () {
         console.log('start method');
      },
      samemethod: function () {
         console.log('Main: same method');
      }
   }
});
vm.hellworld();
vm.start();
vm.samemethod();