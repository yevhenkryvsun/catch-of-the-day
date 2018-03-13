import React, {Component} from 'react';

class AddFishForm extends Component {
    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();

    createFish = event => {
        event.preventDefault();
        const fish = {
            name: this.nameRef,
            price: parseFloat(this.priceRef),
            status: this.statusRef,
            desc: this.descRef,
            image: this.imageRef
        };
        this.props.addFish(fish);
        event.currentTarget.reset();
    };

    render() {
        return (
            <form className="fish-edit" onSubmit={this.createFish}>
                <input type="text" name="name" ref={this.nameRef} placeholder="Name"/>
                <input type="text" name="price" ref={this.priceRef} placeholder="Price"/>
                <select name="status" ref={this.statusRef}>
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold out!</option>
                </select>
                <textarea name="desc" ref={this.descRef} placeholder="Desc"/>
                <input type="text" name="image" ref={this.imageRef} placeholder="Image"/>
                <button type="submit">+ Add fish</button>
            </form>
        );
    }
}

export default AddFishForm;