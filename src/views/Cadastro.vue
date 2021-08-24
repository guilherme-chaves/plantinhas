<template>
  <ion-page>
     <ion-content :fullscreen="true"> 
     <div id="container">
        <strong>Crie uma conta</strong>
        <div id="texto">
          Para criar sua conta nós vamos precisar de algumas informações 
        </div>
     </div>
    </ion-content>

    <ion-footer>
      <ion-grid>
        <ion-row> 
          <ion-col size="12" size-sm>
            <div id="input">
                <ion-input type="text" name="username" placeholder="Seu nome de usuário" @ionChange="handleChange" required><ion-icon :icon="personSharp"></ion-icon></ion-input>
            </div>
          </ion-col>
          <ion-col size="12" size-sm>
            <div id="input">
                <ion-input type="email" name="email" placeholder="Email de usuário" @ionChange="handleChange" required><ion-icon :icon="mail"></ion-icon></ion-input>
            </div>
          </ion-col>
          <ion-col size="12" size-sm>
            <div id="input">
                <ion-input type="password" name="password" placeholder="Senha" @ionChange="handleChange" required><ion-icon :icon="lockClosed"></ion-icon></ion-input>
            </div>
          </ion-col>
        </ion-row>
      </ion-grid>
      <ion-button expand="block" shape="round" class="botao" @click="doSignIn">
        <ion-spinner v-if="loading" color="light"/>
        <!-- eslint-disable-next-line vue/valid-v-else -->
        <span v-else>Continuar</span>
      </ion-button>
    </ion-footer>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage, IonGrid, IonRow, IonCol, IonInput, IonFooter, IonButton, alertController } from '@ionic/vue';
import { defineComponent, ref } from 'vue';
import { useRouter } from "vue-router";
import { lockClosed, mail, personSharp } from 'ionicons/icons';
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
      lockClosed,
      mail,
      personSharp
    }
  }
});
</script>

<style scoped>
ion-icon{
  margin-left: 5%;
}

ion-content{
  --ion-background-color: linear-gradient(151deg, #70A333, #167D2E);
}

ion-row{
    margin-top: 10%;
}

#container {
  text-align: center;
  position: absolute;
  left: 10vw;
  right: 10vw;
  top: 20%;
  transform: translateY(-50%);
}

#texto{
    text-align: center;
    color: white;
    font-size: 13px;
    margin: 10px;
}

#container strong {
  font-size: 20px;
  line-height: 26px;
  color: white;
}

#input{
    margin-top: 5%;
}

#input ion-input { 
    border: 1px #167D2E solid; 
    border-radius: 2em;
    color: #167D2E;
}

.botao{
  margin: 1em;
  padding: -4px;
  --background: #167D2E;
}

ion-footer{
  background: white;
  padding: 2em 0.5em 2em 0.5em;
}
</style>