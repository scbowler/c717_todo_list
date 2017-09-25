import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAll } from '../actions'; // '../actions/index'
import ListItem from './list_item';

class TodoList extends Component {
    componentWillMount(){
        this.props.getAll();
    }

    render(){
        console.log('TodoList Props:', this.props);

        const { todos } = this.props;

        const todosList = todos.map((item, index) => {
            return <ListItem key={index} listItem={item}/>
        });

        return (
            <div>
                <h1 className="text-center mt-3">Todo List</h1>
                <ul className="list-group">
                    {todosList}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        todos: state.todos.all
    }
}

export default connect(mapStateToProps, {getAll})(TodoList);
