import React, { useState } from "react";
import "../components/forms.css";



function Forms (props) {


const [ input, setInput ] = useState({
    fname: "",
    lname: "",
    email: "",
    role: "",
    age: "",
    bio: "",
});

const handleChange = (e) => {
    setInput({...input, [e.target.name]: e.target.value})};

const handleSubmit = (e) => {
    e.preventDefault();
    props.addNewMember(input);
    setInput({
        fname: "",
        lname: "",
        email: "",
        role: "",
        age: ""  ,
        bio: ""
    })

}

return (
<div className="inputbox">
    <form className="forms" onSubmit={handleSubmit}>
        <label>
            First Name:  
                <input onChange={handleChange} value={input.fname} placeholder= " First Name" id= "fname" name="fname" type="text" />
        </label>
        <label>
            Last Name:  
                <input onChange={handleChange} value={input.lname} placeholder= " Last Name" id= "lname" name="lname" type="text" />
        </label>
        <label>
            Email:  
                <input onChange={handleChange} value={input.email} placeholder= " Email" id= "email" name="email" type="text" />
        </label>
        <label>
            Age:  
                <input onChange={handleChange} value={input.age} placeholder= "age" id= "age" name="age" type="number" />
        </label>
        <label>
            Role:  
                <input onChange={handleChange} value={input.role} placeholder= "role" id= "role" name="role" type="text" />
        </label>
        <label>
            Bio:  
                <input onChange={handleChange} value={input.bio} placeholder= "Bio" id= "bio" name="bio" type="textarea" />
        </label>
        <button type="submit">Submit</button>
    </form>
</div>
)
}

export default Forms;