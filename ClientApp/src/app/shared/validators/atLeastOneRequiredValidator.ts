import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const atLeastOneRequiredValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {

  for(let prop in control.value) {
    // TODO: numbers
    // console.log(control.value[prop]);
    // console.log(control.value[prop] instanceof Number);
    // if(control.value[prop] instanceof Number && control.value[prop] != Number.NaN) {
    //   return null;
    // }
    if(control.value[prop]) {
      return null;
    }
  }

  return { allFieldsEmpty: { value: control.value } };
};
