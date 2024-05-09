

const Input = ({
    label,
    inputchangeHandler,
    inputValue
}) => {

    return (

        <div>
           
            <div className="flex flex-col mt-">
                <span>{label}</span>
                <input type="text" className="bg-gray-50 border 
                    outline-none
                    border-gray-300
                    text-gray-900 
                    text-sm rounded-lg 
                    block p-2.5
                    dark:bg-gray-700 
                    dark:border-gray-600
                    dark:placeholder-gray-400 
                    dark:text-white " placeholder={label} required />
            </div>

        </div>

    );
}

export default Input;