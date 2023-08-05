import React, { useState } from 'react'
import './style.css';
import axios from 'axios'

const Axios = axios.create({
    baseURL:'http://localhost:5000'
})


function UserReg() {



    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [selectedFile, setSelectedFile] = useState();


    const handleName = (event) => {
        event.preventDefault()
        setName(event.target.value)
    }

    const handleEmail = (event) => {
        event.preventDefault()
        setEmail(event.target.value)
    }

    const handlePassword = (event) => {
        event.preventDefault()
        setPassword(event.target.value)
    }

    const handleFileChange = (event) => {
        event.preventDefault()
        const file = event.target.files[0];
        setSelectedFile(file);
    }

    const onSubmit = (event)=>{
        event.preventDefault()
        const userdata = {
            name,
            email,
            password
        }
        console.log(name);
        console.log(email);
        console.log(password);
        console.log(selectedFile);
        Axios.post('./register', userdata)
        .then((response)=>{
            console.log(response);
        }).catch((err)=>{
            console.log(err);
        })
    }

    return (
        <form className='container' style={{ textAlign: 'center', background: '#344541', height: "100vh" }}>
            <div className='header'>
                <h1 style={{ color: 'white' }}>USER REGISTRATION</h1>
            </div>

            <div className='inputdiv'>
                <input onChange={handleName} type="text" className='myInput' placeholder='Enter Your Name' name='name' />
            </div>

            <div className='inputdiv'>
                <input onChange={handleEmail} type="text" className='myInput' placeholder='Enter Your Email' name='email' />
            </div>

            <div className='inputdiv'>
                <input onChange={handlePassword} type="password" className='myInput' placeholder='Enter Your Password' name='password' />
            </div>

            <div>
                <input className='inputdiv' style={{ width: '300px' }} type="file" onChange={handleFileChange} />
            </div>

            <div className='inputdiv'>
                <button onClick={onSubmit} type='submit' className='mybutton'>SUBMIT</button>
            </div>

        </form>
    )
}

export default UserReg