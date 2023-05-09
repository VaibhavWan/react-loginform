import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function ModalPop() {
  const intialValues = { email: '', password: '' };

  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {
    console.log(formValues);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmitting(true);
  };

  const validate = (values) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = 'Cannot be blank';
    } else if (!regex.test(values.email)) {
      errors.email = 'Invalid email format';
    }

    if (!values.password) {
      errors.password = 'Cannot be blank';
    } else if (values.password.length < 4) {
      errors.password = 'Password must be more than 4 characters';
    }

    return errors;
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      submit();
    }
  }, [formErrors]);

  return (
    <div className="container">
      <h1>Sign in to continue</h1>
      {Object.keys(formErrors).length === 0 && isSubmitting && (
        <span className="success-msg">Form submitted successfully</span>
      )}
      {/* <form onSubmit={handleSubmit} noValidate>
        <div className="form-row">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formValues.email}
            onChange={handleChange}
            className={formErrors.email && 'input-error'}
          />
          {formErrors.email && (
            <span className="error">{formErrors.email}</span>
          )}
        </div>

        <div className="form-row">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formValues.password}
            onChange={handleChange}
            className={formErrors.password && 'input-error'}
          />
          {formErrors.password && (
            <span className="error">{formErrors.password}</span>
          )}
        </div>

        <button type="submit">Sign In</button>
      </form> */}
      <form class="row g-3 needs-validation" novalidate>
        <div class="col-md-6">
          <label for="validationCustom01" class="form-label">
            Email
          </label>
          <input
            type="text"
            class="form-control"
            id="validationCustom01"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            required
          />
        </div>
        <div class="col-md-6">
          <label for="validationCustom02" class="form-label">
            password
          </label>
          <input
            type="text"
            class="form-control"
            id="validationCustom02"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            required
          />
        </div>
        <div class="col-12">
          <button class="btn btn-primary" type="submit">
            Submit form
          </button>
        </div>
      </form>
    </div>
  );
}

export default ModalPop;
