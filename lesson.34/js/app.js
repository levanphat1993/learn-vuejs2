let vm = new Vue({
   el: '#app',
   data: {
      counter: 1
   }
});
vm.$watch('counter', function(nval, oval) {
   alert('Counter is incremented :' + oval + ' to ' + nval + '!');
});
setTimeout(
   function(){
      vm.counter = 20;
   },2000
);