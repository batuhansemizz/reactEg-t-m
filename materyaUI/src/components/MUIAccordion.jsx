import React from 'react'
import {Accordion, AccordionSummary, AccordionDetails, Typography} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useState } from 'react'

function MUIAccordion() {
    const [expanded, setExpanded] = useState('' | false)
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false)
    }
  return (
    <div>
        <Accordion 
            onChange={handleChange('panel1')}
            expanded={expanded === 'panel1'}
        
            TransitionProps={{
                timeout:{
                enter:700,
                exit:700
            }}}> 
            <AccordionSummary
            expandIcon={<ExpandMoreIcon/>}
            aria-controls="panel1a-content"
            id="panel1a-header"
           

            >
                <Typography>Bölüm 1</Typography>
            </AccordionSummary> 
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget.
                </Typography>
            </AccordionDetails>
        </Accordion>
        
    </div>
  )
}

export default MUIAccordion