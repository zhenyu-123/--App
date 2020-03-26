<template>
    <div>
        <headers></headers>
        <hot></hot>
        <Letter></Letter>
    </div>
</template>

<script>
import headers from './citypages/Header.vue';
import hot from './citypages/Hot.vue';
import Letter from './citypages/Letter.vue';
export default {
    data(){
        return{

        }
    },
    components:{
        headers,
        hot,
        Letter
    }
    
}
</script>
<style lang='scss' scoped>

</style>