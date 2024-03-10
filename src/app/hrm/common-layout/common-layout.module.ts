import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppFooterComponent } from 'src/app/layout/app.footer.component';
import { AppMenuComponent } from 'src/app/layout/app.menu.component';
import { AppMenuitemComponent } from 'src/app/layout/app.menuitem.component';
import { AppSidebarComponent } from 'src/app/layout/app.sidebar.component';
import { AppTopBarComponent } from 'src/app/layout/app.topbar.component';



@NgModule({
  declarations: [
    AppMenuitemComponent,
    AppTopBarComponent,
    AppFooterComponent,
    AppMenuComponent,
    AppSidebarComponent],
  imports: [
    CommonModule
  ]
})
export class CommonLayoutModule { }
