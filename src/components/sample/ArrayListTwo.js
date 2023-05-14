import { Add, Delete } from '@mui/icons-material';
import { Button, IconButton, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import React from 'react';
import { Controller, useFieldArray, useFormContext } from 'react-hook-form';

const ArrayListTwo = () => {
  // fake data for map options with id,name
  const kraoptions = [
    {id:91, name:'Client Interaction'},
    {id:92, name:'Learn Trend Technology'},
    {id:93, name:'Team Performance'},
  ]
  function handleDeleteRow(index){
    removeAppendRoles(index);
  }
  function handleAppend(){
    addAppendRoles({
      kraTypeName:'',
      kraWeightage: '',
      kraStatus:'',
      kraTarget:''
    })
  }
  const { control, setValue } = useFormContext();
  const {
    fields: addrolefields,
    append: addAppendRoles,
    remove: removeAppendRoles
  } = useFieldArray({
    control,
    name: 'addtionaladdroles'
  });
  console.log(addrolefields, 'this is two')
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableBody>
            {addrolefields && addrolefields.map((item, index)=>{
              return(
                <TableRow key={item.id}>
                  <TableCell>
                    <Controller
                      name={`addtionaladdroles[${index}].kraTypeName`}
                      control={control}
                      render={({ field }) => (
                        <select {...field}>
                          {kraoptions.map((option, index)=>{
                            return(
                              <option value={option.name}>{option.name}</option>
                            );
                          })}
                        </select>
                      )}
                    />
                  </TableCell>
                  <TableCell>
                    <Controller
                      name={`addtionaladdroles[${index}].kraWeightage`}
                      control={control}
                      rules={{ required: true}}
                      render={({ field }) => (
                        <TextField {...field} />
                      )}
                    />
                  </TableCell>
                  <TableCell>
                    <Controller
                      name={`addtionaladdroles[${index}].kraStatus`}
                      control={control}
                      render={({ field }) => (
                        <TextField {...field} />
                      )}
                    />
                  </TableCell>
                  <TableCell>
                    <Controller
                      name={`addtionaladdroles[${index}].kraTarget`}
                      control={control}
                      render={({ field }) => (
                        <TextField {...field} />
                      )}
                    />
                  </TableCell>
                  <TableCell>
                    <Button onClick={()=>handleDeleteRow(index)}><Delete /></Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <IconButton><Add onClick={handleAppend} /></IconButton>
    </>
  )
}

export default ArrayListTwo
