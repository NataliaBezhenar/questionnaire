export default function formValidation() {
  const { firstName, lastName, birthDate, phone, site } = this.state;
  let isValid = true;
  const errors = {};
  const regexp = /^[A-Z]/;
  const phoneRegexp = /^\d+$/;
  const siteRegexp = /^https:\/\//;

  if (firstName.trim().length === 0) {
    errors.firstNameIsRequired = "First name is required";
    isValid = false;
  } else if (!regexp.test(firstName)) {
    errors.firstNameFirstLetter =
      "First name should start with the uppercase symbol";
    isValid = false;
  }
  if (lastName.trim().length === 0) {
    errors.lastNameIsRequired = "Last name is required";
    isValid = false;
  } else if (!regexp.test(lastName)) {
    errors.lastNameFirstLetter =
      "Last name should start with the uppercase symbol";
    isValid = false;
  }
  if (birthDate === "") {
    errors.birthDateIsEmpty = "Birth date is required";
    isValid = false;
  }
  if (phone === "") {
    errors.phoneIsEmpty = "Phone number is required";
    isValid = false;
  }
  if (phone.length > 12) {
    errors.phoneLimitExceed = "Phone number can contain 12 symbols max";
    isValid = false;
  }
  if (!phoneRegexp.test(phone.replace("-", ""))) {
    errors.phoneWrongFormat =
      "Please enter numbers only or enter value according format 7-7777-77-77";
    isValid = false;
  }
  if (site === "") {
    errors.siteIsEmpty = "Site address is required";
    isValid = false;
  }
  if (!siteRegexp.test(site)) {
    errors.siteNotValid = "Site address should start with https:// ";
    isValid = false;
  }

  this.setState({ errors });
  return isValid;
}
