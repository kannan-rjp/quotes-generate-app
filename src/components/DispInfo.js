import React, { useState } from 'react';
import { useForm, Controller, useFormContext } from 'react-hook-form';
import { Box, MenuItem, Select, TextField, FormControl } from '@mui/material'
import { useEffect } from 'react';

const DispInfo = () => {
    const {control, formState:{ errors },setValue} = useFormContext();
    const style = { border: '1px solid black' }
    const [list, setList] = useState(null);
    const rolebase = [{ id: 1, name: 'developer' }, { id: 2, name: 'tl' }, { id: 3, name: 'manager' }];
    const [selectedRole, setSelectedRole] = useState('');
    function handleRole(e) {
        setSelectedRole(e.target.value)
    }

    const getData = () => ({
        name: 'Ajay',
        managerName: 'Gopi',
        role: 'Developer',
        kraList: [
            { id: 1, kraType: 'Bug free code', weightage: 20 },
            { id: 2, kraType: 'New Platforms', weightage: 20 },
            { id: 3, kraType: 'Code on delivery', weightage: 20 }
        ]
    });
    useEffect(() => {
        const data = getData();
        console.log(data)
        setValue('roleiterate',data.kraList)
    }, [])
    return (

        <table style={{ border: '1px solid black' }}>
            <thead>
                <tr style={{ border: '1px solid black' }}>
                    <td>KRA Developer</td>
                    <td>Weightage</td>
                    <td>Goal Status</td>
                    <td>Target</td>
                </tr>
            </thead>
            <tbody>
                {list && list.kraList.map((item, index) => {
                    return (
                        <tr key={item.id}>
                            <td style={style}>
                                <Controller
                                    name='username'
                                    control={control}
                                    rules={{ required: 'Enter the FirstName' }}
                                    render={({ field }) => (
                                        <TextField
                                            variant='outlined'
                                            {...field}
                                            error={!!errors.username}
                                            value={item.kraType}

                                        />
                                    )}
                                />
                            </td>
                            <td style={style}>
                                <Controller
                                    name='weightage'
                                    control={control}
                                    rules={{ required: 'Enter the FirstName' }}
                                    render={({ field }) => (
                                        <TextField
                                            variant='outlined'
                                            {...field}
                                            value={item.weightage}
                                            error={!!errors.weightage}

                                        />
                                    )}
                                />
                            </td>
                            <td style={style}>
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
                            </td>
                            <td style={style}>Target</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>

    );
}
export default DispInfo;