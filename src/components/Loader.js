import loading from './loading.gif'

const Loader = () => {
    return (
        <div className="loader">
            <img src={loading }alt="loading"/>
            {/* <h1>Fetching data...</h1> */}
        </div>
    )
}

export default Loader
