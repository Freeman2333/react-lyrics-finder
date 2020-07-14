const reducer = (state, action) => {
  switch (action.type) {
    case 'SEARCH_TRACKS':
      return {
        ...state,
        track_list: action.payload,
        heading: 'Search Results'
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    track_list: [],
    heading: 'Top 10 Tracks'
    heading: 'Top 10 Tracks',
    dispatch: action => this.setState(state => reducer(state, action))
  };

  componentDidMount() {