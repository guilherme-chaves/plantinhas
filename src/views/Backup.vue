<template>
    <ion-page>
        <ion-content>
            <ion-title>Configurações de backup</ion-title>
            <ion-list>
            <ion-list-header>
            <ion-label>Fazer backup ou restaurar</ion-label>
            </ion-list-header>
            <ion-item>
            <ion-chip>17/08/2021</ion-chip>
            </ion-item>
            <ion-item>
            <ion-button>Fazer backup</ion-button>
            </ion-item>
            <ion-item>
            <ion-button>Restaurar</ion-button>
            </ion-item>
            </ion-list>
            <ion-list>
            <ion-list-header>
            <ion-label>Frequência do backup</ion-label>
            </ion-list-header>
            <ion-select value="notifications" interface="action-sheet">
            <ion-select-option value="manual">Manual</ion-select-option>
            <ion-select-option value="diario">Diário</ion-select-option>
            <ion-select-option value="semanal">Semanal</ion-select-option>
            </ion-select>
            </ion-list>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage, IonButton } from '@ionic/vue';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'Backup',
  components: {
    IonContent,
    IonPage,
    IonButton,
  },
  setup() {
      const router = useRouter();
      return { router };
 }
});
</script>

<style scoped>
ion-button{
    --background: #167D2E;
}
</style>