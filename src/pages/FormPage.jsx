

import React from 'react';
import MyNavbar from '../components/MyNavbar';
import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { addProduct } from '../apis';

export default function FormPage() {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        // Create a FormData object to handle file upload
        // const formData = new FormData();
        // Object.keys(data).forEach((key) => {
        //     formData.append(key, data[key]);
        // });

        // const fileInput = document.getElementById("image");
        // if (fileInput && fileInput.files[0]) {
        //     formData.append("image", fileInput.files[0]);
        // }
        data.image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-hWeTNjoOT9tqiag9SdvhQAN8z6RcxW45Jw&s";
        try {
            console.log(data);
            await addProduct(data);
            alert("Success");
            reset();
        } catch (error) {
            console.error(error.response.data.error);
        }
    };

    return (
        <div>
            <MyNavbar />
            <Container>
                <Box sx={{ margin: 5, borderRadius: 2, bgcolor: '#eb7272', padding: 5 }}>
                    <Typography align='center' variant='h2'>Add Product</Typography>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Grid container spacing={2}>
                            <Grid item sm={12}>
                                <Typography variant="h3">Upload Image</Typography>
                                <input type="file" name="image" id="image" />
                            </Grid>
                            <Grid item sm={12}>
                                <TextField id="title" label="Title" variant="outlined" {...register("title")} fullWidth />
                            </Grid>
                            <Grid item sm={12}>
                                <TextField id="price" label="Price" variant="outlined" {...register("price")} fullWidth />
                            </Grid>
                            <Grid item sm={12}>
                                <TextField id="description" label="Description" variant="outlined" {...register("description")} fullWidth />
                            </Grid>
                            <Grid item sm={12}>
                                <TextField id="category" label="Category" variant="outlined" {...register("category")} fullWidth />
                            </Grid>
                            <Grid item sm={12}>
                                <TextField id="quantity" label="Quantity" variant="outlined" {...register("quantity")} fullWidth />
                            </Grid>
                            <Grid item sm={12}>
                                <Button type="submit" variant="outlined">Submit</Button>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </Container>
        </div>
    );
}
