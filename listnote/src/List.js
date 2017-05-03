import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchData } from './actions';

class List extends Component {
  componentDidMount() {
    this.props.fetchData();
    //updates state - send http request,  updated state available after promise fulfilled
  }
  render() {
    return  (
    <div>
      <ul>
        {this.props.list.map((item, i) => {
          return (
            <li key={i}>
              <Link to="/">
                {item.actionName}
              </Link>
            </li>
            );
          })}
      </ul>
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.list,
  };
};


export default connect(mapStateToProps, { fetchData })(List);

