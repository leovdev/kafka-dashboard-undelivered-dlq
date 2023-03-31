import { NgModule } from '@angular/core'
import { MatTableModule } from '@angular/material/table'
import { MatIconModule} from '@angular/material/icon'
import { MatSortModule, Sort } from '@angular/material/sort'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatDialogModule } from '@angular/material/dialog'

@NgModule({
    declarations:[

    ],
    imports: [
        MatTableModule,
        MatIconModule,
        MatSortModule,
        MatTableModule,
        MatPaginatorModule,
        MatDialogModule,
    ],
    exports: [
        MatTableModule,
        MatIconModule,
        MatSortModule,
        MatTableModule,
        MatPaginatorModule,
        MatDialogModule,
    ]
})
export class NgMaterialModule { }