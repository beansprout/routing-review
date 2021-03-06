
import React, { Component } from 'react';
import { connect } from 'react-redux';
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
      <div>
        {this.props.list.map((item) => {
          return (
          <ul>
          <li>{item.actionName}</li>
          <li>{item.actionObject}</li>
          <li>{item.actionWhere}</li>
          </ul>
          )
        })};
      </div>
     </div>
    )
    }
  };

const mapStateToProps = (state) => {
  return {
    list: state.list,
  }
};

export default connect(mapStateToProps, { fetchData })(List);




      // <span>How do I </span>
      // <Link to="/">
      // {item.actionName}
      // <span> {item.actionObject} in {item.actionWhere} ?</span>
      // </Link>
      // }