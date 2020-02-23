import { connect } from 'react-redux';
import BidModal from '../../components/biddingModal/bidModal';

const mapStateToProps = store => ({
  artwork: store.bidModal.artwork,
  bids: store.bidModal.bids,
});

const BidModalContainer = connect(
  mapStateToProps
)(BidModal);

export default BidModalContainer;