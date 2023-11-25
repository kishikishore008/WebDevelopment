import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';







function Appbar(){

    return <div style={{
        display:"flex",
        justifyContent:"space-between",
        padding:"8"
        }}>
    <div>
    <Typography variant={"h6"}>Coursera</Typography>
    </div>
    <div>
    <Button>Sign in</Button>
    <Button>Sign up</Button>
    </div>
    </div>   
}

export default Appbar