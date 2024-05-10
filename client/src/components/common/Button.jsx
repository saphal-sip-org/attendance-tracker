const Button = ({
    clickhandler,
    label,
    className
}) => {
    return(
        <>
            <button onClick={clickhandler} 
            className={`
            border
            text-gray-100
            bg-bg-btn-primary
            border-gray-300
            rounded-3xl
            py-2 px-6
            font-bold text-lg
            hover:bg-bg-btn-secondary 
            ${className}
            `}>{label}</button>
        </>
    )
}

export default Button;