import { styled, useTheme } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import BOSections from '../../features/backoffice/backOfficeSections';
import { Link } from 'react-router-dom';
import { Get } from '../../Services/privateApiService';

const referenceWidth = 240;

const sideBarStyle = {
    color: "#33B1FF"
}

const SideBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})
    (({theme, open}) => ({
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
            width: `calc(100% - ${referenceWidth}px`,
            marginLeft: `${referenceWidth}px`,
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }), 
        }),
    }));

const SidebarHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0,1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function NavbarBackoffice(){
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [navbarName, setNavbarName] = useState('Backoffice');

    useEffect(() => {
        Get('https://ongapi.alkemy.org/public/api/organization')
        .then((res) => {
            setNavbarName(res.data.data.name);
        })
    }, []);

    const SideBarOpen = () => {
        setOpen(true);
    }

    const SideBarClose = () => {
        setOpen(false);
    };

    return(
        <Box sx={{ display: 'flex' }}>
            <CssBaseline/>
            <SideBar position="static" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="Desplegar"
                        onClick={() => SideBarOpen()}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' })}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        {navbarName}
                    </Typography>
                </Toolbar>
                <Drawer
                    sx={{
                        width: referenceWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: referenceWidth,
                            boxSizing: 'border-box',
                        },
                    }}
                    variant="persistent"
                    anchor="left"
                    open={open}
                >
                    <SidebarHeader>
                        <IconButton onClick={() => SideBarClose()}>
                            {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                        </IconButton>
                    </SidebarHeader>
                    <Divider/>
                    <List>
                        {BOSections.map((section, index) => (
                            <Link style={sideBarStyle} to={section.path} key={index}>
                                <ListItem button key={section.name}>
                                    <ListItemIcon>
                                        <ArrowForwardIosIcon/>
                                    </ListItemIcon>
                                        <ListItemText>
                                            {section.name}
                                        </ListItemText>
                                </ListItem>
                            </Link>
                        ))}
                    </List>
                </Drawer>
            </SideBar>
        </Box>
    )
}