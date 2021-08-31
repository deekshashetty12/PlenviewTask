import React, {useState} from 'react';
import {Form} from 'react-bootstrap';
import './AddComments.scss'


export default function AddComments(props) {
    let [comment, setComment] = useState('')
    let [user, setUser] = useState('')

    function updateComments(vals) {
        setComment(vals.target.value)
    }

    function updateUser(vals) {
        setUser(vals.target.value)
    }

    function insertComment(){
        props.insertNewComment({'comment': comment, 'user':user})
    }

    return (
        <>
            <Form style={{padding:'1rem'}}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Enter Comments</Form.Label>
                    <Form.Control as="textarea" rows={3} value = {comment} onChange={(e) => updateComments(e)}/>
                </Form.Group>
        
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>User</Form.Label>
                    <Form.Control type="text" value={user} onChange={(e) => updateUser(e)} />
                </Form.Group>
                 
            </Form> 
            <button type="button" class="btn btn-primary insert-comments" onClick={insertComment}>Insert Comment</button>
        </>
    )
}