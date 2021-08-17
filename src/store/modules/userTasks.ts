import store from "../index";
import { Module, VuexModule, getModule } from 'vuex-module-decorators';
import { UserTaskInterface } from "../interfaces/user";

@Module({name: 'userTasks', dynamic: true, store})
class UserTasks extends VuexModule {
    userTasksList: Array<UserTaskInterface> | null = null;
}


export default getModule(UserTasks)