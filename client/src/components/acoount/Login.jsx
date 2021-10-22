import { useState, useEffect, useContext } from 'react';
import { Dialog } from '@material-ui/core';
import { makeStyles, Typography, List, ListItem, Box, withStyles } from '@material-ui/core';

import { GoogleLogin, GoogleLogout } from 'react-google-login';

import { addUser } from '../../services/api.js';
import { AccountContext } from '../../context/AccountProvider';

const useStyle = makeStyles({
    component: {
        display: 'flex'
    },
    dialog: {
        padding: '56px 0 56px 56px',
    },
    qr: {
        margin: '50px 0 0 50px',
        height: 264,
        width: 264
    },
    title: {
        fontSize: 26,
        marginBottom: 25,
        color: '#525252',
        fontFamily: 'Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif',
        fontWeight: 300   
    },
    list: {
        '&  > *': {
            padding: 0,
            marginTop: 15,
            fontSize: 18,
            lineHeight: '28px',
            color: '#4a4a4a'
        }
    }
})

const style = {
    dialogPaper: {
        marginTop: '12%',
        height: '95%',
        width: '60%',
        maxWidth: '100%',
        maxHeight: '100%',
        borderRadius: 0,
        boxShadow: 'none',
        overflow: 'hidden'
    }
};

const LoginDialog = ({ classes }) => {
    const classname = useStyle();
    const url = 'https://www.ginifab.com/feeds/qr_code/img/qrcode.jpg';
    const clientId='1028070959344-mf57leunvoemm2v3lj8kr2pacpt0223u.apps.googleusercontent.com';
  const {account ,setAccount}=useContext(AccountContext);


    const onLoginSuccess = async (res) => {
        console.log('Login Success:', res.profileObj);
        setAccount(res.profileObj);
        // setShowloginButton(false);
        // setShowlogoutButton(true);
        await addUser(res.profileObj);
    };

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };



    return (
        <Dialog 
            open={true}
            classes={{paper: classes.dialogPaper}} 
            BackdropProps={{style: {backgroundColor: 'unset'}}}
        >
            <Box className={classname.component}>
                <Box className={classname.dialog}>
                    <Typography className={classname.title}>To use Whatsupp on your computer:</Typography>
                    <List className={classname.list}>
                        <ListItem>1. Open Whatsupp on your phone</ListItem>
                        <ListItem>2. Tap Menu Settings and select Whatsupp Web</ListItem>
                        <ListItem>3. Point your phone to this screen to capture the code</ListItem>
                    </List>

                </Box>
                    <Box style={{position:'relative'}}>
                    <img src={url} alt="QR" className={classname.qr} />
                    <div style={{position: 'absolute', left: '50%', top: '50%', transform: 'translateX(0%) translateY(-25%)'}}>
                        {/* { showloginButton ? */}
                            <GoogleLogin
                                clientId={clientId}
                                buttonText=""
                                onSuccess={onLoginSuccess}
                                onFailure={onLoginFailure}
                                cookiePolicy={'single_host_origin'}
                                isSignedIn={true}
                            /> 

                        {/* { showlogoutButton ?
                            <GoogleLogout
                                clientId={clientId}
                                buttonText=""
                                onLogoutSuccess={onSignoutSuccess}
                            >
                            </GoogleLogout> : null
                        } */}
                    </div>
                </Box>
            </Box>
        </Dialog>
    )
}

export default withStyles(style)(LoginDialog);