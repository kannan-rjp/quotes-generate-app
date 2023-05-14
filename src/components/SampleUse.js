import { Box } from '@mui/material';
import React from 'react';
import { useForm, useFieldArray, Controller, FormProvider, useFormContext } from 'react-hook-form';
import ArrayListOne from './sample/ArrayListOne'


const SampleUse = () => {
    const methods = useForm();
    const onhandlesubmit = (data)=> {
        console.log(data,'form submit')
    }
    return (
        <Box
         sx={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
        }}>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onhandlesubmit)}>
                    <ArrayListOne />
                    <button type='submit'>Submit</button>
                </form>
            </FormProvider>
            

        </Box>
    )
}

export default SampleUse
