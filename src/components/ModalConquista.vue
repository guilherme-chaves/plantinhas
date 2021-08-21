<template>
    <ion-card>
    <ion-card-header>
        <ion-card-title>{{ title }}</ion-card-title>
        <ion-chip>Nível {{ nivelConquista }}</ion-chip>
        <ion-buttons slot="end">
            <ion-button onclick="dismissModal()">Close</ion-button>
        </ion-buttons>
    </ion-card-header>
    <ion-card-content>
        <p>Lorem ipsum...</p>
        <p class="instrucoes">Continue os cuidados para subir seu troféu de nível!</p>
    </ion-card-content>
    </ion-card>
</template>

<script>
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonChip, IonButtons, IonButton } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ModalConquista',
  props: {
    title: { type: String, default: 'Conquista' },
    nivelConquista: { type: Number, default: 1 },
    textoConquista: { type: String, default: "Lorem ipsum..."}
  },
  components: { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonChip, IonButtons, IonButton }
});
</script>

<style scoped>
ion-chip{
    color: #167D2E;
}
ion-card-header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

ion-card-content {
    text-align: center;
}

.instrucoes {
    color: #167D2E;
    font-size: 9pt;
}
</style>