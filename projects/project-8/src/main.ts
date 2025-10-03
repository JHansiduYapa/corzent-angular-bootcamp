import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { routes } from './app.routes';
import { provideRouter, withComponentInputBinding } from '@angular/router';

bootstrapApplication(AppComponent,{
    providers: [
        provideRouter(routes, withComponentInputBinding())
    ],
}).catch((err) => console.error(err));
