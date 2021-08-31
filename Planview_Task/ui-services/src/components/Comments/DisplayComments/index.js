import {connect} from 'react-redux';
import {deleteSelComment} from '../../../redux/Home/HomeAction';
import DisplayComments from './DisplayComments';


function mapStateToProps(state) {
    console.log("   TSATE:::::::::::::::::::", state)
    const allcomments = state.AllComments || []
    return {allcomments:allcomments}
}

export default connect(
    mapStateToProps,
    {deleteSelComment}
)(DisplayComments)