import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import { useState } from 'react';



function AddCourse(){
    const[title,setTitle]=useState("")
    const[ Description,setDescription]=useState("")

 return <div style={{ height: 800, width:400,padding:20,display:"felx",justifyContent:"centre"}}>
    <Card style={{padding:20}} >
   <TextField 
      onChange={(e)=>{
        setTitle(e.target.value);
      }}
      fullWidth={true}
      id="outlined-basic" 
      label="Title" 
      variant="outlined"
      type="Email" 
      />
      <br />
      <br />


<TextField 
      onChange={(e)=>{
        setDescription(e.target.value);
      }}
      fullWidth={true}
      id="outlined-basic" 
      label="Description" 
      variant="outlined"
      type="Description" 
      />
      <br />
      <br />


<Button variant="outlined">AddCourse</Button>



</Card>
 </div>



}

export default AddCourse;