<template>
  <button :class=theme >{{msg}}</button>
</template>

<script>
import PaymentStore from '@/store/Payment'
export default {
    props: {
        msg: String,
        theme: String,
        paymentMethod: String,
    },
    data(){
        return{
            addIndex : 0,
        }
    },
    
    methods:{
        addForm(){
            PaymentStore.dispatch('chageAddIndex' , this.addIndex)
            this.addIndex = PokemonStore.getters.getAddIndex
        },
    }


}
</script>

<style>
.black{
    color: white;
    background-color: black;
}

</style>