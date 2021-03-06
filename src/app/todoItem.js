var React = require('react');
require('./css/todoItem.css');

var ToDoItem = React.createClass({
  render: function(){
    return(
      <li>
        <div className="todo-item">
          <span className="item-name">{this.props.item}</span>
          <span className="delete-item" onClick={this.handleDelete}>x</span>
        </div>
      </li>
    );
  }, //render

  //Custom function
  handleDelete: function(){
    this.props.onDelete(this.props.item);
  }
});

module.exports = ToDoItem;
