import { useEffect, useState } from 'react';
import { Box, FormControl, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import Select from 'react-select';
const CustomSelect = ({ value, onChange, options }) => (
    <Select
        options={options}
        value={options.find((option) => option.value === value)}
        onChange={(selectedOption) => onChange(selectedOption.value)}
    />
);

const ArrayListOne = () => {
    const { control, setValue } = useFormContext();
    const handleKraTypeChange = (index, value) => {
        setValue(`addRoles[${index}].kraType`, value)
    }
    // controlled select
    const [selectedOption, setSelectedOption] = useState(null);
    const rolebase = [{ id: 1, name: 'developer' }, { id: 2, name: 'tl' }, { id: 3, name: 'manager' }];
    const {
        fields: roleFields,
        append: roleAppend,
        remove: roleRemove
    } = useFieldArray({
        control,
        name: 'addRoles',
    });
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
    async function getRoles() {
        try {
            const data = await getData();
            const initialValue = data.kraList.map((item) => ({ ...item }));
            setValue('addRoles', initialValue)
        }
        catch (e) {
            throw e;
        }
    }
    useEffect(() => {
        getRoles();
    }, []);
    console.log(roleFields, 'the filed')

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>KRA Developer</TableCell>
                            <TableCell>Weightage</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Target</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {roleFields.map((item, index) => {
                            return (
                                <TableRow key={item.id}>
                                    <TableCell>
                                        <Controller
                                            name={`addRoles[${index}].kraType`}
                                            control={control}
                                            render={({ field }) => (
                                                <TextField {...field} disabled />
                                            )}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <Controller
                                            name={`addRoles[${index}].weightage`}
                                            control={control}
                                            render={({ field }) => (
                                                <TextField {...field} disabled />
                                            )}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <Controller
                                            control={control}
                                            name={`addRoles[${index}].select`}
                                            defaultValue='' // Set default value from fetched data
                                            rules={{ required: true }}
                                            render={({ field }) => (
                                                <select {...field}>
                                                    <option value="">Select an option</option>
                                                    <option value="option1">Option 1</option>
                                                    <option value="option2">Option 2</option>
                                                    <option value="option3">Option 3</option>
                                                </select>
                                            )}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <Controller
                                            name={`addRoles[${index}].target`}
                                            control={control}
                                            render={({ field }) => (
                                                <TextField {...field} />
                                            )}
                                        />
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer></>
    );
}
export default ArrayListOne;