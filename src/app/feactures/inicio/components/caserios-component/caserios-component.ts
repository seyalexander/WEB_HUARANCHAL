import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Caserio } from '../../../../shared/data/Inicio/Inicio-Caserios.interface';
import { caseriosHuaranchal } from '../../../../shared/data/Inicio/Inicio-Caserios.data';


@Component({
    selector: 'app-caserios-component',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule
    ],
    templateUrl: './caserios-component.html',
    styleUrl: './caserios-component.css',
})
export class CaseriosComponent {

    busqueda: string = '';

    caserios: Caserio[] = caseriosHuaranchal;

    caserioSeleccionado: Caserio =
        this.caserios[0];


    get caseriosFiltrados(): Caserio[] {

        const texto =
            this.busqueda
                .trim()
                .toLowerCase();

        if (!texto) {
            return this.caserios;
        }

        return this.caserios.filter(
            caserio =>
                caserio.nombre
                    .toLowerCase()
                    .includes(texto)
        );

    }


    seleccionar(caserio: Caserio): void {

        this.caserioSeleccionado =
            caserio;

    }

}