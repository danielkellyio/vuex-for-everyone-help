import { createStore } from 'vuex'
// import shop from '@/api/shop'
// import actions from './actions'
import products from './modules/products'
import cart from './modules/cart'



export default createStore({
    state: { // = data
        
    },
    getters: { // = computed properties
        // productsCount(){}  return a products array like a computed property
       
    },
    mutations: { // for setting and updating the state of store array
        
    },
    actions: {

    },
    modules: {
        cart,
        products
    },
})
