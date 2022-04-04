const Scroll = (props) =>{
    console.log(props)
    return (
        <div style={{overflowY: 'scroll', height: '500px', border: '3px black solid', margin: '1em'}}>
            {props.children}
        </div>
    )
}

export default Scroll