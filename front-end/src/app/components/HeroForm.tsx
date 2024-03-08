import React, { useState, FormEvent } from 'react';

interface FormData {
    email: string;
    password: string;
}

const HeroForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        email: '',
        password: '',
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert("account information submitted.")
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='Email Address'
                />
            </label>
            <br />

            <label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder='Password'
                />
            </label>
            <br />


            <button type="submit">Create account</button>
        </form>
    );
};

export default HeroForm;
