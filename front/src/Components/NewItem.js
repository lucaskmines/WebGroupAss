//import './NewItem.css';
import { useParams } from 'react-router-dom'

export default function NewItem({ }){
    var name;
    var quantity;
    var price;

    //console.log(params.store_id)
    const {store_id} = useParams();
    console.log(store_id);
    
    const nameChange = (event) => {
        event.preventDefault();
        name = event.target.value;
        console.log("name: " + name);
    };
    const quantityChange = (event) => {
        event.preventDefault();
        quantity = event.target.value;
        console.log("quantity: " + quantity);
    };
    const priceChange = (event) => {
        event.preventDefault();
        price = event.target.value;
        console.log("price: " + price);
    };
    
    return (
        <div>
            <link rel="stylesheet" href="./NewItem.css"/>
            <h1>New Item Form</h1>
            <form id="itemForm" onSubmit={ () => handleSubmit({name, price, quantity}, store_id) }>
                <div id="storeNew">
                    Item Name: 
                    <input type="text" name="name" onInput={nameChange}></input>
                </div>
                <div id="storeNew">
                    Item Price: 
                    <input type="number" min="0" name="price" onInput={priceChange}></input>
                </div>
                <div id="storeNew">
                    Item Quantity: 
                    <input type="number" min="0" pattern="[0-9]+" name="quantity" onInput={quantityChange}></input>
                </div>
                <button type="submit">Add</button>
            </form>
        </div>
    );

}

async function handleSubmit({ name = "filler", price = "filler", quantity = "filler"}, store_id) {
    console.log("Lol what");

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "name": name,
        "quantity": quantity,
        "price": price,
        "store_id": store_id
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch(`http://localhost:3001/stores/${store_id}/items/new`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}