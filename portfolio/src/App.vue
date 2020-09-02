<script src="https://www.gstatic.com/firebasejs/6.1.1/firebase.js"></script>

<template>
  <div id="app">
    <div>
      <label>Name:</label>
      <input type="text" v-model="name"/>
      <button @click="submitName()">Add</button>
    </div>
    <div>
        <ul>
          <li v-for="(personName,index) in firebase.names" v-bind:key="index"> {{ personName.name }}</li>
          <!-- <li v-for="personName of names" v-bind:key="personName['.key']"> {{ personName }}</li> -->
        </ul>
    </div>
  </div>
</template>

<script>
import {namesRef} from './firebase'

export default {
  name: 'app',
  data () {

    return {
      name:'Paul',
    }
  },
    firebase:{
            names: namesRef

    },
  methods:{
    submitName(){
      namesRef.push({ name: this.name, edit: false});
    }
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
