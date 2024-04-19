
export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
     return true;
    } else {
      return false;
    }
  };

  
  export const validatePhoneNumber = (phoneNumber) => {
    // Regular expression for phone number validation
    const phoneRegex = /^[0-9]{10}$/;
    if (phoneRegex.test(phoneNumber)) {
      return true;
    } else {
      return false;
    }
  };