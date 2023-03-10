
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactLoginComponent } from './contact-login/contact-login.component';
import { BannerPresentationComponent } from './banner-presentation/banner-presentation.component';
import { EducationComponent } from './education/education.component';
import { HardSoftSkillsComponent } from './hard-soft-skills/hard-soft-skills.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectssComponent } from './projectss/projectss.component';
import { HttpClientModule } from '@angular/common/http';
import { WorkExperiencesComponent } from './work-experiences/work-experiences.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import  {  BrowserAnimationsModule  }  from  "@angular/platform-browser/animations";
import  {  NgxSpinnerModule  }  from  "ngx-spinner";
import  {  NgModule ,  CUSTOM_ELEMENTS_SCHEMA  }  from  "@angular/core" ;


@NgModule({
  declarations: [
    AppComponent,
    BannerPresentationComponent,
    EducationComponent,
    HardSoftSkillsComponent,
    HobbiesComponent,
    FooterComponent,
    ProjectssComponent,
    ContactLoginComponent,
    WorkExperiencesComponent
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    BrowserAnimationsModule , 
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
