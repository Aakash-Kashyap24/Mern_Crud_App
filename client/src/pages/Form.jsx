import React, { useEffect, useState } from 'react';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addData, clearErrors } from '../actions/ProductAction';
import Loader from '../layout/Loader';
import './form.css'

const Form = () => {
    const Navigate = useNavigate();
    const { error, loading } = useSelector((state) => state.Data);
    const alert = useAlert();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        email: 'aakashuiuxd@gmail.com',
        hobbies: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form validation and API call to save the data
        // You can use the formData state to send the data to the backend API
        // Reset the form fields after submission

        dispatch(addData(formData));
        Navigate('/');
    };
    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
    }, [error])
    console.log("formData", formData)
    return (
        <>
            {
                loading ? (

                    <Loader />
                ) : (


                    <form className='form-container' onSubmit={handleSubmit}>
                        <div className='form'>
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="phoneNumber">Phone Number:</label>
                            <input
                                type="tel"
                                id="phoneNumber"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="hobbies">Hobbies:</label>
                            <textarea
                                id="hobbies"
                                name="hobbies"
                                value={formData.hobbies}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button className='submit-button' type="submit">Save</button>
                    </form>
                )
            }

        </>

    );
};

export default Form;
