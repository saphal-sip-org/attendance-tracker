const Button = ({
    clickhandler,
    label,
}) => {
    return(
        <div>
            {/* <Button type="button" oncClick={handlesubmit} > </Button> */}
            <button type="button" onClick={clickhandler} 
            className="
            border
            text-gray-100
            bg-bg-btn-primary
            border-gray-300
            text-sm rounded-lg
            p-2
            font-bold
            hover:bg-bg-btn-secondary 
            ">{label}</button>
        </div>
    )
}

export default Button;