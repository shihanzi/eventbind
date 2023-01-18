import { FormControl, FormGroup } from "@angular/forms";

export class validateForm{
    static validateAllFormFeilds(formGroup: FormGroup) {
        Object.keys(formGroup.controls).forEach(field => {
          const control = formGroup.get(field);
          if (control instanceof FormControl) {
            control.markAsDirty({ onlySelf: true });
          } else if (control instanceof FormGroup) {
            this.validateAllFormFeilds(control)
          }
        })
      }
}