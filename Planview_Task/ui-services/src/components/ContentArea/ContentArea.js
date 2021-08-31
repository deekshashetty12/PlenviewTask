import React, { useEffect, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import arrowrepeat from '../../assets/images/arrowrepeat.svg';
import emoticonsmile from '../../assets/images/emoticonsmile.svg';
import './ContentArea.scss';

export default function ContentArea(props) {
    let defaultVals = {
        "prediction": "green",
        "prediction_details": {
            "confidence": 81,
            "finish_date": "Dec 13, 2021"
        },
        "progress_date": "31/08/2021",
        "run_id": 46,
        "run_ts": "31/08/2021"
    }

    let [data, setData] = useState(defaultVals);

    function refreshPage(){
        props.fetchCommentsAll()
    }

    useEffect(()=>{
        setData( props.alldata)
    }, [props.alldata])
    return (
        <div className="dispaly-container">
            <div className="display-header">
                <div className="display-content">
                    # {data.run_id} date of run : <b>{data.run_ts}</b>
                </div>
                <div className="display-content">
                    Progress Date : <b>{data.progress_date}</b>
                </div>
                <div className="image-holder">
                    <img className="rifresh-button" src={arrowrepeat} alt="Bootstrap" onClick={refreshPage} width="20" height="20"/>
                </div>
            </div>
            <Alert variant={"danger" } className="alert-box">
                <img src={emoticonsmile} alt="Bootstrap" width="40" height="40" className=""/>&nbsp;&nbsp; Your project is at risk!.
            </Alert>
            <div className="display-content-message">
                Your confidence of finishing on <b>{data.prediction_details.finish_date}</b> is <b>{data.prediction_details.confidence}%</b>
            </div>
            <div className="display-content-message">
                Pay attention to highlighted risk in your plan
            </div>  
        </div>
    )
}