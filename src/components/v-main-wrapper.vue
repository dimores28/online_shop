<template>
    <div class="v-main-wrapper">
        <keep-aliv>
            <router-view></router-view>
        </keep-aliv>
    </div>
</template>

<script>


export default {
    name: 'v-main-wrapper',
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
        max-width: 900px;
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
