import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrendingComponent } from './trending/trending.component';

const routes: Routes = [
  { path: 'trending', component: TrendingComponent },
  { path: '', redirectTo:'trending', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
