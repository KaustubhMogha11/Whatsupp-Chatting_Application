import { useContext, useState } from 'react';
import { Box, makeStyles } from '@material-ui/core';
import { Chat as MessageIcon } from '@material-ui/icons';

import { AccountContext } from '../../context/AccountProvider.jsx';
import {  IconButton, useColorMode } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';
//components
import HeaderMenu from './HeaderMenu';
import InfoDrawer from '../drawer/Drawer';

const useStyles = makeStyles({
    header: {
        height: 35,
        background: '#ededed',
        display: 'flex',
        padding: '10px 16px',
        alignItems: 'center'
    },
    chatIcons: {
        marginLeft: 'auto',
        '& > *': {
            marginLeft: 2,
            padding: 8,
            color: '#919191'
        },
        '& :first-child': {
            fontSize: 22,
            marginRight: 8,
            marginTop: 3
        }
    },
    avatar: {
        height: 37,
        width: 37,
        borderRadius: '50%'
    }
})

const Header = () => {
    const classes = useStyles();

    const [openDrawer, setOpenDrawer] = useState(false);

    const { account } = useContext(AccountContext);

    const toggleDrawer = () => {
        setOpenDrawer(true);
    }
    const {colorMode, toggleColorMode}=useColorMode();

    return (
        <>
            <Box className={classes.header}>
                <img src={account.imageUrl} className={classes.avatar} onClick={() => toggleDrawer()} />
                <Box className={classes.chatIcons}>
                    {/* <Box display='flex' p={6}>
                        <IconButton
                    
                            icon={colorMode=='light' ? <FaSun/> : <FaMoon/>}
                            isRound={true}
                            mr={5}
                            onClick={toggleColorMode}
                        />

                    </Box> */}
                    <MessageIcon />
                    <HeaderMenu />
                </Box>
            </Box>
            <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} profile={true} />
        </>
    )
}

export default Header;