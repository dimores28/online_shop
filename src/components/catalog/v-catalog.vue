<template>
    <div class="v-catalog">
        <router-link :to="{name: 'cart'}">
            <div class="v-catalog__link_to_cart"> Cart: {{CART.length}}</div>
        </router-link>

        <h1>Catalog</h1>
        <div class="filters">
            <v-select
                :selected="selected"
                :options="categories"
                @select="sortByCategories"
                :isExpended="IS_DESKTOP"
            >
            </v-select>

            <div class="range-slider">
                <input type="range" min="0" max="10000" step="100" 
                v-model.number="minPrice"
                @change="setRangeSlider"
                >
                <input type="range" min="0" max="10000" step="100" 
                v-model.number="maxPrice"
                @change="setRangeSlider"
                >
            </div>

            <div class="range-values">
                <p>Min: {{minPrice}}</p>
                <p>Max: {{maxPrice}}</p>
            </div>
        </div>

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
        sortedProducts: [],
        minPrice: 0,
        maxPrice: 10000,
    }),
    computed:{
        ...mapGetters([
            'PRODUCTS', 
            'CART',
            'IS_MOBILE', 
            'IS_DESKTOP',
            'SEARCH_VALUE',
            ]),
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
            const vm = this;
            this.sortedProducts = [...this.PRODUCTS]
            this.sortedProducts = this.sortedProducts.filter(function (item) {
            return item.price >= vm.minPrice && item.price <= vm.maxPrice
            })
            if (category) {
                this.sortedProducts = this.sortedProducts.filter(function (e) {
                    vm.selected = category.name;
                    return e.category === category.name
                })
            }
        },
        setRangeSlider(){
            if(this.minPrice > this.maxPrice){
               let temp = this.maxPrice;
               this.maxPrice = this.minPrice; 
               this.minPrice = temp;
            }

            this.sortByCategories();
        },
        sortedProductsBySearchValue(value){
            this.sortedProducts = [...this.PRODUCTS]
            if(value){
                this.sortedProducts = this.sortedProducts.filter(function(item){
                     return item.name.toLowerCase().includes(value.toLowerCase());
                });
            }else{
                this.sortedProducts = this.PRODUCTS;
            }
            
        }
    },
     mounted(){
        this.GET_PRODUCTS_FROM_API()
        .then((response)=>{
            if(response.data){
                this.sortByCategories();
                this.sortedProductsBySearchValue(this.SEARCH_VALUE);
            }
        })
    },
    watch:{
        SEARCH_VALUE(){
            this.sortedProductsBySearchValue(this.SEARCH_VALUE);
        }
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
            top: 80px;
            right: 10px;
            padding: @padding * 2;
            border: solid 1px #aeaeae;
        }
    }

    .filters {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .range-slider{
        width: 200px;
        margin: auto 16px;
        text-align: center;
        position: relative;
    }

    .range-slider svg, 
    .range-slider input[type="range"]{
        position: absolute;
        left: 20px;
        bottom: 0;
    }

    input[type=range]::-webkit-slider-thumb{
        z-index: 2;
        position: relative;
        top: 2px;
        margin-top: -5px;
    }

    .range-values {
        width: 100px;
    }

</style>