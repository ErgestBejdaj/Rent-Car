
import React from 'react'
import '../../styles/find-car-form.css';
import { Form, FormGroup} from 'reactstrap';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom"


const FindCarForm = () => {
    return (
        <Form className='form'>
            <div className='d-flex align-items-center justify-content-between flex-wrap'>
                <FormGroup className='form__group'>
                    <p>Pick Up Date</p>
                    <input type='date' placeholder='Pick up Date' required />
                </FormGroup>
                <FormGroup className='form__group'>
                    <p>Drop Off Date</p>
                    <input type='Date' placeholder='Drop Off Date' required />
                </FormGroup>
                <FormGroup className='form__group'>
                    <p>Time On</p>
                    <input type='time' placeholder='Time' required />
                </FormGroup>
                <FormGroup className='form__group'>
                    <p>Time Off</p>
                    <input type='time' placeholder='Time Off' required />
                </FormGroup>
                <FormGroup className='select__group'>
                <Link to='/cars'><button className='btn find__car-btn'>Find Car</button></Link>
                </FormGroup>

            </div>
        </Form>
    )
    
}
export default FindCarForm;