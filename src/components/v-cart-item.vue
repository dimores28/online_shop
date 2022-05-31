<template>
    <div class="v-catr-item">
        <img class="v-catr-item__image" :src="require('../assets/images/' + cart_item_data.image)" alt="img">
        <div class="v-catr-item__info">
            <p>{{cart_item_data.name}}</p>
            <p>{{cart_item_data.price}} UAH</p>
            <p>{{cart_item_data.article}}</p>
        </div>
        <div class="v-catr-item__quantity">
            <p>Qty:</p>
            <span>
                <span class="quantity_btn" @click="decrementItem">-</span>
                    {{cart_item_data.quantity}}
                <span class="quantity_btn" @click="incrementItem">+</span>
            </span>
        </div>
        <button @click="deleteFromCart">Delete</button>
    </div>
</template>

<script>


export default {
    name: 'v-cart-item',
    props:{
        cart_item_data:{
            type: Object,
            default: ()=> ({})
        }
    },
    data: () => ({

	}),
    computed:{

    },
    methods:{

        deleteFromCart(){
           this.$emit('deleteFromCart');
        },
        decrementItem(){
            this.$emit('decrement');
        },
        incrementItem(){
            this.$emit('increment');
        }
    },
    mounted(){
        this.cart_item_data['quantity'] = 1;
    }
}
</script>

<style lang="less">
    .v-catr-item{
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 0 8px 0 #e0e0e0;
        padding: @padding * 2;
        margin-bottom: @margin * 2;
        &__image{
            max-width: 50px;
        }

        .quantity_btn{
            cursor: pointer;
            
        }
    }
</style>