import React from 'react';
import { LoginBg } from '../../assets';
import { Input, Button, Gap, Link } from '../../components';
import {useHistory} from 'react-router-dom';

const Login = () => {

    const history = useHistory();

    return (
        <div className="main-page">
            <div className="left">
                <img src={LoginBg} className="bg-image" alt="image"/>
            </div>
            <div className="right">
                <p className="title">Login</p>
                <Input label="Email" placeholder="Email"/>
                <Gap height={13}/>
                <Input label="Password" placeholder="Password"/>
                <Gap height={30}/>
                <Button title="Login" onClick={() => history.push('/')}/>
                <Gap height={10}/>
                <Link title="Belum punya akun?" onClick={() => history.push('/register')}/>
            </div>
        </div>
    )
}

export default Login;
