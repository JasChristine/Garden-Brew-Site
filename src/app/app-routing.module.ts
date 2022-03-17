import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DivinationComponent } from './pages/divination/divination.component';
import { SigilsComponent } from './pages/divination/sigils/sigils.component';
import { TarotComponent } from './pages/divination/tarot/tarot.component';
import { TasseomancyComponent } from './pages/divination/tasseomancy/tasseomancy.component';
import { EarthComponent } from './pages/green-craft/earth/earth.component';
import { GreenCraftComponent } from './pages/green-craft/green-craft.component';
import { HerbsComponent } from './pages/green-craft/herbs/herbs.component';
import { SeasonsComponent } from './pages/green-craft/seasons/seasons.component';
import { StonesComponent } from './pages/green-craft/stones/stones.component';
import { HearthCraftComponent } from './pages/hearth-craft/hearth-craft.component';
import { HearthMagicComponent } from './pages/hearth-craft/hearth-magic/hearth-magic.component';
import { HearthComponent } from './pages/hearth-craft/hearth/hearth.component';
import { KitchenComponent } from './pages/hearth-craft/kitchen/kitchen.component';
import { HomeComponent } from './pages/home/home.component';
import { IntentionsComponent } from './pages/moon-magic/intentions/intentions.component';
import { MoonMagicComponent } from './pages/moon-magic/moon-magic.component';
import { PhasesComponent } from './pages/moon-magic/phases/phases.component';
import { YearMoonsComponent } from './pages/moon-magic/year-moons/year-moons.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'divination',
    children: [
      {
        path: '',
        component: DivinationComponent,
      },
      {
        path: 'tarot',
        component: TarotComponent,
      },
      {
        path: 'sigils',
        component: SigilsComponent,
      },

      {
        path: 'tasseomancy',
        component: TasseomancyComponent,
      },
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
  {
    path: 'green-craft',
    children: [
      {
        path: '',
        component: GreenCraftComponent,
      },
      {
        path: 'earth',
        component: EarthComponent,
      },
      {
        path: 'herbs',
        component: HerbsComponent,
      },
      {
        path: 'season',
        component: SeasonsComponent,
      },
      {
        path: 'stones',
        component: StonesComponent,
      },
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
  {
    path: 'hearth-craft',
    children: [
      {
        path: '',
        component: HearthCraftComponent,
      },
      {
        path: 'hearth',
        component: HearthComponent,
      },
      {
        path: 'hearth-magic',
        component: HearthMagicComponent,
      },
      {
        path: 'kitchen',
        component: KitchenComponent,
      },
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
  {
    path: 'moon-magic',
    children: [
      {
        path: '',
        component: MoonMagicComponent,
      },
      {
        path: 'intentions',
        component: IntentionsComponent,
      },
      {
        path: 'phases',
        component: PhasesComponent,
      },
      {
        path: 'year-moons',
        component: YearMoonsComponent,
      },
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
