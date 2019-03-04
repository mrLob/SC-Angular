import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from '@app/guards/auth.guard';

const routes: Routes = [
  {path: '', loadChildren: './modules/home/home.module#HomeModule'},
  {path: 'auth', loadChildren: './modules/auth/auth.module#AuthModule'},
  {path: 'admin', loadChildren: './modules/admin/admin.module#AdminModule', canActivate: [AuthGuard]},
  {path: 'teacher', loadChildren: './modules/teacher/teacher.module#TeacherModule', canActivate: [AuthGuard]},
  {path: 'student', loadChildren: './modules/student/student.module#StudentModule', canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
