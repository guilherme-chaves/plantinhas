<template>
  <ion-page>
     <ion-content :fullscreen="true"> 
     <ion-grid>
     <ion-row>
     <ion-col size="12" size-sm>
     <div id="container">
        <strong>Bem vindo ao app de plantinhas</strong>
     </div>
     </ion-col>
     <ion-col size="12" size-sm>
     <div id="input">
         <ion-input type="email" placeholder="nome de usuario"></ion-input>
     </div>
     </ion-col>
     <ion-col size="12" size-sm>
     <div id="input">
         <ion-input type="password" placeholder="senha"></ion-input>
     </div>
     </ion-col>
     </ion-row>
     </ion-grid>
    </ion-content>

    <ion-footer>
      <ion-button expand="block" color="primary" shape="round" class="botao" @click="login">
        <ion-spinner v-if="loading"></ion-spinner>
        <span v-else>Entrar</span>
      </ion-button>
    </ion-footer>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage, IonGrid, IonRow, IonCol, IonInput, IonFooter, IonButton, IonSpinner } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Login',
  data() {
    return {
      loading: false
    }
  },
  components: {
    IonContent,
    IonPage,
    IonGrid,
    IonRow,
    IonCol,
    IonInput,
    IonFooter,
    IonButton,
    IonSpinner
  },
  methods: {
    async login() {
      this.loading = true;
      setTimeout(() => {
        console.log("Carregando...")
        this.loading = false;
      }, 2000);
    }
  }
});
</script>

<style scoped>
ion-content{
  --ion-background-color: white;
}

ion-row{
    margin-top: 10%;
}

#container {
  text-align: center;
}

#container strong {
  font-size: 20px;
  line-height: 26px;
  color: #2699fb;
}

#input{
    margin-top: 5%;
}

#input ion-input { 
    border: 1px #2699fb solid; 
    border-radius: 2em;
    color: #2699fb;
}

.botao{
  margin: 1em;
}
</style>