import { connect } from 'react-redux';
import imageModal from '../../components/post/imageModal.jsx';

const mapStateToProps = store => ({
  artwork: store.bidModal.artwork,
});

const imageModalContainer = connect(mapStateToProps)(imageModal);

export default imageModalContainer;
