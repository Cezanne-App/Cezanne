import { connect } from 'react-redux';
import BidModal from '../../components/BidModal/index';

const mapStateToProps = store => ({
  artwork: store.bidModal.artwork,
  bids: store.bidModal.bids,
  highestBid: store.bidModal.highestBid
});

const BidModalContainer = connect(
  mapStateToProps
)(BidModal);

export default BidModalContainer;