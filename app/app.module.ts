/**
 * Created by Waleed on 5/19/2017.
 */
import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {RootComponent} from "./root.component";
import {LoginComponent} from "./components/login/login.component";
import {ChatWindowComponent} from "./components/chatWindow/chatWindow.component";
import {ChatHeaderComponent} from "./components/chatHeader/chatHeader.component";
import {ChatListComponent} from "./components/chatList/chatList.component";
import {ThreadComponent} from "./components/thread/thread.component";
@NgModule({
    imports:[BrowserModule],
    declarations:[RootComponent,LoginComponent,ChatWindowComponent,ChatHeaderComponent,ChatListComponent,ThreadComponent],
    bootstrap:[ChatWindowComponent]
})
export  class AppModule{

}