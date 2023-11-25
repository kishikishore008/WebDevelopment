import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

function Signup(){
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")


return <>
   
    <div style={{
        display:"flex",
        justifyContent:"center",
        paddingTop:150,
        marginBottom:10
        }}>
      <Card style={{width:400,padding:20}}>



       <Typography  variant={"h6"} >Hi, Welcome to Coursera</Typography> 
       <br />
      
      
      
      <TextField 
      onChange={(e)=>{
        setEmail(e.target.value);
      }}
      fullWidth={true}
      id="outlined-basic" 
      label="Email" 
      variant="outlined"
      type="Email" 
      />


        <br />
        <br />


        <TextField 
        onChange={(e)=>{
            setPassword(e.target.value);
          }}
        
        fullWidth={true}
        id="outlined-basic" 
        label="Password" 
        variant="outlined"
        type="Password"
        />

        <br />
        <br />

        
        <Button 
        variant="contained"
        size="large"
        onClick={()=>{
           function callback2(data){
            localStorage.setItem("token",data.token);
         
           }
           function callback1(res){
            res.json().then(callback2)
           }
            fetch("http://localhost:3000/admin/signup",{
                method:"POST",
                body:JSON.stringify({
                    username:email,
                    password:password
                }),
                headers:{
                    "content-type":"application/json"
                }
            })
            .then(callback1)
        
        }}
        
        >signup</Button>
        
         
        </Card>
    </div>

</>

}

export default Signup;