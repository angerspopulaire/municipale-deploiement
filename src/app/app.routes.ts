import {Routes} from '@angular/router';

const routeConfig: Routes = [
    {
        path: '',
        loadComponent: () => import('./accueil/accueil').then(m => m.Accueil),
        title: 'Angers populaire - élections municipales le 15 et 22 mars 2026 - France insoumise',
    },
    {
        path: 'mentions-legales',
        loadComponent: () => import('./mention-legales/mention-legales').then(m => m.MentionLegales),
        title: 'Mentions légales - élections municipales le 15 et 22 mars 2026 - Angers populaire - France insoumise',
    },
    {
        path: 'programme',
        loadComponent: () => import('./pogramme/pogramme').then(m => m.Pogramme),
        title: 'Notre programme - élections municipales le 15 et 22 mars 2026 - Angers populaire - France insoumise',
    },
];
export default routeConfig;