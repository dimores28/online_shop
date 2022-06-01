<template>
    <div class="v-cattalog-item">

        <v-popup
          v-if="isInfoPopupVisible"
          @closePopup="closeInfoPopup"
          @rightButtonAction="addToCart"
          rightBtnTitle= "Add to cart"
          :popupTitle="product_data.name"
        >
            <img class="v-cattalog-item__image" :src="require('@/assets/images/' + product_data.image)" alt="img">
            <div>
                <p class="v-cattalog-item__name">{{product_data.name}}</p>
                <p class="v-cattalog-item_price">Price: {{product_data.price}} UAH</p>
                <p class="v-cattalog-item_price">{{product_data.category}}</p>
            </div>
        </v-popup>

        <img class="v-cattalog-item__image" :src="require('@/assets/images/' + product_data.image)" alt="img">
        <p class="v-cattalog-item__name">{{product_data.name}}</p>
        <p class="v-cattalog-item_price">Price: {{product_data.price}} UAH</p>
        <button class="v-cattalog-item__show-info"
        @click="showPopupInfo"
        >
            Show info
        </button>
        <button 
            class="v-cattalog-item_add_to_cart_btn btn" 
            @click="addToCart"
        >Add to cart</button>
    </div>
</template>

<script>

import vPopup from '@/components/popup/v-popup.vue'

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
    components:{
        vPopup
    },
    data:()=>({
        isInfoPopupVisible: false,
    }),
    computed:{

    },
    methods:{
        addToCart(){
            this.$emit('addToCart',this.product_data)
        },
        showPopupInfo(){
            this.isInfoPopupVisible = true;
        },
        closeInfoPopup(){
            this.isInfoPopupVisible = false;
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