import React from 'react'oter'
import { Button, Grid,  Typography } from '@mui/material'
import {  LockClock} from '@mui/icons-material'
import "./buyer_details.scss"
import PersonIcon from '@mui/icons-material/Person';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

export default function Buyer_details() {
    return (
        <>
            <Grid container direction="column" className='buyer_details_container' sx={{width:'80%'}}>
                {/* <Grid item> <Navbar /> </Grid> */}

                <Grid item> <Typography gutterBottom variant='h4' className='buyer_details_title'>Address</Typography> </Grid>

                <Grid item container direction="column" spacing={2} className='buyer_details_form'>  
                    <Grid item container direction='row' spacing={5}> 
                        <Grid item> 
                            <div class="inputWithIcon">
                                <input type="text" placeholder="First Name" />
                                <PersonIcon className='i'/>
                            </div>
                        </Grid>
                        <Grid item>
                            <div class="inputWithIcon">
                                <input type="text" placeholder="Last Name" />
                                <PersonIcon className='i'/>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid item >
                        <Button className='pick_loc_button' variant="outlined">Pick Location</Button>
                    </Grid>
                    <Grid item container direction='row' spacing={5}> 
                        <Grid item> 
                            <div class="inputWithIcon">
                                <input type="text" placeholder="Address" />
                                <LocationOnIcon className='i'/>
                            </div>
                        </Grid>
                        <Grid item>
                            <div class="inputWithIcon">
                                <input type="text" placeholder="City" />
                                <LocationOnIcon className='i'/>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid item container direction='row' spacing={5}> 
                        <Grid item>
                            <div class="inputWithIcon">
                                <input type="text" placeholder="State" />
                                <LocationOnIcon className='i'/>
                            </div>
                        </Grid>
                        <Grid item>
                            <div class="inputWithIcon">
                                <input type="text" placeholder="Pincode" />

                            </div>
                        </Grid>
                    </Grid>
                    <Grid item container direction='row' spacing={5}> 
                        <Grid item>
                            <div class="inputWithIcon">
                                <input type="tel" placeholder="Enter Your Number" />
                                <CallIcon className='i'/>
                            </div>
                        </Grid>
                        <Grid item>
                            <div class="inputWithIcon">
                                <input type="email" placeholder="Email" />
                                <EmailIcon className='i'/>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid item >
                        <Button variant="contained" startIcon={<LockClock />} className='add_cart'>
                        Back to Cart
                        </Button>
                    </Grid>

                </Grid>
                    

                {/* <Grid item> <Footer /> </Grid> */}
            </Grid>
        </>
    )
}


                    
