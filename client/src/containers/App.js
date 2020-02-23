import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = state => ({
  artwork: null,
  bids: []
});

const AppContainer = connect(mapStateToProps)(App);

export default AppContainer;