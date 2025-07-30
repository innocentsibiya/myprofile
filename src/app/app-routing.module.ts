import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalinfoComponent } from './personalinfo/personalinfo.component';
import { SkillsComponent } from './skills/skills.component';
import { IntegrityComponent } from './integrity/integrity.component';
import { LexisnexisComponent } from './lexisnexis/lexisnexis.component';
import { TucanaComponent } from './tucana/tucana.component';
import { EducationComponent } from './education/education.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { ReferencesComponent } from './references/references.component';

const routes: Routes = [
  { path: 'personalinfo', component: PersonalinfoComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'integrity', component: IntegrityComponent },
  { path: 'lexisnexis', component: LexisnexisComponent },
  { path: 'tucana', component: TucanaComponent },
  { path: 'education', component: EducationComponent },
  { path: 'certificates', component: CertificatesComponent },
  { path: 'references', component: ReferencesComponent },
  { path: '', redirectTo: '/personalinfo', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
