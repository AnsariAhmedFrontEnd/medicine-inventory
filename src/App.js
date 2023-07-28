import AddMedicineForm from "./components/AddMedicineForm";
import MedicineItems from "./components/MedicineItems";
import MedicineProvider from "./store/MedicineProveider";

const App = () => {
  return (
    <MedicineProvider>
      <AddMedicineForm />
      <MedicineItems />
    </MedicineProvider>
  );
};

export default App;
