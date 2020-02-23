import { connect } from 'react-redux';
import BidForm from '../../components/biddingModal/bidForm';
import addBid from '../../actions/creators/addBid';

const mapDispatchToProps = dispatch => ({
  addBid: bid => dispatch(addBid(bid))
});

const BidFormContainer = connect(
  null,
  mapDispatchToProps
)(BidForm);

export default BidFormContainer;