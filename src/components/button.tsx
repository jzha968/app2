import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import SearchBar from './inputfield'
import CustomizedTables from './table'

export default function OutlinedButtons() {
    return (
        <div>
    <SearchBar></SearchBar>
    <Button variant="outlined">Search</Button>
    <CustomizedTables></CustomizedTables>

    </div>
        
    );
  }