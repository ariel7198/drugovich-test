<template>
    <div> 
        <v-card flat class="pa-3">
            <v-row>
                <v-col cols="12" md="8" sm="12" class="d-flex align-center justify-start">
                    <h3 class="mx-3 font-weight-medium"> {{ name }} </h3>
                    <p> {{ cnpj }} </p>
                </v-col>
                <v-col cols="12" md="2" sm="6" class="d-flex align-center justify-start">
                    
                    <template v-if="status==='Inativo'"> 
                        <v-badge
                            color="red-darken-1"
                            class="ma-2"
                            inline
                            >
                        </v-badge>
                        Inativo
                    </template> 
                    <template v-if="status==='Ativo'"> 
                        <v-badge
                            color="green-lighten-1"
                            class="ma-2"
                            inline
                            >
                        </v-badge>
                        Ativo
                    </template> 
                </v-col>
                <v-col cols="12" md="2" sm="6" class="d-flex align-center justify-end">
                    <v-btn 
                        rounded="lg" 
                        elevation="0" 
                        size="large"
                        color="orange-darken-2"
                        class="text-white"
                    >        
                        EDITAR 
                    </v-btn>
                </v-col>
            </v-row>
        </v-card>

    </div>
</template>

<script> 
    export default {
        name: 'ClientItem',
        props: ['name', 'cnpj','status'],

        data() {
            return {

            }
        },

        methods: {
            
        },

        computed: {
            
        }
    }
</script>