import store from "../index";
import { Module, VuexModule, getModule } from 'vuex-module-decorators';

@Module({name: 'tasks', dynamic: true, store})
class Tasks extends VuexModule {
    taskId: string = '';
    plantId: string = '';
    plantName: string = '';
    title: string = '';
    description: string = '';
    repeat: string = '';
}


export default getModule(Tasks)