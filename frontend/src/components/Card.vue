<script setup>
    import { ref, reactive } from 'vue';
    import img from '../../public/user.png';
    import { deleteUserFetch, updateUserFetch } from '../hooks/useFetch';

    const dialog = ref(false);

    const props = defineProps({
        usuario: Object
    });

    const dataupdate = reactive({
        nombre: props.usuario.nombre,
        email: props.usuario.email,
        edad: props.usuario.edad
    });

    const deleteUser = () => {
        deleteUserFetch(props.usuario.id);
    }

    const updateUser = () => {
        updateUserFetch(props.usuario.id, dataupdate)
        dialog.value = false;
    }

</script>

<template>
  <div class="card-container">
    <img :src="img" />
    <h3>{{ usuario.nombre }}</h3>
    <p>{{ usuario.email }}</p>
    <h3>{{ usuario.edad }} años</h3>
    <div class="button-container">
      <button class="btn-edit" @click="dialog = true">Editar</button>
      <button class="btn-delete" @click = "deleteUser">Eliminar</button>
    </div>
  </div>

  <v-dialog v-model="dialog" width="auto">
    <div class="modal-container">
        <v-card max-width="400" prepend-icon="mdi-update" title="Actualizar Información" class="title-update">
        
        <v-card-text>
            <input placeholder="Nombre" type="text" v-model="dataupdate.nombre"  class="update-input"></input>
            <input placeholder="Correo" type="text" v-model="dataupdate.email" class="update-input"></input>
            <input placeholder="Edad" type="number" v-model="dataupdate.edad" class="update-input"></input>
        </v-card-text>

        <template v-slot:actions>
            <div class="dialog-button-container">
            <v-btn class="btn-cancel" text @click="dialog = false">Cancelar</v-btn>
            <v-btn class="btn-update" text @click="updateUser">Actualizar</v-btn>
            </div>
        </template>
        </v-card>
    </div>
  </v-dialog>
</template>

<style scoped>
  .card-container {
    border: 5px solid black;
    background-color: #F1FAFA;
    border-radius: 10px;
    padding: 20px 15px;
    margin: 10px;
    max-width: 240px;
    min-width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #005E81;
  }

  .card-container img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  .card-container h3, .card-container p {
    margin: 5px 0;
  }

  .button-container {
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-top: 15px;
  }

  .btn-edit {
    background-color: #FFFFFF;
    min-width: 45%;
    border: 1px solid #70BA44;
    color: #70BA44;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    min-height: max-content;
    padding: 10px;
    border-radius: 10px;
    font-weight: bolder;
    cursor: pointer;
  }

  .btn-delete {
    background-color: #70BA44;
    min-width: 45%;
    color: #005E81;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    border: none;
    min-height: max-content;
    padding: 10px;
    color: #FFFFFF;
    border-radius: 10px;
    font-weight: bolder;
    cursor: pointer;
  }

  .btn-edit:hover {
    border: 1px solid #005E81;
    color: #005E81;
  }

  .btn-delete:hover {
    background-color: #005E81;
  }

  .title-update {
    color: #005E81;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: bolder;
    border-radius: 10px;
    text-align: center;
  }

  .modal-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  .update-input {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    margin: 5px 0;
    padding: 10px;
    border-radius: 10px;
    width: 100%;
    background-color: #EBF6F4;
    color: #007C9F;
    font-weight: 520;
    border: none;
    min-height: max-content;
  }

  .update-input::placeholder {
    color: #007C9F;
  }

  .update-input:focus {
    border: none;
    outline: none;
  }

  .dialog-button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: -30px;
    margin-left: 15%;
  }

  .btn-cancel {
    background-color: #70BA44;
    color: #FFFFFF;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    border: none;
    padding: 10px;
    border-radius: 10px;
    font-weight: bolder;
    cursor: pointer;
  }

  .btn-update {
    background-color: #70BA44;
    color: #FFFFFF;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    border: none;
    padding: 10px;
    border-radius: 10px;
    font-weight: bolder;
    cursor: pointer;
  }

  .btn-cancel:hover, .btn-update:hover {
    background-color: #005E81;
  }
</style>