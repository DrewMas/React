import {useState} from "react";

export default function Controlled() {

    // let [login, setLogin] = useState();
    // let [password, setPassword] = useState();
    //
    // function onValueChange(e) {
    //     let value = e.target.value;
    //     let name = e.target.name;
    //     console.log(name);
    //     name == 'login'? setLogin(value) : setPassword(value);
    // }
    //
    //
    // function submit(e) {
    //     e.preventDefault();
    // }

    let [formState, setFormState] = useState({login: '', password: ''});
    let {login, password} = formState;

    function onValueChange(e) {
        let name = e.target.name;
        let value = e.target.value;
        setFormState({...formState,[name]:value});
    }


    function submit(e) {
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={submit}>
                <input type="text" name={'login'} value={login} onChange={onValueChange}/>
                <input type="text" name={'password'} value={password} onChange={onValueChange} />
                <button>send</button>
            </form>

        </div>
    );
}