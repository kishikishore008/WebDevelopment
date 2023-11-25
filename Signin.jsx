import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

function Signup(){
return <>
   
    <div style={{
        display:"flex",
        justifyContent:"center",
        paddingTop:150,
        marginBottom:10
        }}>
      <Card style={{width:400,padding:20}}>



       <Typography  variant={"h6"} >Hi, Welcome to Coursera,sign in below</Typography> 
       <br />
      
      
      
      <TextField 
      fullWidth={true}
      id="outlined-basic" 
      label="Email" 
      variant="outlined"
    //   type={"Email"} 
      />


        <br />
        <br />


        <TextField 
        fullWidth={true}
        id="outlined-basic" 
        label="Password" 
        variant="outlined"
        // type={"Password"} 
        />

        <br />
        <br />

        
        <Button varient="contained">signin</Button>
        
         
        </Card>
    </div>

</>

}

export default Signup;


