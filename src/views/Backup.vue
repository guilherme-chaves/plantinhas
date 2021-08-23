<template>
    <ion-page>
        <ion-content>
            <ion-card>
                <ion-card-content>
                    <ion-title>Configurações de backup</ion-title>
                    <ion-list>
                        <ion-list-header>
                            <ion-label>Fazer backup ou restaurar</ion-label>
                        </ion-list-header>
                        <ion-item lines="none">
                            <ion-label>Último back-up feito em: </ion-label>
                            <ion-chip>17/08/2021</ion-chip>
                        </ion-item>
                        <ion-item id="botoes" lines="none">
                            <ion-button expand="block" size="default">Fazer backup</ion-button>
                            <ion-button expand="block" size="default">Restaurar</ion-button>
                        </ion-item>
                    </ion-list>
                    </ion-card-content>
            </ion-card>
            <ion-card>
                <ion-card-content>
                    <ion-list>
                        <ion-list-header>
                            <ion-label>Opções de backup</ion-label>
                        </ion-list-header>
                        <ion-item lines="none">
                            <ion-label>Frequência do backup</ion-label>
                            <ion-select placeholder="Escolha uma opção" value="notifications" interface="action-sheet">
                                <ion-select-option value="manual">Manual</ion-select-option>
                                <ion-select-option value="diario">Diário</ion-select-option>
                                <ion-select-option value="semanal">Semanal</ion-select-option>
                            </ion-select>
                        </ion-item>
                    </ion-list>
                </ion-card-content>
            </ion-card>
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
ion-title {
    text-align:  center;
    margin-top:  1em;
    --color: #167D2E;;
}
ion-button{
    --background: #167D2E;
}

ion-list-header {
    font-size:  12pt;
}
ion-select {
    padding: -4px;
    border-radius: 10px;
    border: 2px solid #167D2E80;
    font-size: 11pt;
}

#botoes {
    --inner-padding-top: 8px;
}

#botoes > * {
    margin: auto;
}
</style>