import React from 'react';
import './register.scss';
import { RegisterBg } from '../../assets';
import { Input, Button, Gap, Link } from '../../components';

const Register = () => {
    return (
        <div className="main-page">
            <div className="left">
                <img src={RegisterBg} className="bg-image" alt="image"/>
            </div>
            <div className="right">
                <p className="title">Register</p>
                <Input label="Full Name" placeholder="Full Name"/>
                <Gap height={13}/>
                <Input label="Email" placeholder="Email"/>
                <Gap height={13}/>
                <Input label="Password" placeholder="Password"/>
                <Gap height={30}/>
                <Button title="Register"/>
                <Gap height={10}/>
                <Link title="Kembali ke login"/>
            </div>
        </div>
    )
}

export default Register;
