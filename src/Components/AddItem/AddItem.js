import React , {Component} from 'react';

class AddItem extends Component{
    state = {
        name: '',
        age: ''
    }

    handleChange = (ev) => {
        this.setState({
            [ev.target.id] : ev.target.value
            
        })
    }

    handleSubmit = (ev) => {
        ev.preventDefault();

        //Handle validation
        if(ev.target.name.value === '' || ev.target.age.value === ''){
            return false
        } else{
            this.props.addNewItem(this.state)

            this.setState({
                name: '',
                age: ''
            })

        }

    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Enter name.." id="name" onChange={this.handleChange} value={this.state.name} />
                    <input type="number" placeholder="Enter age.." id="age" onChange={this.handleChange} value={this.state.age}/>
                    <input type="submit" value="add" />
                </form>
            </div>
        );
    }
}

export default AddItem;
