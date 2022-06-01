<template>
  <vMainWrapper></vMainWrapper>
</template>

<script>
import vMainWrapper from './components/v-main-wrapper.vue'
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'App',
  components: {
      vMainWrapper
  },
  data:()=>({
  }),
  computed:{
    ...mapGetters(['IS_MOBILE', 'IS_DESKTOP']),
  },
  methods:{
    ...mapActions(['SET_MOBILE', 'SET_DESKTOP']),
  },
  mounted(){
    let cont = this;
    window.addEventListener('resize', function(){
      if(window.innerWidth > 767){
        cont.SET_DESKTOP();
      }
      else{
        cont.SET_MOBILE();
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
