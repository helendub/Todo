import React from "react"
import Input from "./Input";
import TodoList from "./TodoList";
import Filter, {completedFilterDictionary} from "./Filter";


let counter = 0;


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            completedFilter: completedFilterDictionary.showAll,
            todoItems: [],
            textFilter: ''
        }
    }

    removeTodoItem = (id) => {
        const index = this.getTodoItemIndexById(id);
        let todoItems = [...this.state.todoItems];
        todoItems.splice(index, 1);
        this.setState({todoItems: todoItems});
    };


    editTodoItem = id => text => {
        const index = this.getTodoItemIndexById(id);
        let todoItems = [...this.state.todoItems];
        todoItems[index].text = text;
        this.setState({todoItems: todoItems});
    };

    setTextFilter = (text) => {
        this.setState({textFilter: text});
    };

    setCompletedFilter = (val) => {
        this.setState({completedFilter: val});
    };


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
                    filterItemsHandler={this.setTextFilter}
                />

                <Filter setCompletedFilter={this.setCompletedFilter}/>

                <TodoList
                    completedFilter={this.state.completedFilter}
                    textFilter={this.state.textFilter}
                    todoItems={this.state.todoItems}
                    toggleCompletedHandler={this.toggleCompleted}
                    removeTodoItemHandler={this.removeTodoItem}
                    editTodoItemHandler={this.editTodoItem}
                />
            </div>
        )    
    }
}

export default App