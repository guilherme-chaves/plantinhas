import store from "../index";
import { Module, VuexModule, getModule } from 'vuex-module-decorators';
import { UserNoteInterface } from "../interfaces/user";


@Module({name: 'userNotes', dynamic: true, store})
class UserNotes extends VuexModule {
    notes: Array<UserNoteInterface> | null = null;
}


export default getModule(UserNotes)