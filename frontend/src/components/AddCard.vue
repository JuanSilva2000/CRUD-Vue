<script setup>
    import { reactive,ref } from 'vue';
    import { createNewUser } from '../hooks/useFetch';

    const dialog = ref(false);


    const dataForm = reactive({
        nombre: '',
        email: '',
        edad: ''
    });
    
    const createUser = () => {
        const success =  createNewUser(dataForm);

        if (success) {
            dataForm.nombre = '';
            dataForm.email = '';
            dataForm.edad = '';
        }else {
            console.log('Error al crear usuario');
        }
        dialog.value = false;
    }
</script>

<template>
    <button class="btn-edit" @click="dialog = true">Agregar</button>

    <v-dialog v-model="dialog" width="auto">
            <form class="add-card-container" @submit.prevent="createUser">
                <h2 class="title">Agregar Usuario</h2>   
                <input type="text" placeholder="Nombre" nombre="nombre" v-model="dataForm.nombre"/>
                <input type="text" placeholder="Correo" nombre="email" v-model="dataForm.email"/>
                <input type="number" placeholder="Edad" nombre="edad" v-model="dataForm.edad"/>
                <div class="container-buttons">
                    <v-btn class="btn-cancel" text @click="dialog = false">Cancelar</v-btn>
                    <v-btn class="btn-add" type="submit">
                        Agregar
                    </v-btn>
                </div>
            </form>
    </v-dialog>
</template>

<style scoped>
    .add-card-container {
        background-color: white;
        border-radius: 10px;
        padding: 20px 25px;
        margin: 10px;
        width: 500px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        color: #005E81;
    }
 
    .add-card-container input {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        margin: 5px 0;
        padding: 10px;
        border-radius: 10px;
        width: 100%;
        /* border: 1px solid #70BA44; */
        background-color: #EBF6F4;
        color: #007C9F;
        font-weight: 520;
        border: none;
    }

    .add-card-container input::placeholder {
        color: #007C9F;
    }
    
    .add-card-container input:focus {
        border: none;
        outline: none; 
    }

    .title {
        font-size: 1.5rem;
        font-weight: bolder;
        margin-bottom: 10px;
    }
    
    .container-buttons {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        /* border: 1px solid red; */
        margin-top: 5px;
        padding: 5px;
    }
    
    .btn-add {
        background-color: #70BA44;
        color: #005E81;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        border: none;
        min-height: max-content;
        padding: 10px;
        color: #FFFFFF;
        border-radius: 10px;
        cursor: pointer;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        font-weight: bolder;
        width: 40%;
    }
    
    .btn-cancel {
        background-color: #FFFFFF;
        border: 1px solid #70BA44;
        color: #70BA44;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        border: none;
        min-height: max-content;
        padding: 10px;
        border-radius: 10px;
        cursor: pointer;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        font-weight: bolder;
        width: 40%;
    }
    
    .btn-add:hover {
        background-color: #005E81;
    }

    .btn-edit{
        background-color: #FFFFFF;
        border-radius: 10px;
        border: 1px solid #70BA44;
        color: #70BA44;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        min-height: max-content;
        padding: 10px;
        margin: 10px;
        font-weight: bolder;
        cursor: pointer;
        width: fit-content;
        height: 50px;
    }

    @media screen and (max-width: 600px) {
        .add-card-container {
            width: 300px;
        }

        .btn-add{
            width: fit-content;
        }

        .btn-cancel{
            width: fit-content;
        }
    }
</style>