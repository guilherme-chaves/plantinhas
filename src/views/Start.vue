<template>
  <ion-page>
    <ion-content :fullscreen="true"> 
      <div id="container">
        <strong>Plantin</strong>
      </div>
    </ion-content>

    <ion-footer>
      <ion-button expand="block" shape="round" class="botao1" @click="() => router.push('/login')">
        Entrar
      </ion-button>
      <ion-button expand="block" shape="round" class="botao2" @click="() => router.push('/cadastro')">
        Cadastrar
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
  --ion-background-color: linear-gradient(151deg, #70A333, #167D2E);
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
  color: white;
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

.botao1{
  margin: 1em;
  --background: #167D2E;
}

.botao2{
  margin: 1em;
  --background: #B0D25A;
}

ion-footer{
  background: white;
  padding: 2em 0.5em 2em 0.5em;
}
</style>