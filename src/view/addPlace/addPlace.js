// import React from 'react'

// const addPlace = () => {
//     return (
//         <div>
//             added
//         </div>
//     )
// }

// export default addPlace

import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Form } from './components';
import { SectionHeader } from '../../component/molucules';
import { Section } from '../../component/organisms';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    formContainer: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: `calc(100vh - ${theme.mixins.toolbar['@media (min-width:600px)'].minHeight}px)`,
        maxWidth: 500,
        margin: `0 auto`,
    },
    section: {
        paddingTop: 0,
        paddingBottom: 0,
    },
}));
const WhiteTextTypography = withStyles({
    root: {
        color: "#FF0000"
    }
})(Typography);

const AddPlace = ({ match }) => {
    const userId = match.params.id
    const classes = useStyles();

    return (
        <div>
            <Section className={classes.section}>

                <div className={classes.formContainer}>
                    <SectionHeader
                        title="Assigne Place"
                        
                        color="textPrimary"
                        titleProps={{
                            variant: 'h4',

                        }}
                    />
                    {/* <Typography style={{ color: "#FF0000"}} subtitle1='h2' variant="h6">
            Booth Data Collection
          </Typography> */}
                    <Form data={userId}/>
                </div>
            </Section>
        </div>
    );
};

export default AddPlace;
