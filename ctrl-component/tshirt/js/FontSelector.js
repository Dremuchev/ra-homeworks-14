const FontSelector = ({ fonts, selectedFont, onSelect }) => (
        <div className="font-picker"> {
            fonts.map(item => {
                return (
                    <ItemFont
                        item={item}
                        onSelect={onSelect}
                        checked={selectedFont && selectedFont.name === item.name}
                    />
                )
            })
        } </div>
);

const ItemFont = ({ item, onSelect, checked }) => {
    console.log(item)
    return (
        <div className="grid center font-item">
            <input type="radio" name="font" value={item.name} id={name}
                onChange={() => onSelect(item)}
                defaultChecked={checked} />
            <label htmlFor={item.name} className="grid-1">
                <PictureFont text={item.name.replace(item.name[item.name.length - 1], '')} path={item.path} />
            </label>
        </div>
    );
}