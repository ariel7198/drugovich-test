<template>
    <v-container>
        <v-responsive>
            <v-row class="justify-center"> 
                <v-col>
                    <h1> 
                        <v-icon
                            size="large"
                            color="teal-darken-2"
                            icon="mdi-email"
                        ></v-icon>
                        Listagem de clientes
                    </h1>
                </v-col>
                <v-col>
                    <router-link to="/cadastro"> 
                        <v-btn> + NOVO </v-btn> 
                    </router-link>
                    
                </v-col>
            </v-row>
            
            <template v-for="client in clients">
                <client-item :name="client.name" :cnpj="client.cnpj" :status="client.status"/>
            </template> 

        </v-responsive>
    </v-container>
</template>

<script>
import ClientItem from './ClientItem.vue';

import axios from "axios";

    export default {
        name: 'Cadastro',

        components: {
            ClientItem
        },

        data() {
            return {
                apiURL: 'https://demo4529396.mockable.io/clients',
                clients: ''
            }
        },

        created() {
            axios  
                .get(this.apiURL)
                .then(response => this.clients = response.data)

                .catch((error) => console.log("Erro na requisição: " + error)) 
        }
    }
</script>