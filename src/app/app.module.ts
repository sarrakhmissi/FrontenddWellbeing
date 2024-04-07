import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BeautyComponent } from './beauty/beauty.component';

import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { ResultatComponent } from './resultat/resultat.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreComponent } from './store/store.component';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import { HttpClientModule } from '@angular/common/http';
import { PromotionComponent } from './promotion/promotion.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { BresultatComponent } from './bresultat/bresultat.component';
import { HealthComponent } from './health/health.component';
import { HresultatComponent } from './hresultat/hresultat.component';
import { HappinessMapComponent } from './happiness-map/happiness-map.component';
import { PanierComponent } from './panier/panier.component';
import { ProfilComponent } from './profil/profil.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BeautyComponent,
 
    QuestionnaireComponent,
    ResultatComponent,
    StoreComponent,
    AddNewProductComponent,
    PromotionComponent,
    RegisterComponent,
    LoginComponent,
    BresultatComponent,
    HealthComponent,
    HresultatComponent,
    HappinessMapComponent,
    PanierComponent,
    ProfilComponent,
   
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
   
    HttpClientModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
