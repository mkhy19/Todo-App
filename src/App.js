import React , {Component} from 'react';

import ListItems from './Components/ListItems/ListItems';
import AddItem from './Components/AddItem/AddItem';

import './index.css';

/*
-Our App have 2 components
    -List component that have our data
    -Add component to add any new data

*/
class App extends Component{

    //Our data
    state = {
        items: [
            {id: 1, name: "Mohamed", age: 23},
            {id: 2, name: "Eslam", age: 25},     
            {id: 3, name: "Ali", age: 28}
        ],

    }

    deleteId = (id) =>{
        let items =this.state.items
        let i = items.findIndex( item => item.id === id)
        items.splice(i, 1)
        this.setState({items: items})
    }

    //To add item from AddItem component (state) to our main component (state)
    addNewItemToState = (item) => {
        item.id = Math.random()

        let items = this.state.items
        items.push(item)
        this.setState({items})
    }

    render(){
        return (
            <div className="App container">
                <h1 className="text-center"><mark>TodoList App</mark></h1>
                <h2 className="text-center">Student Data</h2>
                <ListItems myItemsProps = {this.state.items} deleteItem={this.deleteId} />
                <AddItem addNewItem={this.addNewItemToState} />
            </div>
        );
    }
}

export default App;