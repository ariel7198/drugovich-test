<template>
    <v-container>
        <v-responsive>
            <v-row justify="space-between p-5"> 
                <v-col class="d-flex justify-start">
                    <h1 class="font-weight-regular"> 
                        <v-icon
                            size="small"
                            color="black"
                            icon="mdi-account-outline"
                        ></v-icon>
                        Listagem de clientes
                    </h1>
                </v-col>
                <v-col class="d-flex justify-end">
                    <router-link to="/cadastro"> 
                        <v-btn 
                            rounded="lg" 
                            elevation="0" 
                            size="large"
                            color="blue"
                            prepend-icon="mdi-plus"
                        >        
                            NOVO 
                        </v-btn> 
                    </router-link>
                    
                </v-col>
                <v-divider></v-divider>
            </v-row>
            <v-row>
                <v-col>
                    <template v-for="client in clients">
                        <client-item :name="client.name" :cnpj="client.cnpj" :status="client.status"/>
                    </template> 
                </v-col>
            </v-row>
            

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
            console.log("created")
            axios  
                .get(this.apiURL)
                .then(response => this.clients = response.data)

                .catch((error) => console.log("Erro na requisição: " + error)) 
        }
    }
</script>