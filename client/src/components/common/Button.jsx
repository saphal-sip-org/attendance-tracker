const Button = ({
    clickhandler,
    label,
    addClass
}) => {
    return(
        <>
            <button onClick={clickhandler} 
            className={`
            border
            text-gray-100
            bg-color-primary
            border-gray-300
            rounded-3xl
            py-2 px-6
            font-bold text-lg
            hover:bg-color-secondary 
            ${addClass}
            `}>{label}</button>
        </>
    )
}

export default Button;