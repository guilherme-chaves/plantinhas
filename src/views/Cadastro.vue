<template>
  <ion-page>
     <ion-content :fullscreen="true"> 
     <ion-grid>
     <ion-row>
     <ion-col size="12" size-sm>
     <div id="container">
        <strong>Crie uma conta</strong>
     </div>
     </ion-col>
     <ion-col size="12" size-sm>
     <div id="texto">
        Para criar sua conta no app de plantinhas vamos precisar de alumas informações 
     </div>
     </ion-col>
     <ion-col size="12" size-sm>
     <div id="input">
         <ion-input type="email" placeholder="seu email"></ion-input>
     </div>
     </ion-col>
     <ion-col size="12" size-sm>
     <div id="input">
         <ion-input type="password" placeholder="sua senha"></ion-input>
     </div>
     </ion-col>
     </ion-row>
     </ion-grid>
    </ion-content>

    <ion-footer>
      <ion-button expand="block" color="primary" shape="round" class="botao">
        Criar conta
      </ion-button>
    </ion-footer>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Cadastro',
  components: {
    IonContent,
    IonPage,
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

#texto{
    text-align: center;
    color: #92949c;
    font-size: 13px;
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