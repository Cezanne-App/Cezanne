import { connect } from 'react-redux';
import BidChart from '../../components/BidModal/bidChart';

const mapStateToProps = store => ({
  bids: store.bidModal.bids,
});

const BidChartContainer = connect(mapStateToProps)(BidChart);

export default BidChartContainer;
