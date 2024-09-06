import { Routes } from '@angular/router';
import { HomeComponent } from './features/front-office/home/home.component';
import { PersonalLibraryComponent } from './features/front-office/personal-library/personal-library.component';
import { LicenseDetailsComponent } from './features/front-office/license-details/license-details.component';
import { LicensesComponent } from './features/front-office/licenses/licenses.component';

export const routes: Routes = [
    {
      path: '',
      component: HomeComponent
    },
    {
      path: 'license-details',
      component: LicenseDetailsComponent
    },
    {
        path: 'licenses',
        component: LicensesComponent,
        children: [

        ]
    },
    {
      path: 'personal-library',
      title: 'Ma bibliothèque personnelle',
      component: PersonalLibraryComponent,
      children: [
          /*{
              path: '',
              
          }*/
      ]
    }
  ];
