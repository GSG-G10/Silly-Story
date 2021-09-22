const FetchData = () => {
    const abortController = new AbortController();
    return fetch('https://madlibz.herokuapp.com/api/random?minlength=5&maxlength=10', { signal: abortController.signal })
        .then((response) => response.json())
}

export default FetchData;