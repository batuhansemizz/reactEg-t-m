import React from "react";
import { useFormik } from "formik";
import { RegisterSemalar } from "../schemas/RegisterSemalar";
import { useState } from "react";

function RegisterFrom() {


    

    const { values, errors, handleChange, handleSubmit } = useFormik({
        initialValues: {
            email: "",
            age: '',
            password: '',
            ConfirmPassword: '',
            term: false, // 'term' boolean olmalı
        },
        validationSchema: RegisterSemalar,
        onSubmit: submit
    });

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email</label>
                    <input type="text" id="email" placeholder="Email Giriniz..." value={values.email} onChange={handleChange}  />
                    {errors.email && <p>{errors.email}</p>}

                </div>

                <div>
                    <label>Yaş</label>
                    <input type="number" id="age" placeholder="Age Giriniz..." value={values.age} onChange={handleChange} />
                    {errors.age && <p>{errors.age}</p>}
                </div>

                <div>
                    <label>Password</label>
                    <input type="password" id="password" placeholder="Password Giriniz..." value={values.password} onChange={handleChange} />
                    {errors.password && <p>{errors.password}</p>}
                </div>

                <div>
                    <label>Again Password</label>
                    <input type="password" id="ConfirmPassword" placeholder="Password Giriniz..." value={values.ConfirmPassword} onChange={handleChange} />
                    {errors.ConfirmPassword && <p>{errors.ConfirmPassword}</p>}
                </div>

                <div>
                    <label>Kullanıcı Sözleşmesini kabul ediyorum</label>
                    <input type="checkbox" id="term" checked={values.term} onChange={handleChange} />
                    {errors.term && <p>{errors.term}</p>}
                </div>

                <div>
                    <button type="submit">Kaydet</button>
                </div>
            </form>
        </div>
    );
}

export default RegisterFrom;
