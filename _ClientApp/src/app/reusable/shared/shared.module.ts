import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AngularResizeEventModule } from 'angular-resize-event';

//Angular material
import { MatCardModule } from '@angular/material/card'
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatIconModule } from '@angular/material/icon'
import { MatIconRegistry } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list'
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatDialogModule } from '@angular/material/dialog'
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatTooltipModule } from '@angular/material/tooltip'
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core'
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MomentDateModule } from '@angular/material-moment-adapter';
import { MatTabsModule } from '@angular/material/tabs';
import { LayoutModule } from '@angular/cdk/layout'
import { DomSanitizer } from '@angular/platform-browser';
import { MultilevelMenuService, NgMaterialMultilevelMenuModule } from 'ng-material-multilevel-menu';
import {MatSortModule} from '@angular/material/sort';

//KENDO UI
import { GridModule } from '@progress/kendo-angular-grid';
import { DialogModule } from "@progress/kendo-angular-dialog";
import { InputsModule } from "@progress/kendo-angular-inputs";
import { LabelModule } from "@progress/kendo-angular-label";
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { WindowModule } from "@progress/kendo-angular-dialog";
import { IconModule } from '@progress/kendo-angular-icons'
import { DropDownListModule } from '@progress/kendo-angular-dropdowns'
import { TooltipsModule } from "@progress/kendo-angular-tooltip";
import { DatePickerModule } from '@progress/kendo-angular-dateinputs';
import { LayoutModule as KendoLayout } from '@progress/kendo-angular-layout';
import { ChartsModule } from "@progress/kendo-angular-charts";

