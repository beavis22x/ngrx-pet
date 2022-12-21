import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SettingsComponent } from 'src/app/settings/components/settings/settings.component'
import { RouterModule } from '@angular/router'
import { StoreModule } from '@ngrx/store'
import { reducers } from 'src/app/settings/store/reducers'
import { BackendErrorMessagesModule } from 'src/app/shared/modules/backendErrorMessages/backendErrorMessages.module'
import { ReactiveFormsModule } from '@angular/forms'
import { LogoutEffect } from '../auth/store/effects/logout.effect'
import { UpdateCurrentUserEffect } from '../auth/store/effects/updateCurrentUser.effect'
import { EffectsModule } from '@ngrx/effects'

const routes = [
  {
    path: 'settings',
    component: SettingsComponent,
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('settings', reducers),
    EffectsModule.forFeature([LogoutEffect, UpdateCurrentUserEffect]),
    BackendErrorMessagesModule,
    ReactiveFormsModule,
  ],
  declarations: [SettingsComponent],
})
export class SettingsModule {}
