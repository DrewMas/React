export default function Post({item, search}) {
    return (
        <div>
            {item.id} -
            <b>Title</b> - {item.title} <br/>
            <button onClick={() => search(item.id)}>Post</button>
            <hr/>
        </div>
    );
}