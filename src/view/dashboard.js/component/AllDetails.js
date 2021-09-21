import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Typography, NoSsr } from '@material-ui/core';
import { SectionHeader } from '../../../component/molucules';
import { CardBase } from '../../../component/organisms';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import GroupsIcon from '@mui/icons-material/Groups';
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import { useDispatch, useSelector } from 'react-redux';
import { listAllBooth } from '../../../Action/BoothAction'
import { listAllVoter } from '../../../Action/VoterAction'
import { listUsers } from '../../../Action/UserLoginAction'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    cardBase: {
        '&:hover': {
            background: theme.palette.primary.main,
            '& .card-icon, & .card-title': {
                color: 'white',
            },
        },
    },
    icon: {
        fontSize: 60,
        color: theme.palette.primary.main,
        [theme.breakpoints.up('sm')]: {
            fontSize: 80,
        },        
    },
    title: {
        marginTop: theme.spacing(4),
        [theme.breakpoints.up('sm')]: {
            marginTop: theme.spacing(6),
        },
    },
}));

const AllDetails = (props,{  history, match }) => {
    const { className, ...rest } = props;
    const classes = useStyles();

    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'), {
        defaultMatches: true,
    });

    const dispatch = useDispatch();
    const vdispatch = useDispatch();
    const udispatch = useDispatch();
    const boothList = useSelector ((state) => state.boothList)
    const { booths } = boothList
    const voterList = useSelector((state) => state.voterList)
    const { voters } = voterList
    
    const userList = useSelector((state) => state.userList)
    const { users } = userList
    useEffect(() => {
        dispatch(listAllBooth())
        vdispatch(listAllVoter())
        udispatch(listUsers())
        
    }, [dispatch, vdispatch, udispatch])  
    return (
        <div className={className} {...rest}>
            <SectionHeader
                title="All Details "
               // subtitle="After 3 days all of your offers will arrive and you will have another 7 days to select your new company."
                data-aos="fade-up"
            />
            <Grid container spacing={isMd ? 4 : 2}>
                <Grid item xs={12} sm={4} data-aos="fade-up">
                    <Link to='/userlist' style={{textDecoration: 'none' }}>
                    <CardBase withShadow liftUp className={classes.cardBase}>
                        <div>
                            <NoSsr>
                                
                                <AccountBoxIcon className={clsx(classes.icon, 'fas fa-door-open', 'card-icon')}/>
                            </NoSsr>
                        </div>
                        <Typography
                            variant="h5"
                            color="textPrimary"
                            align="center"
                            noWrap
                            className={clsx(classes.title, 'card-title')}
                        >
                            All Team Member: ({users.length})
                        </Typography>
                    </CardBase>
                    </Link>
                </Grid>

                <Grid item xs={12} sm={4} data-aos="fade-up">
                    <Link to='/booth' style={{textDecoration: 'none' }}>
                    <CardBase withShadow liftUp className={classes.cardBase}>
                        <div>
                            <NoSsr>
                                <GroupsIcon className={clsx(classes.icon, 'fas fa-door-open', 'card-icon')} />
                            </NoSsr>
                        </div>
                        <Typography
                            variant="h5"
                            color="textPrimary"
                            align="center"
                            noWrap
                            className={clsx(classes.title, 'card-title')}
                        >
                            All Booth: ({booths.length})
                        </Typography>
                    </CardBase>
                    </Link>
                </Grid>
                <Grid item xs={12} sm={4} data-aos="fade-up">
                    {/* <Link to='/userlist' style={{textDecoration: 'none' }}> */}
                    <CardBase withShadow liftUp className={classes.cardBase}>
                        <div>
                            <NoSsr>
                                
                                <HowToVoteIcon className={clsx(classes.icon, 'fas fa-door-open', 'card-icon')} />

                            </NoSsr>
                        </div>
                        <Typography
                            variant="h5"
                            color="textPrimary"
                            align="center"
                            noWrap
                            className={clsx(classes.title, 'card-title')}
                        >
                            All Voter: ({voters.results})
                        </Typography>
                    </CardBase>
                    {/* </Link> */}
                </Grid>
            
            </Grid>
        </div>
    );
};

AllDetails.propTypes = {
    /**
     * External classes
     */
    className: PropTypes.string,
};

export default AllDetails;
