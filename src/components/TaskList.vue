<template>
    <div class="tasks-list">
        <ion-card v-if="tasks == undefined || tasks == []">
            <ion-card-content>
                <ion-label >Parece que você está sem tarefas agendadas</ion-label>
            </ion-card-content>
        </ion-card>
        <ion-card v-else-if="tasks[i].length == 0">
            <ion-card-content>
                <ion-label>Dia livre! Você não tem nada programado para hoje</ion-label>
            </ion-card-content>
        </ion-card>
        <ion-card v-else v-for="(task, index) in tasks" :key="index+'-'+slide">
            <ion-card-header>
                <ion-card-title>
                    <div>
                    <ion-icon :icon="getIcon(task.category)"></ion-icon>
                    <ion-label>{{ task.category }}</ion-label>
                    </div>
                    <div>
                    <ion-note>{{ task.hour }}</ion-note>
                    </div>
                </ion-card-title>
            </ion-card-header>
            <ion-card-content>
                <ion-grid>
                    <ion-row v-for="(plant, key) in task.plants" :key="key+'-'+index+'-'+slide" class="task-item">
                        <ion-col size="auto">
                            <ion-checkbox :checked="plant.done"></ion-checkbox>
                            <ion-label class="plant-name">{{ plant.name }}</ion-label>
                        </ion-col>
                        <ion-col size="*">
                            <ion-note class="item-details">{{ plant.freq }}</ion-note>
                        </ion-col>
                    </ion-row>
                </ion-grid>
            </ion-card-content>
        </ion-card>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import { waterOutline, leafOutline, nutritionOutline } from 'ionicons/icons';
import { IonCard,
    IonCardHeader,
    IonCardContent,
    IonCardTitle,
    IonIcon,
    IonNote,
    IonGrid,
    IonRow,
    IonCol,
    IonLabel,
    IonCheckbox
} from '@ionic/vue';

export default defineComponent({
    name: 'TaskList',
    components: {
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonCardTitle,
    IonIcon,
    IonNote,
    IonGrid,
    IonRow,
    IonCol,
    IonLabel,
    IonCheckbox
    },
    props: {
        slide: Number,
        tasks: Array
    },
    /*data() {
        return {
            tasks: {
              1: {
                  category: "Aguação",
                  hour: "07:00 AM",
                  done: false,
                  plants: {
                      1: {
                          name: "Douglas",
                          freq: "all",
                          done: false
                      },
                      2: {
                          name: "Pimentinha",
                          freq: "seg/qua/sex",
                          done: true
                      }
                  }
              },
              2: {
                  category: "Adubação",
                  hour: "09:00AM",
                  done: false,
                  plants: {
                      1: {
                          name: "João",
                          done: false
                      },
                      2: {
                          name: "Roberta",
                          done: false
                      }
                  }
              },
              3: {
                  category: "Poda",
                  hour: "04:00PM",
                  done: false,
                  plants: {
                      1: {
                          name: "Roberta",
                          freq: "month",
                          done: false
                      }
                  }

              }
          },
        }
    },*/
    methods: {
        getIcon(type) {
            switch (type) {
                case "Aguação":
                    return waterOutline;
                case "Adubação":
                    return nutritionOutline;
                case "Poda":
                    return leafOutline;
                default:
                    return "";
            }
        }
    },
    setup() {
        return { waterOutline, leafOutline, nutritionOutline }
    },
})
</script>

<style scoped>
.tasks-list {
    display: flex;
    flex-direction: column;
    flex-shrink: 2;
    flex-wrap: nowrap;
    align-content: center;
}

ion-card {
    width: 92.5vw;
    border: 2px #167D2E solid;
    border-radius: .5em;
    padding: 2px;
    background-color: #ffffff;
}

ion-card-header, ion-card-content {
    padding: 4px;
}

ion-card-title {
    margin-left: .1em;
}

ion-card-title > ion-label {
    padding-left: 4px;
    vertical-align: middle;
}

ion-card-title, .task-item {
    text-align: left;
    display: flex;
    justify-content: space-between;
    align-content: space-between;
    align-items: baseline;
    color: #167D2E;
}

ion-card-content {
    margin-left: .25em;
}

ion-label, ion-note {
    vertical-align: baseline;
}

ion-label {
    padding-left: 4px;
}

ion-note {
    font-size: 9pt;
}

ion-checkbox{
    --background-checked: #167D2E;
    --border-color: #167D2E;
    --border-color-checked: #167D2E;
}
</style>