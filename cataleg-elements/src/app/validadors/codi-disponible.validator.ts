import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { ElementService } from '../serveis/element.service';

/**
 * Validador asíncron que comprova si un codi d'element està disponible
 */
export function codiDisponibleValidator(elementService: ElementService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
        if (!control.value) {
            return of(null);
        }

        return of(control.value).pipe(
            delay(500),  // Simula latència de xarxa
            map(async (codi: string) => {
                const disponible = await elementService.codiDisponible(codi);
                return disponible ? null : { codiNoDisponible: { value: codi } };
            })
        ) as Observable<ValidationErrors | null>;
    };
}