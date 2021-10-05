<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld :msg="message"/>
  <ProductList/>
  <hr>
  <ShoppingCart/>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import ProductList from '@/components/ProductList.vue'
import ShoppingCart from '@/components/ShoppingCart.vue'

export default {
    name: 'App',
    components: {
        HelloWorld,
        ProductList,
        ShoppingCart
    },
    data(){
        return{
            message: {msg: 'Hello everybody', from: 'from Shopping Store!'}
        }
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1{
  color: green;
}
</style>
