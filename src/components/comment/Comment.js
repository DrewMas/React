export default function Comment({item, search},) {
    return (
        <div>
            {item.id} - {item.name} <br/>
            Email - {item.email} <br/>
            <button onClick={() => search(item.id)}>Comment</button>
            <hr/>
        </div>
    );
}