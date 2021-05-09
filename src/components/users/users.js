import {useEffect, useState} from "react";
import User from "../user/user";
import './users.css';
import axiosInstance from '../../components/services/api'


// export default function Users() {
//
//     let [users, setUsers] = useState([]);
//     let [singleUser, setSingleUser] = useState({}); //null замість {}
//
//
//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/users')
//             .then(value => value.json())
//             .then(value => {
//                 setUsers([...value]);
//             })
//     }, []);
//
//     const search = (id) => {
//
//         let findedUSer = users.find(value => value.id === id);
//         // console.log(findedUSer);
//         setSingleUser(findedUSer);
//     };
//
//     return (
//         <div className={'wrap'}>
//             <div className={'usersBox'}>
//                 {
//                     users.map((value) => <User
//                         key={value.id}
//                         item={value}
//                         search={search}
//                     />)
//                 }
//             </div>
//
//             <div className={'singleUserBox'}>
//                 {
//                     // singleUser ? (
//                         <div>{singleUser.id} - {singleUser.username}</div>
//                     // ) : (<div>User is not defined</div>)
//                 }
//             </div>
//
//         </div>
//     );
// }

export default function Users() {

    let [users, setUsers] = useState([]);
    let [singleUser, setSingleUser] = useState({});

    useEffect(() => {
        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(value => {
        //         return value.json()
        //     })
        //     .then(json => {
        //         setUsers([...json]);
        //     });
        axiosInstance.get('/users').then(value => setUsers(value.data));
    }, []);

    const search = (id) => {
        let findedUser = users.find(value => value.id === id);
        setSingleUser(findedUser);
    };

    return (
        <div className={'wrap'}>
            <div className={'usersBox'}>{
                users.map((value) => <User
                    key={value.id}
                    item={value}
                    search={search}
                />)
            }</div>
            <div className={'singleUserBox'}>
                {
                    singleUser ? (
                        <div>Customer's user name is <i>{singleUser.username}</i> <br/>
                            Phone number is  {singleUser.phone}
                            <br/></div>) : (<div></div>)
                }
            </div>

        </div>
    );
}