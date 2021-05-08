import './App.css';
import User from "./components/users/user";
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
]

// function App() {
//
//     let [counter, setCounter] = useState(0);
//     const increment = () => setCounter(++counter);
//
//     let [users, setUsers] = useState(usersList);
//
//
//     // let map = usersList.map((value, index) => {
//     //     value.id = index;
//     //     return value;
//     // });
//     // console.log(map);
//
//     const deleteUser = () => {
//         users.pop();
//         setUsers([...users]);
//     };
//
//     return (
//         <div>
//             <div>
//                 Counter is {counter}
//                 <button onClick={increment }>Increment</button>
//             </div>
//             <div>
//                 <button onClick={deleteUser}>Delete user</button>
//                 {
//                     users.map((value, index) =>
//                         <User key={index}
//                               {...value}
//                         />)
//                 }</div>
//
//         </div>
//     );
// }
//
// export default App;

// function App() {
//
//     let [counter, setCounter] = useState(0);
//     const increment = () => setCounter(++counter);
//
//     let [users, setUsers] = useState(usersList);
//
//     const deleteUser = () => {
//         users.pop();
//         setUsers([...users]);
//     }
//
//
//     return (
//         <div>
//
//             <div>
//                 Counter is {counter} <br/>
//                 <button onClick={increment}>Increment</button>
//             </div>
//             <hr/>
//             <div>
//                 <button onClick={deleteUser}>Delete user</button>
//                 {
//                     users.map((value, index) =>
//                         <User key={index}
//                               {...value}
//                         />
//                     )
//                 }
//             </div>
//         </div>
//     );
// };
//
// export default App;

function App() {

    // let map = usersList.map((value, index) => {
    //     value.id = index;
    //     return value;
    // });
    //
    // console.log(map);

    let [counter, setCounter] = useState(0);
    const increment = () => setCounter(++counter);

    let [users, setUsers] = useState(usersList);

    const deleteUser = () => {
        users.pop();
        setUsers([...users]);
    };



    return (
        <div>

            <div>
                Counter is {counter}
                <button onClick={increment}>Increment</button>

            </div>

            <div>
                <button onClick={deleteUser}>Delete user</button>
                {
                    users.map((value, index) =>
                        <User key={index}
                              {...value}
                        />)
                }
            </div>
        </div>
    );
}

export default App;