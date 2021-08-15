<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <ion-img src="https://via.placeholder.com/500x200.jpg"></ion-img>
            <div id="header" class="conteudo">
            <strong>Nome da Planta</strong>
            <ion-note>Especie - Estagio da planta</ion-note>
            <ion-note>Nome Cientifico</ion-note>
            </div>
            <p class="conteudo">Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <ion-button expand="block" color="primary" shape="round" class="botao" @click="() => router.push('/colecao/planta/dicascultivo')">
                Dicas de Cultivo
            </ion-button>
            <ion-card>
            <ion-card-header>
            <ion-card-title>
            <strong>Necessidades</strong>
            </ion-card-title>
            </ion-card-header>
            <ion-card-content>
            <necessidades-planta></necessidades-planta>
            </ion-card-content>
            </ion-card>
            <ion-card>
            <ion-card-header>
            <ion-card-title>
            <strong>Lembretes</strong>
            </ion-card-title>
            </ion-card-header>
            <ion-card-content>
            <lembretes-planta></lembretes-planta>
            </ion-card-content>
            </ion-card>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage} from '@ionic/vue';
import { defineComponent } from 'vue';
import { add } from 'ionicons/icons';
import { useRouter } from 'vue-router';
import NecessidadesPlanta from '../components/NecessidadesPlanta.vue'
import LembretesPlanta from '../components/LembretesPlanta.vue'

export default defineComponent({
  name: 'Planta',
  components: {
    IonContent,
    IonPage,
    NecessidadesPlanta,
    LembretesPlanta
  },
  setup() {
    const router = useRouter();
    return{
      add,
      router
    }
  },
});
</script>

<style scoped>
#header{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

.conteudo{
    margin: 16px 0 16px 8px;
}

ion-card{
    padding: 8px;
    background: white;
    width: 100vw;
    margin: 16px 0 16px 0;
}
</style>