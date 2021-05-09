// export default function User({item, search}) {
//     return (
//         <div>
//             {item.id} -
//             {item.name} <br/>
//             {item.email} -
//             <button onClick={()=> search(item.id)}>Details</button>
//         </div>
//     );
// }

export default function User({item, search}) {
    return (
        <div>
            {item.id} -
            {item.name} <br/>
            {item.email} -
            <button onClick={() => search(item.id)}>Details</button>
            <hr/>
        </div>
    );
}