<template>
   <div class="v-header">
      <router-link :to="{name: 'mainPage'}">
         <img src="../../assets/logo.png" alt="logo">
      </router-link>
      

      <div class="search-field">
            <input type="text"
            v-model="searchValue"
            @keyup="searchPressToEnterKey($event, searchValue)"
            />
            <button class="search_btn" @click="search(searchValue)">
               <i class="material-icons">search</i>
            </button>
            <button class="search_btn" @click="clearSearchField">
               <i class="material-icons">cancel</i>
            </button>
      </div>
      
   </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
   name: 'v-header',
   props:{

   },
   data:()=>({
      searchValue: '',

   }),
   computed:{
      ...mapGetters(['SEARCH_VALUE']),
   },
   methods:{
      ...mapActions(['GET_SEARCH_VALUE_TO_VUEX']),
      search(value){
         this.GET_SEARCH_VALUE_TO_VUEX(value);
         if(this.$route.path !== '/catalog'){
            this.$router.push('/catalog');
         }
         
      },
      searchPressToEnterKey(e,value){
          if (e.key === 'Enter' || e.keyCode === 13) {
             this.search(value);
         }
      },
      clearSearchField(){
         this.searchValue = '';
         this.GET_SEARCH_VALUE_TO_VUEX();
         if(this.$route.path !== '/catalog'){
            this.$router.push('/catalog');
         }
         
      }
   }
}
</script>

<style lang="less">
.v-header{
   display: flex;
   justify-content: space-between;
   align-items: center;
   background: @greenbg;
   padding: 16px;
   position: fixed;
   width: 100%;
   top: 0;
   left: 0;

   img{
      width: 50px;
   }

   .search-field{
      padding: 16px;
      position: relative;
      right: 200px;
      display: flex;
      justify-content: center;
      align-items: center;
   }

   .search_btn{
      margin-left: 16px;
      background: transparent;
      border: none;

      
   }

   .search_btn i::hover{
         cursor: pointer;
   }

   
}

</style>