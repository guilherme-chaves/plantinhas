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
         <ion-input type="text" name="username" placeholder="seu nome" @ionChange="handleChange"><ion-icon :icon="personSharp"></ion-icon></ion-input>
     </div>
     </ion-col>
     <ion-col size="12" size-sm>
     <div id="input">
         <ion-input type="email" name="email" placeholder="seu email" @ionChange="handleChange"><ion-icon :icon="mail"></ion-icon></ion-input>
     </div>
     </ion-col>
     <ion-col size="12" size-sm>
     <div id="input">
         <ion-input type="password" name="password" placeholder="sua senha" @ionChange="handleChange"><ion-icon :icon="lockClosed"></ion-icon></ion-input>
     </div>
     </ion-col>
     </ion-row>
     </ion-grid>
    </ion-content>

    <ion-footer>
      <ion-button expand="block" color="primary" shape="round" class="botao" @click="doSignIn">
        Criar conta
      </ion-button>
    </ion-footer>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage, IonGrid, IonRow, IonCol, IonInput, IonFooter, IonButton, alertController } from '@ionic/vue';
import { defineComponent, ref } from 'vue';
import { useRouter } from "vue-router";
import { personSharp, lockClosed, mail } from 'ionicons/icons';
import useFirebaseAuth from '../api/firebase-auth';

export default defineComponent({
  name: 'Cadastro',
  components: {
    IonContent,
    IonPage,
    IonGrid,
    IonRow,
    IonCol,
    IonInput,
    IonFooter,
    IonButton,
  },
  setup() {
    const state = useFirebaseAuth();
    const router = useRouter();
    const credentials = ref<{[key: string]: string}>({
      username: "",
      email: "",
      password: "",
    });

    const handleChange = (e: CustomEvent) => {
      const name: string = (e?.target as any)?.name;
      credentials.value[name as string] = e.detail.value;
    };

    const handleAlert = (message: string, isError = false) => {
      alertController
        .create({
          header: isError ? "Erro: " : "Atenção: ",
          message: message,
          buttons: ["OK"],
        })
        .then((t) => t.present());
    };

    const doSignIn = async () => {
      try {
        const { username, email, password } = credentials.value;
        await state.signIn(email, password, username);
        router.push({name : "Tabs", replace: true });
      } catch (error) {
        console.log(error);
        handleAlert(error.message, true);
      }
    };
    return{
      ...state,
      credentials,
      doSignIn,
      handleChange,
      personSharp,
      lockClosed,
      mail
    }
  }
});
</script>

<style scoped>
ion-icon{
  margin-left: 5%;
}

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