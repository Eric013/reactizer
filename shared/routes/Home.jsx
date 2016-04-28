import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as todoActions from './../redux/ducks/todoDuck';
import todoSagas from './../redux/sagas/todoSagas';

import TodosView from './../modules/Todo/TodosView';
import TodosForm from './../modules/Todo/TodosForm';

@connect(state => ({
  todos: state.todos
}))
export default class Home extends Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    todos: PropTypes.object,
    dispatch: PropTypes.func
  };

  static needs = [
    todoSagas.fetchTodos
  ];

  render() {
    const { todos, dispatch } = this.props;

    return (
      <div id="todo-list">
        <TodosView
          todos={todos}
          {...bindActionCreators(todoActions, dispatch)}
        />
        <TodosForm
          {...bindActionCreators(todoActions, dispatch)}
        />
      </div>
    );
  }
}
