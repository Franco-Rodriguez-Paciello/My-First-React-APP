import React,{Component} from "react";

export default class TaskForm extends Component {

    state = {
        title: '',
        description: ''
    }

    onSubmit = (event) => {
        event.preventDefault();
    };

    onChange = (event) => { 
        this.setState({
            [event.target.name] : event.target.value
        })

    };
    
    render() {
        return(
            <form onSubmit={this.onSubmit}>
                <input type="text" placeholder="Write a Task" 
                onChange={this.onChange}
                value = {this.state.title}
                name="title"  />
                <br/>
                <br/>
                <textarea placeholder="Write a description" 
                onChange={this.onChange}
                value = {this.state.description}
                name='description'></textarea>
                <button type="submit">
                    save
                </button>
            </form>
        ) 

      
    }


}



