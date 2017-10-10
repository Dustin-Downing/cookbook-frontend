import React from 'react';
import { connect } from 'react-redux';

import { NavBar } from '../../_components';


class ListPage extends React.Component {
  constructor(props) {
    super(props);
    this.onClear = this.onClear.bind(this);
  }

  onClear() {
    this.props.dispatch(recipeActions.clearSelected());
  }

  render() {
    return (
      <div className="col-md-10 col-md-offset-1">
        <NavBar onClear={this.onClear}/>
        <h1 style={{textAlign: "center"}}>Shopping List</h1>
        <p>Comming soon...</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

const connectedListPage = connect(mapStateToProps)(ListPage);
export { connectedListPage as ListPage };
