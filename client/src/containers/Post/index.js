import { connect } from 'react-redux';
import Post from '../../components/Post/index';
import setArtwork from '../../actions/creators/setArtwork';
import setBids from '../../actions/creators/setBids';

const mapDispatchToProps = dispatch => ({
  setArtwork: artwork => dispatch(setArtwork(artwork)),
  setBids: bids => dispatch(setBids(bids))
});

const PostContainer = connect(
  null,
  mapDispatchToProps
)(Post);

export default PostContainer;