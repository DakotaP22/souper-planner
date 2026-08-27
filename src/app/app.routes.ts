import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "home",
        loadComponent: () => import("./features/home/home").then((m) => m.Home),
    },
    {
        path: "meals",
        loadComponent: () => import("./shared/layout/app-layout/app-layout").then((m) => m.AppLayout),
        children: [
            {
                path: '',
                loadComponent: () => import("./features/meals/meals").then((m) => m.Meals),
            },
        ],
    },
    {
        path: "plan",
        loadComponent: () => import("./shared/layout/app-layout/app-layout").then((m) => m.AppLayout),
        children: [
            {
                path: '',
                loadComponent: () => import("./features/plan/plan").then((m) => m.Plan),
            },
        ],
    },
    {
        path: '',
        redirectTo: 'meals',
        pathMatch: 'full'
    }
];
