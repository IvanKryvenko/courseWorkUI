import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
    exports: [
        MatButtonModule,
        MatSelectModule,
        MatTableModule,
        MatIconModule,
        MatDialogModule,
        MatInputModule,
        MatTabsModule
    ],
    imports: [],
    providers: [
        MatDialog,
        MatSnackBar
    ]
})
export class AppMaterialModule {
}
