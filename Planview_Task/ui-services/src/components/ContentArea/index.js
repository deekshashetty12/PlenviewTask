import { connect } from "react-redux";
import {fetchCommentsAll} from '../../redux/Home/HomeAction';
import ContentArea from './ContentArea';


function mapStateToProps(state) {
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
    const alldata = state.alldata || defaultVals
    return {alldata:alldata}
}

export default connect(
    mapStateToProps,
    {fetchCommentsAll}
)(ContentArea)