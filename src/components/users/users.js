import User from "../user/user";
import {useState} from "react";

let usersList = [
    {name: 'vasya', age: 30, status: false},
    {name: 'petya', age: 37, status: true},
    {name: 'kolya', age: 28, status: false},
    {name: 'olya', age: 32, status: true},
    {name: 'max', age: 35, status: false},
    {name: 'anya', age: 23, status: true},
    {name: 'oleg', age: 26, status: true},
    {name: 'andrew', age: 26, status: false},
    {name: 'masha', age: 27, status: false},
    {name: 'tanya', age: 31, status: true}
];

export default function Users() {

    let [users, setUsers] = useState(usersList);

    const deleteUser = () => {
        users.pop();
        setUsers([...users])
    }

    return (
        <div>
            <button onClick={deleteUser}>Delete user</button>
            {
                users.map((value, index) => <User key={index}
                                                  {...value}
                />)
            }

        </div>
    );
}


