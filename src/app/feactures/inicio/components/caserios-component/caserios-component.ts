import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { Caserio } from '../../../../shared/data/Inicio/Inicio-Caserios.interface';
import { caseriosHuaranchal } from '../../../../shared/data/Inicio/Inicio-Caserios.data';

@Component({
    selector: 'app-caserios-component',
    standalone: true,
    imports: [
        CommonModule,
        RouterLink
    ],
    templateUrl: './caserios-component.html',
    styleUrl: './caserios-component.css',
})
export class CaseriosComponent {

    caserios: Caserio[] = caseriosHuaranchal;

    filaSuperior: Caserio[] = this.caserios.slice(0, 11);

    filaInferior: Caserio[] = this.caserios.slice(11);

}
