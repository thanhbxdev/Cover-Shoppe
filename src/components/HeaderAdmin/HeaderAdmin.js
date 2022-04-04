import React, {useState} from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {Link, NavLink} from "react-router-dom";
import Register from "../../pages/Auth/components/register";

function HeaderAdmin() {
    const [open, setOpen] = useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        <Link to="/admin" className="custom-link">
                            Shoppe Manager
                        </Link>
                    </Typography>
                    <NavLink to="/admin/product" className="custom-link">
                        <Button color="inherit">Products</Button>
                    </NavLink>
                    <NavLink to="/admin/category" className="custom-link">
                        <Button color="inherit">Category</Button>
                    </NavLink>
                    <Button color="inherit" onClick={handleClickOpen}>Register</Button>
                </Toolbar>
            </AppBar>
            <Dialog
                disableEscapeKeyDown
                // onBackdropClick
                open={open}
                onClose={handleClose}
            >
                <DialogContent>
                    <Register/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </Box>
    )
}

export default HeaderAdmin