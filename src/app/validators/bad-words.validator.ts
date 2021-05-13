import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';
import {BAD_WORDS} from '../../assets/bad-words';

export function badWords(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {

    const value = control.value;
    if (!value) {
      return null;
    }
    const valueLowerCase = control.value.toLowerCase();
    const badWordExists = BAD_WORDS.some(badWord => {
      return valueLowerCase.includes(badWord);
    });
    return badWordExists ? {badWord: true} : null;
  };
}
