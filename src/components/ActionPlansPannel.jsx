
import {useState} from 'react'
import {Accordion,AccordionDetails,AccordionSummary,Typography, Button,Box} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined'
import GroupIcon from '@mui/icons-material/Group';




 function  ActionPlansPannel() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box style={{width:"50%", marginLeft:"22%", marginTop:"10%"}}>

      <Box style={{display:'flex', marginBottom:20}}>
          <Typography variant='h5' style={{marginBottom:10, marginRight:"40%"}}>Action Plans</Typography>
          <Button variant='outlined' >  <GroupIcon />Manage Access  </Button>
          <Button variant='contained'> <AddBoxOutlinedIcon /> New Plan</Button>
       </Box>
       
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
      
        <AccordionSummary
       
          expandIcon={<ExpandMoreIcon /> }
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          
           <DragIndicatorIcon />
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
           Marketing
          </Typography>
         
        </AccordionSummary>
        <AccordionDetails>
       
          <Typography>
          <DragIndicatorIcon /> 
          WordPress
          </Typography>
          <Typography>
          <DragIndicatorIcon />
           Google Drive
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
           <DragIndicatorIcon />
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Design</Typography>
         
          </AccordionSummary>
           <AccordionDetails></AccordionDetails>
     </Accordion>

      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
           <DragIndicatorIcon />
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
              Sales
            </Typography>
          
          
          </AccordionSummary>
          <AccordionDetails></AccordionDetails>
      </Accordion>
     
    </Box>
  );
}

export default ActionPlansPannel