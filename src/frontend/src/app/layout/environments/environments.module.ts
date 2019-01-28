import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {MatButtonModule, MatTableModule} from '@angular/material';
import { MatFormFieldModule, MatPaginatorModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';  // replaces previous Http service

import { EnvironmentsRoutingModule } from './environments-routing.module';
import { EnvironmentsComponent } from './environments.component';

@NgModule({
    imports: [
        CommonModule,
        EnvironmentsRoutingModule,
        MatTableModule,
        MatButtonModule,
        MatFormFieldModule,
        MatPaginatorModule,
        MatInputModule,
        HttpClientModule
    ],
    declarations: [EnvironmentsComponent]
})
export class EnvironmentsModule {}
