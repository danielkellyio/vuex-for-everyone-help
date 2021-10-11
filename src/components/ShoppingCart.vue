<template>
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        <li v-for="product in products" :key="product">
          {{product.title}} - {{product.price}} - {{product.quantity}}
        </li>
      </ul>
      <p>Total: {{formattedTotal}}</p>
      <button @click="checkout">Checkout</button>
      <p v-if="checkoutStatus">{{checkoutStatus}}</p>
    </div>
</template>
<script>
import {mapState, mapGetters, mapActions} from 'vuex'
import {currency} from '@/currency'
export default {
    computed: {
        ...mapGetters('cart', {
            products: 'cartProducts',
            total: 'cartTotal'
        }),
        ...mapState('cart', {
            checkoutStatus: state => state.checkoutStatus
        }),
        formattedTotal(){
            return currency(this.total)
        }
    },
    methods: {
    //   ...mapActions(['checkout'])
        ...mapActions('cart', ['checkout'])
    }
}
</script>
<style scoped>
</style>