import axios from 'axios';

const getLoc = async(Loc : string) => {

    const url = 'https://ip-geo-location.p.rapidapi.com/ip/check?query=${Loc}';
    const headers = {
        'X-RapidAPI-Key': 'b060c8b5a3mshad387c24a96c1dfp1fd6f7jsn154388ccf7f1',
        'X-RapidAPI-Host': 'ip-geo-location.p.rapidapi.com'
    }
    const output = await axios.get(url, {headers});

    return output.data
}

export default getLoc;