// Custom services
import { TokenInterceptorService } from 'src/app/services/interceptors/token-interceptor.service';
import { UtilityService } from './utility.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule, 
    FormsModule,
    HttpClientModule,
    AngularResizeEventModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    MatTabsModule,
    MomentDateModule,
    GridModule,
    DialogModule,
    InputsModule,
    LabelModule,
    ButtonsModule,
    WindowModule,
    IconModule,
    DropDownListModule,
    TooltipsModule,
    DatePickerModule,
    ChartsModule,
    KendoLayout,
    NgMaterialMultilevelMenuModule,
    MatSortModule,
    LayoutModule
  ],
  providers: [
    MatDatepickerModule,
    MatIconRegistry,
    MultilevelMenuService,
    MatNativeDateModule,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    {
      provide: MatDialogRef,
      useValue: UtilityService
    },
  ]
})
export class SharedModule {
  constructor(
    private registerIcon: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    /* ADD CUSTOM ICONS HERE */
    this.registerIcon.addSvgIconLiteral('home', this.domSanitizer.bypassSecurityTrustHtml('<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><rect x="0" y="0" width="24" height="24" fill="none" stroke="none" /><path fill="white" d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z"/></svg>'));
    this.registerIcon.addSvgIconLiteral('excelIcon', this.domSanitizer.bypassSecurityTrustHtml('<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px" fill="#4CAF50"><path fill="#4CAF50" d="M41,10H25v28h16c0.553,0,1-0.447,1-1V11C42,10.447,41.553,10,41,10z"/><path fill="#FFF" d="M32 15H39V18H32zM32 25H39V28H32zM32 30H39V33H32zM32 20H39V23H32zM25 15H30V18H25zM25 25H30V28H25zM25 30H30V33H25zM25 20H30V23H25z"/><path fill="#2E7D32" d="M27 42L6 38 6 10 27 6z"/><path fill="#FFF" d="M19.129,31l-2.411-4.561c-0.092-0.171-0.186-0.483-0.284-0.938h-0.037c-0.046,0.215-0.154,0.541-0.324,0.979L13.652,31H9.895l4.462-7.001L10.274,17h3.837l2.001,4.196c0.156,0.331,0.296,0.725,0.42,1.179h0.04c0.078-0.271,0.224-0.68,0.439-1.22L19.237,17h3.515l-4.199,6.939l4.316,7.059h-3.74V31z"/></svg>'));
    this.registerIcon.addSvgIconLiteral('excelIcon2', this.domSanitizer.bypassSecurityTrustHtml('<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><rect x="0" y="0" width="24" height="24" fill="none" stroke="none" /><path fill="#43a047" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6m1.8 18H14l-2-3.4l-2 3.4H8.2l2.9-4.5L8.2 11H10l2 3.4l2-3.4h1.8l-2.9 4.5l2.9 4.5M13 9V3.5L18.5 9H13Z"/></svg>'))
    this.registerIcon.addSvgIconLiteral('pdfIcon', this.domSanitizer.bypassSecurityTrustHtml('<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 40 40"><rect x="0" y="0" width="40" height="40" fill="none" stroke="none" /><g fill="#f44336"><path d="M14.105 20.35c0-.76-.528-1.214-1.459-1.214c-.38 0-.637.037-.772.073v2.441c.16.036.356.049.625.049c.993 0 1.606-.503 1.606-1.349zm5.766-1.19c-.417 0-.687.037-.847.074v5.408c.16.037.417.037.65.037c1.692.012 2.796-.92 2.796-2.894c.013-1.717-.993-2.625-2.599-2.625z"/><path d="M30.918 15.983h-.678v-3.271a.448.448 0 0 0-.006-.062a.545.545 0 0 0-.131-.359L24.66 6.075l-.004-.004a.566.566 0 0 0-.255-.159l-.03-.01a.539.539 0 0 0-.127-.016H10.867c-.611 0-1.107.497-1.107 1.107v8.99h-.678c-.874 0-1.582.708-1.582 1.582v8.228c0 .873.709 1.582 1.582 1.582h.678v5.633c0 .61.496 1.107 1.107 1.107h18.266c.61 0 1.107-.497 1.107-1.107v-5.633h.678c.874 0 1.582-.709 1.582-1.582v-8.228c0-.874-.709-1.582-1.582-1.582zm-20.051-8.99H23.69v5.664c0 .306.248.553.554.553h4.89v2.773H10.867v-8.99zm13.59 14.73c0 1.582-.576 2.674-1.375 3.348c-.87.723-2.194 1.067-3.813 1.067c-.969 0-1.655-.062-2.122-.122v-8.119c.687-.11 1.582-.171 2.527-.171c1.569 0 2.587.282 3.384.883c.859.637 1.399 1.655 1.399 3.114zm-14.436 4.33v-8.156c.576-.098 1.386-.171 2.526-.171c1.153 0 1.975.221 2.526.662c.527.417.882 1.104.882 1.913c0 .81-.269 1.496-.76 1.962c-.638.601-1.582.871-2.686.871c-.245 0-.466-.012-.637-.037v2.956h-1.851zm19.112 6.655H10.867v-5.333h18.266v5.333zm1.604-13.388H27.56v1.889h2.968v1.521H27.56v3.323h-1.875v-8.266h5.052v1.533z"/></g></svg>'));
    this.registerIcon.addSvgIconLiteral('material-list', this.domSanitizer.bypassSecurityTrustHtml('<?xml version="1.0" ?><svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 6.75C2 5.23122 3.23122 4 4.75 4H19.25C20.7688 4 22 5.23122 22 6.75V17.25C22 18.7688 20.7688 20 19.25 20H12.4749L10.4253 17.9504C10.7931 17.2126 11 16.3805 11 15.5H15.25C15.6642 15.5 16 15.1642 16 14.75C16 14.3358 15.6642 14 15.25 14H10.793C10.6408 13.4619 10.4088 12.9574 10.1105 12.5H17.25C17.6642 12.5 18 12.1642 18 11.75C18 11.3358 17.6642 11 17.25 11H8.66308C7.76841 10.37 6.67741 10 5.5 10C4.17037 10 2.95094 10.4718 2 11.2572V6.75ZM6.75 8C6.33579 8 6 8.33579 6 8.75C6 9.16421 6.33579 9.5 6.75 9.5H13.25C13.6642 9.5 14 9.16421 14 8.75C14 8.33579 13.6642 8 13.25 8H6.75Z" fill="#fff"/><path d="M5.5 20C6.47187 20 7.37179 19.6919 8.1074 19.1681L10.7197 21.7803C11.0126 22.0732 11.4874 22.0732 11.7803 21.7803C12.0732 21.4874 12.0732 21.0126 11.7803 20.7197L9.16806 18.1074C9.69191 17.3718 10 16.4719 10 15.5C10 13.0147 7.98528 11 5.5 11C3.01472 11 1 13.0147 1 15.5C1 17.9853 3.01472 20 5.5 20ZM5.5 18.5C3.84315 18.5 2.5 17.1569 2.5 15.5C2.5 13.8431 3.84315 12.5 5.5 12.5C7.15685 12.5 8.5 13.8431 8.5 15.5C8.5 17.1569 7.15685 18.5 5.5 18.5Z" fill="#fff"/></svg>'));
    /* ------------------------------------------- */
  }
}
