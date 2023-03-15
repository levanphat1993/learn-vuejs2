let vm = new Vue({
   el: '#databinding',
   data: {
      view: 'component1'
   },
   components: {
      'component1': {
         template: '<div><span style = "font-size:25;color:red;">Animation on Components</span></div>'
      }
   }
});