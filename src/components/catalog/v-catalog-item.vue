<template>
    <div class="v-cattalog-item">
        <img class="v-cattalog-item__image" :src="require('@/assets/images/' + product_data.image)" alt="img">
        <p class="v-cattalog-item__name">{{product_data.name}}</p>
        <p class="v-cattalog-item_price">Price: {{product_data.price}} UAH</p>
        <button 
            class="v-cattalog-item_add_to_cart_btn btn" 
            @click="addToCart"
        >Add to cart</button>
    </div>
</template>

<script>
export default {
    name: 'v-cattalog-item',
    props:{
        product_data:{
            type: Object,
            default(){
                return {}
            }
        }
    },
    data:()=>({

    }),
    computed:{

    },
    methods:{
        addToCart(){
            this.$emit('addToCart',this.product_data)
        }
    }

}
</script>

<style lang="less">
    .v-cattalog-item{
        flex-basis: 25%;
        box-shadow: 0 0 8px 0 #e0e0e0;
        padding: @padding * 2;
        margin-bottom: @margin * 2;

        &__image{
            width: 100px;
        }
    }
</style>