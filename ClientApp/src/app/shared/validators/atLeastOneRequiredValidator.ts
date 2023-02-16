import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const atLeastOneRequiredValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {

  for(let prop in control.value) {
    if(control.value[prop]) {
      return null;
    }
  }

  return { allFieldsEmpty: { value: control.value } };
};
