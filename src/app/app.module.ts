import { NgModule, isDevMode } from '@angular/core';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { CoreModule } from './core/core.module';
import { ROOT_REDUCERS } from './features/todo/store/todo.store';
import { TodoEffects } from './features/todo/store/todo.effects';
import { AppRoutingModule } from './app.routing.module';
import { MaterialModule } from './shared/modules/material/material.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    CoreModule,
    MaterialModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([TodoEffects]),
    StoreRouterConnectingModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
