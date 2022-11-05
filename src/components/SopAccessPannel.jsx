import {Box, Typography, styled, TextField,Button} from '@mui/material'
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined'


const SubHeading = styled(Typography)`
  margin-left: 18px;
  color: #7ca1f1;
`;


const ButtonContainer = styled(Box)`
  margin-top: 30px;
  margin-left: 35%;
`;



const SopAccessPannel = () => {
    return (
    <Box style={{ marginLeft: "35%"}} >
     
         
            <Box style={{marginTop:150, marginLeft:20,}}>
            <Typography style={{marginBottom:10}}  variant="h5">SOP Access</Typography>
            <SubHeading variant='h6'>Sales</SubHeading>

                  <TextField style={{width:500, color:'inherit'}} id="outlined-basic" label="TEAMMATES" variant="outlined"   placeholder="Select Members"  InputProps={{
                endAdornment: (
                <AddBoxOutlinedIcon />
                ),
                }} />
              
          </Box>

          

          <Box style={{marginTop:20, marginLeft:20,}}>
          <SubHeading variant='h6'>Marketing</SubHeading>
                <TextField style={{width:500, color:'inherit'}} id="outlined-basic" label="TEAMMATES" variant="outlined"   placeholder="Select Members"  InputProps={{
              endAdornment: (
              <AddBoxOutlinedIcon />
              ),
              }} />
            
          </Box>

          

          <Box style={{marginTop:20, marginLeft:20,}}>
          <SubHeading variant='h6'>Design</SubHeading>
                <TextField style={{width:500, color:'inherit'}} id="outlined-basic" label="TEAMMATES" variant="outlined"   placeholder="Select Members"  InputProps={{
              endAdornment: (
              <AddBoxOutlinedIcon />
              ),
              }} />
            
          </Box>
              <ButtonContainer >
          <Button variant='outlined'>Cancel</Button> <Button variant='contained'>Update</Button>
          </ButtonContainer >
     
    
     
    

    

    </Box>
    );





 
   
  
}

export default SopAccessPannel


