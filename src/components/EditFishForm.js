import React, {Component} from 'react';

class EditFishForm extends Component {
    handleChange = event => {
        const updatedFish = {
            ...this.props.fish,
            [event.currentTarget.name]: event.currentTarget.value
        }
        console.log(updatedFish)
        this.props.updateFish(this.props.index, updatedFish);
    };
    render() {
        return (
            <div className="fish-edit">
                <input type="text" name="name" onChange={this.handleChange} value={this.props.fish.name}/>
                <input type="text" name="price" onChange={this.handleChange} value={this.props.fish.price}/>
                <select name="status" onChange={this.handleChange} value={this.props.fish.status}>
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold out!</option>
                </select>
                <textarea name="desc" onChange={this.handleChange} value={this.props.fish.desc}/>
                <input type="text" name="image" onChange={this.handleChange} value={this.props.fish.image}/>
                <button onClick={() => this.props.deleteFish(this.props.index)}>Remove fish</button>
            </div>
        );
    }
}

export default EditFishForm;