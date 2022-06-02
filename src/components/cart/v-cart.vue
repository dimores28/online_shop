<template>
    <div class="v-cart">
        <router-link :to="{name: 'catalog'}">
            <div class="v-cart__link_to_cart">Catalog</div>
        </router-link>
        <h2>Cart</h2>
        <p v-if="!CART.length">There are no products in cart...</p>
        <v-cart-item
            v-for="(item, index) in CART"
            :key="item.article"
            :cart_item_data="item"
            @deleteFromCart="deleteFromCart(index)"
            @increment="increment(index)"
            @decrement="decrement(index)"
        />
    </div>
    <div class="v-cart__total">
        <p class="v-cart__total_name">Total:</p>
        <p>{{$filters.formattedPrice($filters.toFix(cartTotalCost))}} </p>
    </div>
</template>

<script>
import vCartItem from './v-cart-item.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'v-cart',
    components:{
        vCartItem
    },
    props:{
        cart_data:{
            type: Array,
        }
    },
    computed:{
        ...mapGetters(['CART']),
        cartTotalCost(){
            let result = [];

            if(!this.CART.length) return 0;
                 

            for(let item of this.CART){
              result.push(item.price * item.quantity);
            }

            result = result.reduce(function(sum, el){
                 return sum + el;
            });

            return result;
        },
    },
    methods:{
        ...mapActions(['DELETE_FROM_CART','INCREMENT_CART_ITEM','DECREMENT_CART_ITEM']),
        deleteFromCart(index){
            this.DELETE_FROM_CART(index);
        },
        increment(index){
            this.INCREMENT_CART_ITEM(index)
        },
        decrement(index){
            this.DECREMENT_CART_ITEM(index);
        },
    },
}
</script>

<style lang="less">
    .v-cart{
        margin-bottom: 100px;

        &__link_to_cart{
                position: absolute;
                top: 10px;
                right: 10px;
                padding: @padding * 2;
                border: solid 1px #aeaeae;
        }

        &__total{
            position: fixed;
            bottom: 0;
            right: 0;
            left: 0;
            padding: @padding * 2 @padding * 3;
            display: flex;
            justify-content: center;
            background: @greenbg;
            color: #fff;
            font-size: 20px;

            &_name{
                margin-right: @margin * 2;
            }
        }

    }
</style>