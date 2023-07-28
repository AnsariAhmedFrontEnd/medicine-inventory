import React, {useState, useContext} from "react";
import MedicineContext from "../store/medicine-context";

const AddMedicineForm = () => {
    const medicineCtx = useContext(MedicineContext);
const [medicineName, setMedicineName] = useState('');
const [medicineDescription, setmedicineDescription] = useState('');
const [medicinePrice, setmedicinePrice] = useState('');

const medicineNameChangeHandler = (event) => {
setMedicineName(event.target.value);
};

const medicineDescriptionChangeHandler = (event) => {
    setmedicineDescription(event.target.value);
    };

    const medicinePriceChangeHandler = (event) => {
        setmedicinePrice(event.target.value);
        };


const formSubmitHandler = (event) => {
    event.preventDefault();
    const medicineData = {
        name:medicineName,
        descrtiption:medicineDescription,
        price:medicinePrice
    };
    
    medicineCtx.addProduct(medicineData);
    
}



  return (
    <form onSubmit={formSubmitHandler}>
      <label>Medicine Name</label>
      <input type="text" onChange={medicineNameChangeHandler} value={medicineName} />
      <label>Description</label>
      <input type="text" onChange={medicineDescriptionChangeHandler} value={medicineDescription} />
      <label>Price</label>
      <input type="number" value={medicinePrice}  onChange={medicinePriceChangeHandler}/>
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddMedicineForm;
