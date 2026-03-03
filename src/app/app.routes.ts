import {Routes} from '@angular/router';

const routeConfig: Routes = [
    {
        path: '',
        loadComponent: () => import('./accueil/accueil').then(m => m.Accueil),
        title: 'Home page',
    },
    {
        path: 'mentions-legales',
        loadComponent: () => import('./mention-legales/mention-legales').then(m => m.MentionLegales),
        title: 'Home page',
    },
    {
        path: 'programme',
        loadComponent: () => import('./pogramme/pogramme').then(m => m.Pogramme),
        title: 'Home page',
    },
];
export default routeConfig;