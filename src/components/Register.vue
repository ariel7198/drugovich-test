<template>
    <v-container>
        <v-responsive>
            <v-row>
                <v-col class="d-flex justify-start">
                    <h1 class="font-weight-regular"> 
                        <v-icon
                            size="small"
                            color="black"
                            icon="mdi-account-outline"
                        ></v-icon>
                        Novo Cliente
                    </h1>
                </v-col>
                <v-col class="d-flex justify-end">
                    <router-link to="/"> 
                        <v-btn 
                            rounded="lg" 
                            elevation="0" 
                            size="large"
                            color="blue"
                            prepend-icon="mdi-plus"
                        >        
                            Voltar 
                        </v-btn> 
                    </router-link>
                    
                </v-col>
                <v-divider></v-divider>
            </v-row>
            <v-row>
                <v-col md="6" sm="12">
                    <form @submit.prevent="submit">
                        <v-text-field
                            v-model="name"
                            label="Nome"
                        ></v-text-field>

                        <v-text-field
                            v-model="cnpj"
                            label="CNPJ"
                        ></v-text-field>

                        <v-select
                            v-model="status"
                            :items="['Ativo','Inativo']"
                            label="Status"
                        ></v-select>

                        <v-btn
                            class="me-4"
                            color="green"
                            type="submit"
                        >
                            Salvar
                        </v-btn>

                    </form>
                </v-col>
            </v-row>
        </v-responsive>
    </v-container>
</template>

<script>
    export default {
        name: 'Register',
        
        data(){
            return{
                name: '',
                cnpj: '',
                status: false
            }
        },
        methods: {
            submit(){
                //codigo para enviar cadastro para a API
            }
        }
    }
</script>