/**
 * Created by Waleed on 5/19/2017.
 */
import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {RootComponent} from "./root.component";
import {LoginComponent} from "./components/login/login.component";
@NgModule({
    imports:[BrowserModule],
    declarations:[RootComponent,LoginComponent],
    bootstrap:[RootComponent]
})
export  class AppModule{

}