<template>
    <div class="v-catalog">
        <router-link :to="{name: 'cart'}">
            <div class="v-catalog__link_to_cart"> Cart: {{CART.length}}</div>
        </router-link>

        <h1>Catalog</h1>
        <v-select
            :selected="selected"
            :options="categories"
            @select="sortByCategories"
        >
        </v-select>
        <div class="v-catalog__list">
            <vCatalogItem v-for="producrt in flteredProducts" 
            :key="producrt.article"
            :product_data="producrt"
            @addToCart="addToCart"
            />

        </div>
    </div>
</template>

<script>
import vCatalogItem from './v-catalog-item.vue'
import {mapActions, mapGetters} from 'vuex'
import vSelect from '@/components/select/v-select.vue'

export default {
    name: 'v-catalog',
    components:{
        vCatalogItem,
        vSelect
    },
    data:()=>({
        categories:[
            {name:'Все', value: 'ALL'},
            {name:'Мужские', value: 'м'},
            {name:'Женские', value: 'ж'},
        ],
        selected: 'Все',
        sortedProducts: []
    }),
    computed:{
        ...mapGetters(['PRODUCTS', 'CART']),
        flteredProducts(){
            if(this.sortedProducts.length){
               return this.sortedProducts;
            }
            else{
               return this.PRODUCTS;
            }
        },
    },
    methods:{
        ...mapActions(['GET_PRODUCTS_FROM_API', 'ADD_TO_CART']),
        addToCart(data){
            this.ADD_TO_CART(data);
        },
        sortByCategories(category){
            this.sortedProducts = [];
            let vm =this;

            this.PRODUCTS.map(function(item){
                if(item.category === category.name){
                    vm.sortedProducts.push(item); 
                }
            });

            this.selected = category.name;
        }
    },
     mounted(){
        this.GET_PRODUCTS_FROM_API()
        .then((response)=>{
            if(response.data){
                console.log('Data arrived!');
            }
        })
    }
}
</script>

<style lang="less">
    .v-catalog{
        &__list{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
        }

        &__link_to_cart{
            position: absolute;
            top: 10px;
            right: 10px;
            padding: @padding * 2;
            border: solid 1px #aeaeae;
        }
    }
</style>