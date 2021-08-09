<template>
  <ion-page>
    <ion-content :fullscreen="true"> 
      <div id="container">
        <strong>Plantinhas</strong>
      </div>
    </ion-content>

    <ion-footer>
      <ion-button expand="block" color="primary" shape="round" class="botao" @click="() => router.push('/login')">
        Entrar
      </ion-button>
      <ion-button expand="block" color="secondary" shape="round" class="botao" @click="() => router.push('/cadastro')">
        Cadastrar
      </ion-button>
      <ion-button expand="block" color="secondary" shape="round" class="botao" @click="() => router.push('/tabs')">
        Teste
      </ion-button>
    </ion-footer>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage, IonFooter, IonButton } from '@ionic/vue';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'Home',
  components: {
    IonContent,
    IonPage,
    IonFooter,
    IonButton,
  },
  setup() {
      const router = useRouter();
      return { router };
 }
});
</script>

<style scoped>
ion-content{
  --ion-background-color: #bce0fd;
}

#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 20%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 35px;
  line-height: 26px;
  color: #2699fb;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}

.botao{
  margin: 1em;
}

ion-footer{
  background: white;
  padding: 2em 0.5em 2em 0.5em;
}
</style>