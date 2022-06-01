<template>
  <vMainWrapper></vMainWrapper>
</template>

<script>
import vMainWrapper from './components/v-main-wrapper.vue'

export default {
  name: 'App',
  components: {
      vMainWrapper
  },
  data:()=>({
  }),
  methods:{
  },
  mounted(){
    window.addEventListener('resize', function(){
      if(window.innerWidth > 767){
        console.log('Decktop');
      }
      else{
        console.log('Mobile');
      }
    });
  }
}
</script>

<style lang="less">
img{
  width: 100;
  height: auto;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
