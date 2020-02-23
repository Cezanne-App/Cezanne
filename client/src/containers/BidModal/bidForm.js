import { connect } from 'react-redux';
import BidForm from '../../components/BidModal/bidForm';
import addBid from '../../actions/creators/addBid';
import setHighestBid from '../../actions/creators/setHighestBid';

const mapStateToProps = store => ({
  highestBid: store.bidModal.highestBid
});

const mapDispatchToProps = dispatch => ({
  addBid: bid => dispatch(addBid(bid)),
  setHighestBid: bid => dispatch(setHighestBid(bid))
});

const BidFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BidForm);

export default BidFormContainer;