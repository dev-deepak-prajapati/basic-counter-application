
function Button(props) {
    const { name, func } = props;
    return (
        <button className="btn" onClick={func}>
            {name}
        </button>
    );
}

export default Button;
