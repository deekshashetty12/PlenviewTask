import React from "react";
import AddComments from "./AddComments";
import DisplayComments from "./DisplayComments";
import './Comments.scss';

export default function Comments(props) {
    return (
        <div className="disply-comment-section">
            <div className="comment-header"> Comments </div>
            <AddComments/>
            <hr/>
            <DisplayComments />
            
        </div>
        
    )
}