import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getSingleTodo, toggleComplete } from '../actions';

class SingleItem extends Component {
    componentWillMount(){
        this.props.getSingleTodo(this.props.match.params.id);
    }

    handleToggle(){
        this.props.toggleComplete(this.props.match.params.id);
    }

    render(){
        console.log('SingleItem props:', this.props);

        const { todo } = this.props;

        if(!todo){
            return <h1 className="text-center">Loading...</h1>
        }

        return (
            <div>
                <h1>Todo Item</h1>
                <Link to="/" className="btn btn-outline-info my-3">Go Back</Link>
                <h3>Title: {todo.title}</h3>
                <button onClick={() => this.handleToggle()}>{ todo.complete ? 'Incomplete' : 'Complete' }</button>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        todo: state.todos.single
    }
}

export default connect(mapStateToProps, {getSingleTodo, toggleComplete})(SingleItem);
