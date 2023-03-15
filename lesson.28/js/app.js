let vm = new Vue({
    el: '#databinding',
    data: {
       name : ""
    },
    filters : {
       countletters : function(value) {
          return value.length;
       }
    }
 });