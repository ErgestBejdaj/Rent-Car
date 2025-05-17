import React, { useState } from "react";
import { Form, FormGroup, Button } from 'reactstrap';
import axios from 'axios';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/register', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Registration successful:', response.data);
      // Mund të ridrejtojmë përdoruesin ose të tregojmë një mesazh suksesi
    } catch (error) {
      console.error('Registration failed:', error.response ? error.response.data : error.message);
      // Mund të tregojmë një mesazh gabimi për përdoruesin
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="register-form">
      <div className="d-flex flex-wrap">
        <FormGroup className='register-input col-md-6'>
          <input
            type='text'
            name='firstName'
            className="form-control"
            placeholder='First Name'
            required
            value={formData.firstName}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup className='register-input col-md-6'>
          <input
            type='text'
            name='lastName'
            className="form-control"
            placeholder='Last Name'
            required
            value={formData.lastName}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup className='register-input col-12'>
          <input
            type='email'
            name='email'
            className="form-control"
            placeholder='Email Address'
            required
            value={formData.email}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup className='register-input col-md-6'>
          <input
            type='password'
            name='password'
            className="form-control"
            placeholder='Password'
            required
            value={formData.password}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup className='register-input col-md-6'>
          <input
            type='password'
            name='confirmPassword'
            className="form-control"
            placeholder='Confirm Password'
            required
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup className='register-button col-12'>
          <Button type="submit" className='btn btn-primary w-100'>Register</Button>
        </FormGroup>
      </div>
    </Form>
  );
}

export default RegisterForm;
