import React, { useState } from 'react';
import { useForm, FormProvider, Controller, useFieldArray } from 'react-hook-form';
import { Box } from '@mui/material'
import { useEffect } from 'react';
import DispInfo from './DispInfo'

const DynamicForm = () => {
    const methods = useForm();
    function onFormData(data) {
        console.log(data, 'the data')
    }
    return (
        <Box sx={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
        }}>
            <FormProvider {...methods} >
                <form onSubmit={methods.handleSubmit(onFormData)}>
                    <DispInfo />
                    <button type='submit'>Submit</button>
                </form>
            </FormProvider>
        </Box>
    );
}
export default DynamicForm;