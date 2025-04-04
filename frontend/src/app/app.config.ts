// import { provideRouter, RouterModule } from '@angular/router';
// import { importProvidersFrom } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';
// import { HttpClientModule } from '@angular/common/http';
// import { routes } from './app.routes';

// export const appConfig = {
//   providers: [
//     provideRouter(routes),
//     importProvidersFrom(
//       FormsModule,
//       CommonModule,
//       HttpClientModule,
//       RouterModule
//     )
//   ]
// };
import { provideRouter, RouterModule } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { routes } from './app.routes';

export const appConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      FormsModule,
      CommonModule,
      HttpClientModule,
      RouterModule
    ),
  ],
};

