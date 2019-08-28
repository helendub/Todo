import React from "react"
import Input from "./Input";
import TodoList from "./TodoList";


let counter = 0;


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todoItems: []
        }
    }

    toggleCompleted = (id) => {
        const index = this.getTodoItemIndexById(id);
        let todoItems = [...this.state.todoItems];
        todoItems[index].isCompleted = !todoItems[index].isCompleted;
        this.setState({todoItems: todoItems});
    };

    addTodoItem = (text) => {
      if (text) {
          this.setState({
              todoItems: [...this.state.todoItems, {id: counter++, text: text, isCompleted: false}]
          });
      }
  };

  getTodoItemIndexById = (id) => this.state.todoItems.findIndex((item) => item.id === id);

    
    render() {
        
        return (
            <div>
               <Input
                    addItemHandler={this.addTodoItem}
                />
                <TodoList
                    todoItems={this.state.todoItems}
                    toggleCompletedHandler={this.toggleCompleted}
                />
            </div>
        )    
    }
}

export default App