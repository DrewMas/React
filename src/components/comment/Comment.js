import './Comment.css'

export default function Comment({item, search},) {
    return (
        <div className={'comment'}>
            <div>
                {item.id} - {item.name} <br/>
                Email {item.email} <br/>
            </div>
            <div>
                <button onClick={() => search(item.id)}>Comment</button>
            </div>
        </div>
    );
}