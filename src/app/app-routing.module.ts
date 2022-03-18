import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DivinationComponent } from './pages/divination/divination.component';
import { GalleryComponent } from './pages/divination/sigils/gallery/gallery.component';
import { MarksComponent } from './pages/divination/sigils/marks/marks.component';
import { SigilsComponent } from './pages/divination/sigils/sigils.component';
import { MajorArcanaComponent } from './pages/divination/tarot/major-arcana/major-arcana.component';
import { MinorArcanaComponent } from './pages/divination/tarot/minor-arcana/minor-arcana.component';
import { SpreadsComponent } from './pages/divination/tarot/spreads/spreads.component';
import { TarotComponent } from './pages/divination/tarot/tarot.component';
import { ReadingComponent } from './pages/divination/tasseomancy/reading/reading.component';
import { SetUpComponent } from './pages/divination/tasseomancy/set-up/set-up.component';
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
        children: [
          {
            path: '',
            component: TarotComponent,
          },
          {
            path: 'major-arcana',
            component: MajorArcanaComponent,
          },
          {
            path: 'minor-arcana',
            component: MinorArcanaComponent,
          },
          {
            path: 'spreads',
            component: SpreadsComponent,
          },
          {
            path: '**',
            redirectTo: '',
          },
        ],
      },
      {
        path: 'sigils',
        children: [
          {
            path: '',
            component: SigilsComponent,
          },
          {
            path: 'marks',
            component: MarksComponent,
          },
          {
            path: 'gallery',
            component: GalleryComponent,
          },
          {
            path: '**',
            redirectTo: '',
          },
        ],
      },
      {
        path: 'tasseomancy',
        children: [
          {
            path: '',
            component: TasseomancyComponent,
          },
          {
            path: 'reading',
            component: ReadingComponent,
          },
          {
            path: 'set-up',
            component: SetUpComponent,
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
