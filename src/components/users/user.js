//
// export default function User (props){
//
//     let {age, name, status} = props;
//
//     return (
//         <div>
//             <h2>{name} {status.toString()}</h2>
//             <div>{age}</div>
//         </div>
//     );
// }


// export default function User (props){
//
//     let {name, age, status} = props;
//
//     return (
//         <div>
//             <h3>My name is {name}</h3>
//             <p>I'm {age} and my marriage status is {status.toString()}</p>
//         </div>
//     );
// }

export default function User (props) {

    let {name, age, status} = props;

    return (
        <div>
            <h2>My name is {name}</h2>
            <p>I'm {age} and this is my marriage status - {status.toString()}</p>
        </div>
    );
}