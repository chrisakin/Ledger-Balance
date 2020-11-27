import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VaultHeaderComponent } from './vault-header/vault-header.component';
import { TillAccountComponent } from './till-account/till-account.component';
import { StanbicComponent } from './stanbic/stanbic.component';

const routes: Routes = [
  { path: '', redirectTo: '/blessing-till-account', pathMatch: 'full' },
  { path: 'vault', component: VaultHeaderComponent },
  { path: 'blessing-till-account', component: TillAccountComponent },
  { path: 'stanbic', component: StanbicComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
