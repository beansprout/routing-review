
import React, { Component } from 'react';
import { connect } from 'react-redux';
// eslint-disable-next-line
import { Link } from 'react-router-dom';
import { fetchData } from './actions';

class List extends Component {
  componentDidMount() {
    this.props.fetchData();
  }
  render() {
    return(
    <div className="list">
    {this.props.list}
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.list,
  }
};

export default connect(mapStateToProps, { fetchData })(List);


        // {this.props.list.map((item) => {


      // {this.props.list.map((item) => {
      // <span>How do I </span>
      // <Link to="/">
      // {item.actionName}
      // <span> {item.actionObject} in {item.actionWhere} ?</span>
      // </Link>
      // }