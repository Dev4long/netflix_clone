const API_KEY = '7201eda611d5a82015679e18b27c1a5e'

const requests = {
    fetchTrending: `trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`
}



export default requests;