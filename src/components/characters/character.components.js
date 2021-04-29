import './character.components.css'

function CharacterComponents(props) {
    return <div className={'char'}>
        <h2>
            {props.desctiption}
        </h2>
        <img src={props.image} alt=""/>

    </div>;
}

export default CharacterComponents;