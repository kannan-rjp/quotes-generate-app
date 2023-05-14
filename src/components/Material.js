import React, { useState } from 'react';
import {
    Box,
    TextField,
    Select,
    MenuItem,
    Button,
    FormControl
} from '@mui/material';
import { useForm, Controller } from 'react-hook-form';

const Material = () => {

    const [role, setRole] = useState('developer');
    function handleSelect(e) {
        setRole(e.target.value)
    }
    // controlled select
    const rolebase = [{ id: 1, name: 'developer' }, { id: 2, name: 'tl' }, { id: 3, name: 'manager' }];
    const [selectedRole, setSelectedRole] = useState('');
    function handleRole(e) {
        setSelectedRole(e.target.value)
    }

    const { register, handleSubmit, control, formState: { errors } } = useForm();
    function onDataSubmit(data) {
        console.log(data,'the data')
    }
    return (
        <Box sx={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
        }}>
            <FormControl>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={role}
                    label="Age"
                    onChange={handleSelect}
                >
                    <MenuItem value='developer'>Developer</MenuItem>
                    <MenuItem value='tl'>TL</MenuItem>
                    <MenuItem value='manager'>Manager</MenuItem>
                </Select>

            </FormControl>
            <form onSubmit={handleSubmit(onDataSubmit)}>
                <Controller
                    name='username'
                    control={control}
                    rules={{ required: 'Enter the FirstName' }}
                    render={({ field }) => (
                        <TextField
                            variant='outlined'
                            {...field}
                            label='Enter Your Name'
                            error={!!errors.username}

                        />
                    )}
                />
                <Controller
                    name='password'
                    control={control}
                    rules={{ required: 'Enter the Password' }}
                    render={({ field }) => (
                        <TextField
                            variant='outlined'
                            type='password'
                            {...field}
                            label='Enter Your Password'
                            error={!!errors.password}

                        />
                    )}
                />
                <Controller
                    name='selectrole'
                    control={control}
                    rules={{ required: 'Select the role' }}
                    render={({ field }) => (
                        <FormControl error={!!errors.selectrole} {...field}>
                            <Select onChange={handleRole} {...field}>
                                {rolebase.map((item, index) => {
                                    return (
                                        <MenuItem value={item.name}>{item.name}</MenuItem>
                                    )
                                })}
                            </Select>
                        </FormControl>
                    )}
                />
                <Button type='submit' variant='contained'>Submit</Button>
            </form>
        </Box>
    );
}
export default Material;