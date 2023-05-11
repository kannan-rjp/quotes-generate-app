import React, { useState } from 'react';
import {Box} from '@mui/material';
import { useForm, useFieldArray } from 'react-hook-form';

const Dynamic = () => {

    const items = [
        {
            id: 1,
            itemName: "item 1",
            mrp: '98000',
            qty: "1",
            price: '220',
            discount: '',
            amount: ''
        },
        {
            id: 2,
            itemName: "item 2",
            mrp: '23000',
            qty: "4",
            price: '220',
            discount: '',
            amount: ''
        },
        {
            id: 3,
            itemName: "item 3",
            mrp: '23000',
            qty: "2",
            price: '220',
            discount: '',
            amount: ''
        }
    ]
    const [data, setData] = useState();
    const { control, register, handleSubmit, setValue, getValues, watch } = useForm();
    const { fields, append, remove } = useFieldArray({
        control,
        name: "list"
    });
    const watchItems = watch("list")
    console.log(watchItems)
    if (fields.length === 0) {
        append();
    }
    const onSave = data => {
        console.log(data,'the submit')
        setData({ ...data });
    }
    function qtyChange(index,propName,value){
        console.log(index,propName,value);
        setValue(`list.${index}.${propName}`, value);
        setValue(`list.${index}.amount`, Number(getValues(`list.${index}.qty`))*Number(getValues(`list.${index}.price`)))
    }
    function itemChange(e,index) {
        const selectedValue = items.find((item)=> item.itemName === e.target.value);
        if(selectedValue){
            setValue(`list.${index}.mrp`,selectedValue.mrp)
            setValue(`list.${index}.qty`,selectedValue.qty)
            setValue(`list.${index}.price`,selectedValue.price)
            setValue(`list.${index}.discount`,10)
            setValue(`list.${index}.amount`, Number(getValues(`list.${index}.price`)) * Number(getValues(`list.${index}.qty`)) ) 
                
        }
        // setValue(`list.${index}.mrp`, e.)
    }
    console.log(fields,'the arr')
    return (
        <Box sx={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
        }}> <form onSubmit={handleSubmit(onSave)}>
                <h4>Dynamic form with react-hook-form using useFieldArray</h4>
                <input type='number' {...register('invoice')} placeholder='Invoice Numebr' />
                <input type='date' {...register('date')} />
                <table style={{ border: '1px solid black' }}>
                    <thead>
                        <tr><td>No</td><td>Items</td><td>MRP</td><td>Qty</td><td>Price</td><td>Discount</td><td>Discount Rate</td><td>Action</td></tr>
                    </thead>
                    <tbody>
                        {fields.map((item, index) => (
                            <tr key={index + 1}>
                                <td>{index+1}</td>
                                <td><select {...register(`list.${index}.selectedop`)} onChange={(e)=> itemChange(e, index)}  >{items.map((itemlist, index) => (<option value={itemlist.itemName}>{itemlist.itemName}</option>))}</select></td>
                                <td><input {...register(`list.${index}.mrp`)} disabled /></td>
                                <td><input {...register(`list.${index}.qty`)} onChange={(e)=>qtyChange(index,'qty',e.target.value)} /></td>
                                <td><input {...register(`list.${index}.price`)} onChange={(e)=>qtyChange(index,'price',e.target.value)} /></td>
                                <td><input {...register(`list.${index}.discount`)} /></td>
                                <td><input {...register(`list.${index}.amount`)} /></td>
                                <td><button onClick={() => remove(index+1)}>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button type='submit'>Submit</button>
            </form>
            <button onClick={() => append()}>Add Item</button>
        </Box>
)
}

export default Dynamic;