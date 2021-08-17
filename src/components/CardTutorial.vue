<template>
    <ion-card button @click="() => router.push('/colecao/planta/dicascultivo/tutorial/artigotutorial')">
    <ion-img src="https://via.placeholder.com/400x220.jpg"></ion-img>
    <ion-card-header>
      <ion-card-title>Semeadura</ion-card-title>
    </ion-card-header>
    <ion-card-content>
        <p>Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        </p>
    </ion-card-content>
    </ion-card>
</template>

<script lang="ts">
import { } from '@ionic/vue';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'CardTutorial',
  components: {
  },
  setup() {
    const router = useRouter();
    return{
      router
    }
  },
});
</script>