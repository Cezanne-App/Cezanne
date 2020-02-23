import { connect } from 'react-redux';
import BidChart from '../../components/biddingModal/biddingChart';

const mapStateToProps = store => ({
  bids: store.bidModal.bids,
});

const BidChartContainer = connect(
  mapStateToProps
)(BidChart);

export default BidChartContainer;