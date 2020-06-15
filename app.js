Vue.component('product',{
    props:{ 
        producto: {
            type: Object,
            required: true
        }
    },
    template: `
    <div class="product">
        <div class="product-image">
            <img class="item-image" v-bind:src="producto.imagenNombre" >
        </div>
        <div class="product-info">
            <h2 >
                {{producto.nombre}} 
            </h2>
            
            <em class="textarea">{{producto.descripcion}}</em> 
            <ul>
                <li v-for="presentacion in producto.presentaciones">    
                <button v-on:click="addToCart({presentacion})"><img class="button_img" src="/iconos/agregar-a-carrito.png" alt="Agregar al carrito">Añadir</button>    
                <label>{{presentacion.cantidad}}{{presentacion.unidad}} a USD {{presentacion.precio}} </label>                                        
                </li>
            </ul>            
        </div>
    </div>
    `,
    data() {
        return {}
    },
    methods: {
        addToCart(presentacion){
            this.$emit('add-to-cart', presentacion)
        }
    }
})

var app = new Vue({
        el: '#app',
        data: {
            productosLista: {...productos},
            cart: []
        },
        methods: {
            updateCart(presentacion){
                this.cart.push(presentacion)
            }
        }    
})