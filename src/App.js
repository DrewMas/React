import NonControlled from "./components/NonControlled";
import Controlled from "./components/Controlled";
import ConstrolledForm from "./components/ConstrolledForm";

export default function App() {
    return (
        <div>
            <NonControlled/>
            <hr/>
            <Controlled/>
            <hr/>
            <ConstrolledForm/>
        </div>
    );
}