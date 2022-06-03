<template>
    <div class="v-main-wrapper">
        <v-header/>
        <keep-aliv>
            <router-view></router-view>
        </keep-aliv>
    </div>
</template>

<script>
import vHeader from './layouts/v-header.vue'

export default {
    name: 'v-main-wrapper',
    components:{
        vHeader
    },
    props:{

    },
    data: ()=>({

    }),
    computed:{

    }
}
</script>

<style lang="less">
    .v-main-wrapper{
        margin: 0 auto;
    }

.btn{
    padding: @padding @padding*2;
    background: @greenbg;
    color: #fff;
    border: 0;
    border-radius: @radius;
}
</style>
