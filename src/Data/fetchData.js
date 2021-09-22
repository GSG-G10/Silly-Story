const FetchData = () => {
    return fetch('https://madlibz.herokuapp.com/api/random?minlength=5&maxlength=10')
        .then((response) => response.json())
}

export default FetchData;