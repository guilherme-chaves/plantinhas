<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <ion-img src="https://via.placeholder.com/400x220.jpg"></ion-img>
            <div id="conteudo">
            <ion-title>Semeadura</ion-title>
            <p>Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </p>
            <ion-img src="https://via.placeholder.com/400x220.jpg"></ion-img>
            <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            </div>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage } from '@ionic/vue';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'ArtigoTutorial',
  components: {
    IonContent,
    IonPage,
  },
  setup() {
      const router = useRouter();
      return { router };
 }
});
</script>

<style scoped>
#conteudo{
    margin: 8px;
}
</style>