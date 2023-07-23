<template>
     <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">My Note</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter note">
   
  </div>
    
  <button type="submit" class="btn btn-primary" @click.prevent="sendNote">Submit</button>
  <p class="color:red">{{ feedback }} </p>
</form>
</template>
<script lang="ts" setup>
import {ref} from 'vue';
import useAuth from '@/store/auth';
import router from '@/router';
const store =useAuth();
const note=ref('');
const feedback=ref('');
const sendNote=async ()=>{
    feedback.value="Enviando nota..."
    const response= await store.createNote(note.value);
    if(response==false){
        feedback.value="Error al crear la nota"
    }else{
      router.push({name:'list'});
    }
}
</script>