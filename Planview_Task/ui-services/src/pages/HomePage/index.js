import {connect} from 'react-redux';
import {fetchCommentsAll} from '../../redux/Home/HomeAction';
import HomePage from './HomePage';


function mapStateToProps(state) {
    console.log("fetch data:::::::")
    return {}
}

export default connect(
    mapStateToProps,
    {fetchCommentsAll}
)(HomePage)