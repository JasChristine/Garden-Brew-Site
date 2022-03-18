import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DivinationComponent } from './pages/divination/divination.component';
import { GreenCraftComponent } from './pages/green-craft/green-craft.component';
import { HearthCraftComponent } from './pages/hearth-craft/hearth-craft.component';
import { MoonMagicComponent } from './pages/moon-magic/moon-magic.component';
import { SigilsComponent } from './pages/divination/sigils/sigils.component';
import { TarotComponent } from './pages/divination/tarot/tarot.component';
import { TasseomancyComponent } from './pages/divination/tasseomancy/tasseomancy.component';
import { MarksComponent } from './pages/divination/sigils/marks/marks.component';
import { GalleryComponent } from './pages/divination/sigils/gallery/gallery.component';
import { MajorArcanaComponent } from './pages/divination/tarot/major-arcana/major-arcana.component';
import { MinorArcanaComponent } from './pages/divination/tarot/minor-arcana/minor-arcana.component';
import { SpreadsComponent } from './pages/divination/tarot/spreads/spreads.component';
import { SetUpComponent } from './pages/divination/tasseomancy/set-up/set-up.component';
import { ReadingComponent } from './pages/divination/tasseomancy/reading/reading.component';
import { SeasonsComponent } from './pages/green-craft/seasons/seasons.component';
import { EarthComponent } from './pages/green-craft/earth/earth.component';
import { HerbsComponent } from './pages/green-craft/herbs/herbs.component';
import { StonesComponent } from './pages/green-craft/stones/stones.component';
import { KitchenComponent } from './pages/hearth-craft/kitchen/kitchen.component';
import { HearthComponent } from './pages/hearth-craft/hearth/hearth.component';
import { HearthMagicComponent } from './pages/hearth-craft/hearth-magic/hearth-magic.component';
import { YearMoonsComponent } from './pages/moon-magic/year-moons/year-moons.component';
import { PhasesComponent } from './pages/moon-magic/phases/phases.component';
import { IntentionsComponent } from './pages/moon-magic/intentions/intentions.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DivinationNavComponent } from './pages/divination/divination-nav/divination-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { GreenCraftNavComponent } from './pages/green-craft/green-craft-nav/green-craft-nav.component';
import { HearthCraftNavComponent } from './pages/hearth-craft/hearth-craft-nav/hearth-craft-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    DivinationComponent,
    GreenCraftComponent,
    HearthCraftComponent,
    MoonMagicComponent,
    SigilsComponent,
    TarotComponent,
    TasseomancyComponent,
    MarksComponent,
    GalleryComponent,
    MajorArcanaComponent,
    MinorArcanaComponent,
    SpreadsComponent,
    SetUpComponent,
    ReadingComponent,
    SeasonsComponent,
    EarthComponent,
    HerbsComponent,
    StonesComponent,
    KitchenComponent,
    HearthComponent,
    HearthMagicComponent,
    YearMoonsComponent,
    PhasesComponent,
    IntentionsComponent,
    NavigationComponent,
    FooterComponent,
    DivinationNavComponent,
    GreenCraftNavComponent,
    HearthCraftNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbLayoutModule,
    NbEvaIconsModule,
    MatToolbarModule,
    LayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
