import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlSerializer } from '@angular/router';
import { environment } from '../environments/environment';
import { AboutComponent } from './about/about.component';
import { ChatComponent } from './chat/chat.component';
import { CanLoadAuthGuard } from './guards/can-load-auth.guard';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CustomPreloadStrategy } from './preloadStrategies/custom-preloading-strategy';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'courses',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    //canLoad: [CanLoadAuthGuard],
    path: 'courses',
    loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule),
    data: {
      preload: true
    }
  },
  {
    path: 'helpdesk-chat',
    component: ChatComponent,
    outlet: 'chat'
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [
    // setup usful - bug fixes added to back compatibility
    RouterModule.forRoot(routes, {
      preloadingStrategy: CustomPreloadStrategy,
      enableTracing: false && !environment.production,
      useHash: false, // uses hash urls usefull when you cant modify backend to redirect to index.html
      scrollPositionRestoration: 'enabled',
      paramsInheritanceStrategy: 'always',
      relativeLinkResolution: 'corrected', // ../ => ./ for '' paths
      malformedUriErrorHandler: (error: URIError, urlSerializer: UrlSerializer, url: string) => urlSerializer.parse('/page-not-found'),

    })
  ],
  exports: [RouterModule],
  providers: [
    CanLoadAuthGuard,
    CustomPreloadStrategy
  ]
})
export class AppRoutingModule {


}
