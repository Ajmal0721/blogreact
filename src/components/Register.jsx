import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../redux/UserSlice';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        // Dispatch registration action
        dispatch(createUser({ email: formData.email, password: formData.password }))
            .unwrap()
            .then(() => {
                alert('Registration successful!');
                setFormData({
                    email: '',
                    password: '',
                    confirmPassword: '',
                });
                navigate("/");
            })
            .catch((error) => {
                console.error('Registration error:', error);
                alert('Registration failed: ' + (error.message || 'Unknown error'));
            });
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-">
                    <div
                        className="card"
                        style={{
                            backgroundColor: '#FFFFFF', // White background
                            color: '#F8BBD0', // Aerial pink text
                            width: '400px',
                        }}
                    >
                        <div
                            className="card-header text-center"
                            style={{
                                backgroundColor: '#F8BBD0', // Aerial pink header
                                color: '#FFFFFF', // White text
                                border: 'none',
                            }}
                        >
                            <h4 className="mb-0">Register</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label
                                        htmlFor="email"
                                        className="form-label"
                                        style={{ color: '#F8BBD0' }} // Aerial pink label
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control border-secondary"
                                        id="email"
                                        placeholder="Enter your email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        style={{
                                            backgroundColor: '#FFFFFF', // White input background
                                            color: '#F8BBD0', // Aerial pink text
                                            borderColor: '#F8BBD0',
                                        }}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="password"
                                        className="form-label"
                                        style={{ color: '#F8BBD0' }} // Aerial pink label
                                    >
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control border-secondary"
                                        id="password"
                                        placeholder="Enter your password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        style={{
                                            backgroundColor: '#FFFFFF', // White input background
                                            color: '#F8BBD0', // Aerial pink text
                                            borderColor: '#F8BBD0',
                                        }}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="confirmPassword"
                                        className="form-label"
                                        style={{ color: '#F8BBD0' }} // Aerial pink label
                                    >
                                        Confirm Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control border-secondary"
                                        id="confirmPassword"
                                        placeholder="Confirm your password"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        style={{
                                            backgroundColor: '#FFFFFF', // White input background
                                            color: '#F8BBD0', // Aerial pink text
                                            borderColor: '#F8BBD0',
                                        }}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="btn w-100"
                                    style={{
                                        backgroundColor: '#F8BBD0', // Aerial pink button
                                        color: '#FFFFFF', // White text
                                        borderColor: '#F8BBD0',
                                    }}
                                >
                                    Register
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;
