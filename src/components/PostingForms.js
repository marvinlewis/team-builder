import React from "react";
import "./posting.css";

 

const PostingForms = props => {
    const member1 = props.member;
    return ( 
        <div className="posting-cont">
            {member1.map(member => (
                <div className="posting" key={member.id}>
                        <h1>Member</h1>
                            <ul>
                                <li>First Name: {member.fname}</li>
                                <li>Last Name: {member.lname}</li>
                                <li>Email: {member.email}</li>
                                <li>Role: {member.role}</li>
                                <li>Age: {member.age}</li>
                            </ul>
                            <p>{member.bio}</p>
                </div>
            ))}
        </div>
        )
}

export default PostingForms; 