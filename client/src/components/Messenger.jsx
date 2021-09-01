import { useContext } from 'react';

import { AccountContext } from '../context/AccountProvider';
import { AppBar, Toolbar, makeStyles, Box } from '@material-ui/core';
//components
import LoginDialog from './acoount/Login';
import ChatDialog from './ChatDialog';

const useStyles = makeStyles({
    component: {
        height: '100vh',
        background: '#DCDCDC'
    },
    header: {
        background: '#128C7E',
        height: 115,
        boxShadow: 'none'
    },
    loginHeader: {
        background: '#00bfa5',
        height: 200,
        boxShadow: 'none'
    }
})

const Messenger = () => {
    const classes = useStyles();
    const { account } = useContext(AccountContext);
    return (
        <Box className={classes.component}>
            <AppBar className={account ? classes.header : classes.loginHeader}>
                <Toolbar>

                </Toolbar>
            </AppBar>
            {
                account ? <ChatDialog /> : <LoginDialog />
            }
        </Box>
    )
}

export default Messenger;