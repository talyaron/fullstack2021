import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';



const PicForm = (props: any) => {

    return (
        <>
            <Container>
                <form noValidate autoComplete='off' onSubmit={props.submit}>
                    <TextField sx={{
                        marginTop: 2,
                        marginBottom: 2,
                        display: 'block'
                    }}
                        required
                        variant='outlined'
                        id="name"
                        label="Picture Name"
                        fullWidth
                        error={props.nameError} />
                    <TextField
                        className='test'
                        required
                        id="pic"
                        label="Picture URL"
                        rows={4}
                        fullWidth
                        error={props.picError}
                    />
                    <Container id='addphoto'>
                    <Button variant="contained" type='submit' className='add' id={props.cardId}>{props.job} Photo</Button>
                    </Container>
                </form>
            </Container>
        </>
    )
}

export default PicForm