<template>

<div> <p> {{ name }} | {{ cnpj }} | {{ status }}</p> </div>

</template>

<script> 
    export default {
        name: 'ClientItem',
        props: ['name', 'cnpj','status']
    }
</script>