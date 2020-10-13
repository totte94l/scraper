var app = new Vue({
    el: '#app',
    data: {
      subjects: [],
      limit: 40,
      isLoading: true
    },
    methods: {
        getSubjects() {
            fetch('/flba/newsubjects')
            .then(response => response.json())
            .then(json => {
              this.subjects = json;
              this.isLoading = false;
          });
        }
    },
    computed:{
      computedObj(){
        return this.limit ? this.subjects.slice(0,this.limit) : this.subjects
      }
    },
    created () {
      this.getSubjects();
  }
})