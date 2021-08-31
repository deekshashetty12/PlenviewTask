import {connect} from 'react-redux';
import {insertNewComment} from '../../../redux/Home/HomeAction';
import AddComments from './AddComments';

function mapStateToProps(state) {
    return {}
}

export default connect(
    mapStateToProps,
    {insertNewComment}
)(AddComments)