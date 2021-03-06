
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
    console.log(this.props.list);
    return  (
    <div className="list">
        {this.props.list.map((item, i) => {
          return (
            <div key={i}>
              <span>How do I </span>
              <span> {item.actionObject} in {item.actionWhere} ?</span>

            </div>
            );
          })}
    </div>
    );
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