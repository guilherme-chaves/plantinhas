<template>
    <ion-menu side="end" menu-id="usuario" content-id="main-page-tabs" type="overlay">
        <ion-header>
            <ion-icon :icon="leafSharp" id="logo"></ion-icon>
            <ion-title>Plantinhas</ion-title>
        </ion-header>
        <ion-content>
            <ion-list>
                <ion-item button @click="() => router.push('/home/configuracao')">
                    <ion-icon :icon="personSharp"></ion-icon>                    
                    Configurações
                </ion-item>
                <ion-item button @click="doLogout">
                    <ion-icon :icon="logOutOutline"></ion-icon>
                    Sair
                </ion-item>
            </ion-list>
        </ion-content>
    </ion-menu>
</template>

<script>
import { defineComponent } from 'vue';
import { IonHeader,
        IonMenu,
        IonTitle,
        IonContent,
        IonList,
        IonItem,
        IonIcon
        } from '@ionic/vue';
import { useRouter } from 'vue-router';
import { leafSharp, personSharp, logOutOutline } from 'ionicons/icons';
import useFirebaseAuth from '../api/firebase-auth'

export default defineComponent({
  name: 'AppHeader',
  components: {
      IonHeader,
      IonMenu,
      IonTitle,
      IonContent,
      IonList,
      IonItem,
      IonIcon
  },
  setup() {
      const { logout } = useFirebaseAuth();
      const router = useRouter();

      const doLogout = async () => {
        await logout();
        router.options.scrollBehavior;
        router.replace({ name: "Start", replace: true });
      };

      
      return { doLogout, leafSharp, personSharp, logOutOutline }
  }
});
</script>

<style scoped>
ion-menu {
    --max-width: 75%;
}
ion-header {
    margin-top: 2.25em;
    padding-bottom: 1em;
    text-align: center;
    color: #3880ff;
}
ion-item {
    --color: #808289;
    font-size: 14px;
}
ion-icon {
    font-size: 16px;
    margin-right: 12px;
}
#logo {
    font-size: 64px;
    margin-right: 0;
}
</style>