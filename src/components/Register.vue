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
                            prepend-icon="mdi-arrow-left"
                        >        
                            Voltar 
                        </v-btn> 
                    </router-link>
                    
                </v-col>
                <v-divider></v-divider>
            </v-row>
            <v-row>
                <v-col md="6" sm="12">
                    <v-snackbar
                        v-model="snackbarError"
                        :timeout="2000"
                        color="error"
                    >
                        <p> Houve um erro no seu cadastro, tente novamente mais tarde </p>

                    </v-snackbar>
                    <v-snackbar
                        v-model="snackbarSuccess"
                        :timeout="2000"
                        color="success"
                    >
                        <p> Cadastro concluído! </p>

                    </v-snackbar>
                    <form @submit.prevent="submit">
                        <v-text-field
                            v-model="name"
                            label="Nome"
                            data-testid="name"
                            required
                        ></v-text-field>

                        <v-text-field
                            v-model="cnpj"
                            maxlength="14"
                            label="CNPJ"
                            data-testid="cnpj"
                            required
                        ></v-text-field>

                        <v-select
                            v-model="status"
                            :items="['Ativo','Inativo']"
                            label="Status"
                            data-testid="status"
                            required
                        ></v-select>
                        <v-row>
                            <v-col class="d-flex justify-end">
                                <v-btn
                                    class="me-4"
                                    color="green"
                                    type="submit"
                                    data-testid="salvar-btn"
                                >
                                    Salvar
                                </v-btn>
                            </v-col>
                        </v-row>
                        

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
                status: 'Ativo',

                loading: true,
                snackbarError: false,
                snackbarSuccess: false,
            }
        },
        methods: {
            submit(){
                this.snackbarSuccess = true
                //codigo para enviar cadastro para a API
            }
        }
    }
</script>