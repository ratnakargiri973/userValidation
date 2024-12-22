export function validateInput(req, res, next) {
    const { firstName, lastName, password, email, phone } = req.body;
  
    const nameRegex = /^[A-Z][a-z]*$/;
    if (!nameRegex.test(firstName)) {
      return next(new Error("First name must start with an uppercase letter."));
    }
    if (!nameRegex.test(lastName)) {
      return next(new Error("Last name must start with an uppercase letter."));
    }
  
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      return next(new Error("Password must contain at least 8 characters, including one uppercase letter, one number, and one special character."));
    }
  
    if (!email.includes("@")) {
      return next(new Error("Email must contain an '@' symbol."));
    }
  
    if (!/^\d{10,}$/.test(phone)) {
      return next(new Error("Phone number must be at least 10 digits long."));
    }
  
    next();
  }
  
  
  