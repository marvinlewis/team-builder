import React from "react";
import { Card, Button, CardTitle, CardText } from 'reactstrap';
 

const PostingForms = props => {
    const member1 = props.member;
    return ( 
        <div>

            {member1.map(member => (
                <div key={member.id}>
                    <Card body className="text-center">
                        <h1>{member.fname}</h1>
                        <CardText>
                            <p>{member.fname}</p>
                            <p>{member.lname}</p>
                            <p>{member.email}</p>
                            <p>{member.role}</p>
                            <p>{member.age}</p>
                        </CardText>
        
                    </Card>

                </div>
            ))}
        </div>
        )
}

export default PostingForms; 