import * as React from 'react';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import CustomizedTables from './table'
import getLoc from '../api/getLoc';


export default function SearchBar(props:any){

const [locs,setLocs] = React.useState([])    
const [input, setInput] = React.useState("");

const handleInputEdit= (event: any) =>{
    setInput(event.target.value)
}

const handleSetLocs = async() => {
 const output = await getLoc(input)
 setLocs(output.data)
}
console.log(locs)
return(
    <div style={{marginTop : '30px'}}>
<TextField id="outlined-basic" label="Outlined" variant="outlined"  onChange={e => handleInputEdit(e)} />
<Button variant="outlined" onClick={handleSetLocs}>Search</Button>
<CustomizedTables locs = {locs} ></CustomizedTables> 
</div>
)

}

