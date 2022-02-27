import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'


export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': 'b0c9d415c6msh08fd9f871d54312p122cd4jsnba0c7fc23e72'
        }
    })
    return data;
}