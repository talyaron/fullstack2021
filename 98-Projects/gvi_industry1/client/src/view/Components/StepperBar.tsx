import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Typography from '@mui/material/Typography';

const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];

export default function StepperBar() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState<{
    [k: number]: boolean;
  }>({});

  return (
    <Box sx={{ width: '100%', margin: 'auto' }} className='bar'>
    <Stepper nonLinear activeStep={activeStep}>
      {steps.map((label, index) => (
        <Step key={label} completed={completed[index]}>
          <StepButton color="inherit" >
            {label}
          </StepButton>
        </Step>
      ))}
    </Stepper>
    <div>
      <React.Fragment>
        <Typography sx={{ mt: 2, mb: 1 }}>Step 1</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
        </Box>
      </React.Fragment>
    </div>
  </Box>
  );
}

