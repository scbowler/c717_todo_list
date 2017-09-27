import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
                <div className="justify-content-center d-flex my-3">
                    <Link to="/add-todo" className="btn btn-outline-primary">Add Item</Link>
                </div>  
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
