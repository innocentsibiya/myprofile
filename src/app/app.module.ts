import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TucanaComponent } from './tucana/tucana.component';
import { LexisnexisComponent } from './lexisnexis/lexisnexis.component';
import { ReferencesComponent } from './references/references.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { PersonalinfoComponent } from './personalinfo/personalinfo.component';
import { IntegrityComponent } from './integrity/integrity.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { NavigationMenuSideComponent } from './navigation-menu-side/navigation-menu-side.component';

@NgModule({
  declarations: [
    AppComponent,
    TucanaComponent,
    LexisnexisComponent,
    ReferencesComponent,
    SkillsComponent,
    EducationComponent,
    PersonalinfoComponent,
    IntegrityComponent,
    CertificatesComponent,
    NavigationMenuSideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
