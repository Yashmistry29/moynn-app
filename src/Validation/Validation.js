export function SignupValidate(values) {
  let errors = {};

  //Name Errors
  if (!values.firstname) {
    errors.firstname = "A firstname is required.";
  }
  if (!values.lastname) {
    errors.lastname = "A Last Name is required.";
  }
  // Email Errors
  if (!values.email) {
    errors.email = "Your email is required.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Your email is invalid.";
  }

  // Password Errors
  if (!values.password) {
    errors.password = "A password is required.";
  } else if (values.password.length < 6) {
    errors.password = "Your password must be at least 6 characters.";
  }

  if(!values.confirmPassword){
    errors.confirmPassword = "A password is required.";
  }else if(values.password!==values.confirmPassword){
    errors.confirmPassword="Password Mismatches"
  }

  if(values.privacyChecked===false){
    errors.privacyChecked="Please Accept Terms of use and Privacy Policy"
  }
  return errors;
}

export function informationValidate(values){
  let errors = {};
  
  if(!values.country){
    errors.country="Select a Country"
  }if(!values.city){
    errors.city="select a City"
  }if(!values.Visa){
    errors.visa="Select your Visa Status"
  }if(!values.date){
    errors.date="Enter Date"
  }if(!values.mobile){
    errors.mobile="Enter Mobile number"
  }if(values.notice<=0){
    errors.notice="Enter Notice Period"
  }

  return errors;
}

export function careerValidation(values){
  let errors = {};
  
  if(!values.career){
    errors.career="Select your Career Level"
  }if(!values.industry){
    errors.industry="select your industry"
  }if(values.skills.length===0){
    errors.skills="Select your Skills"
  }if(values.experienceList.length===0){
    errors.experience="Select your Experience"
  }if(values.languageList.length===0){
    errors.language="Select your Language set"
  }

  return errors; 
}