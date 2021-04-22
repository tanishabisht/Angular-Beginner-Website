import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'

// MAIN APP COMPONENT
import { AppComponent } from './app.component'

// PAGES COMPONENTS
import { NavbarComponent } from './navbar/navbar.component'
import { LoginComponent } from './login/login.component'
import { SignUpComponent } from './sign-up/sign-up.component'
import { SucessComponent } from './sucess/sucess.component'
import { CommentSectionComponent } from './comment-section/comment-section.component'
import { FormsComponent } from './forms/forms.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { CardComponent } from './Components/card/card.component'
import { TableComponent } from './Components/table/table.component'

// SERVICES
import {freeApiService} from './Services/freeapi.service'
import {authApiService} from './Services/authapi.service'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignUpComponent,
    SucessComponent,
    CommentSectionComponent,
    FormsComponent,
    CardComponent,
    TableComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'', component: LoginComponent},
      {path:'signup', component: SignUpComponent},
      {path:'sucess', component: SucessComponent},
      {path:'comments', component: CommentSectionComponent},
      {path:'forms', component: FormsComponent},
      {path:'dashboard', component: DashboardComponent}
    ])
  ],
  providers: [
    freeApiService,
    authApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
