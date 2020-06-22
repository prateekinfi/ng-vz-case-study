import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


const routes: Routes = [
  {
    path: "floating-banner",
        loadChildren: () =>
      import("./floating-banner/floating-banner.module").then(
        m => m.FloatingBannerModule
      )
  },
  {
    path: "ecommerce-category-page",
    loadChildren: () =>
      import("./ecommerce-category-page/ecommerce-category-page.module").then(
        m => m.EcommerceCategoryPageModule
        )
  },
  {
    path: "service-data-sharing",
    loadChildren: () =>
      import("./service-data-sharing/service-data-sharing.module").then(
        m => m.ServiceDataSharingModule
        )
  },
  {
    path: "input-output-sharing",
    loadChildren: () =>
      import("./input-output-sharing/input-output-sharing.module").then(
        m => m.InputOutputSharingModule
      )
  },
  {
    path: "student-marks",
    loadChildren: () =>
      import("./student-marks/student-marks.module").then(
        m => m.StudentMarksModule
      )
  },
  {
    path: "dynamic-loading",
    loadChildren: () =>
      import("./dynamic-loading/dynamic-loading.module").then(
        m => m.DynamicLoadingModule
      )
  },
  { path: '', redirectTo: '/floating-banner', pathMatch: 'full'},
  { path: '**', redirectTo: '/floating-banner', pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes
  //   ,
  //   {
  //   preloadingStrategy: PreloadAllModules
  // }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
