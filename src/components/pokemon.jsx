

const Pokemon = ({name, picture}) => {
    return (
        <div className="flex flex-col items-center w-full h-full">
            <p>{name}</p>
            <img src={picture}/>
        </div>
    )
}

export default Pokemon