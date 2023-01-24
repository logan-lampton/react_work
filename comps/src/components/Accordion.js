function Accordion({ items }) {
    const renderedItems = items.map((item) => {
        return(
            // remember to assign a key using the id on the highest element
            <div key={item.id}>
                <div>{item.label}</div>
                <div>{item.content}</div>
            </div>
        )
    })
    
    return (
        <div>{renderedItems}</div>
    )
}

export default Accordion;