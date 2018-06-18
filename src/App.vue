<template>
  <div id="app">
    <Navbar />
    <div class="container">
        <div class="center">
           <router-view/>
        </div>
  </div> 
  </div>
</template>

<script>
import Navbar from './components/Navbar';
export default {
  name: 'App',
  components: {
    Navbar,
  },
   methods: {
    
   }
};
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c5032;
  //margin-top: 60px;
  align-items: center;
}
</style>
