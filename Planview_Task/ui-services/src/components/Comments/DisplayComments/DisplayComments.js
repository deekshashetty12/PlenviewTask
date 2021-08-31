import React, {useEffect, useState} from 'react';
import cross from '../../../assets/images/cross.svg'
import './DisplayComments.scss'


export default function DisplayComments(props) {
  
    const [comments, updateComments] = useState([])

    let deleteComment = (id) => {
        let newList = [...comments]
        let index = -1
        let del_id = -1 
        newList.forEach(function(v, i){
            if (v[0] === id) {
                index = i
                del_id = v[0]
            }
        })
        if (index > -1) {
            props.deleteSelComment({id:del_id})
            newList.splice(Number(index), 1);
            
        }
        updateComments(newList)
    }

    useEffect(() =>{
        updateComments(props.allcomments)
    }, [props.allcomments])

    const list = comments? comments.map((comment) => {
        return (
            <div className="display-comments">
                <div  className="display-header">
                    <div className="display-name-time">
                        {comment[2]},&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i>{comment[3]}</i>
                    </div>
               
                    <div className="image-holder">
                        <img src={cross} alt="Bootstrap" width="12" height="12" className="delete-button" onClick={() => deleteComment(comment[0])}/>
                    </div>
                </div>
                <div>
                    {comment[1]}
                </div>
                
            </div>
        )
    }) : <div>Loading</div>
    return (
        <div>
            {list}
        </div>

    )
}