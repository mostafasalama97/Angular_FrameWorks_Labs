import { AbstractControl } from "@angular/forms";

export function ForbiddenNameValidator(control:AbstractControl)
{
  const forbidden= /admin/.test(control.value);

  return forbidden ? {'forbiddenName':{'value':control.value}} : null;
}


export function ConfirmPasswordValidator(control:AbstractControl)
{
    const password=control.get('password');
    const confirmPassword= control.get('confirmPassword');

   if(password?.pristine || confirmPassword?.pristine)
   {
    return null;
   }
   else
   {
    return password && confirmPassword && password.value != confirmPassword.value
    ? {'misMatch':true}
    :null;
   }
}
