import './User.css'

export default function User({item, search}) {
    return (
        <div className={'user'}>
            <div>{item.id} -
                {item.name} <br/>
                {item.email}
            </div>
            <div>
                <button onClick={() => search(item.id)}>Details</button>
            </div>
        </div>
    );
}