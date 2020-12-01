import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import CalendarTodayOutlinedIcon from '@material-ui/icons/CalendarTodayOutlined';
import ScheduleOutlinedIcon from '@material-ui/icons/ScheduleOutlined'

import './TabNavigator.css';



const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        width:600,
        backgroundColor:'transparent',
        boxShadow:'none'
    },
    tab:{
        color:'#7d7777',
        textTransform: 'capitalize'
    },
    tabActive:{
        color:'whitesmoke'
    }
});



const IconLabelTabs = (props) => {
    const classes = useStyles();
    

    return (
        <Paper square className={classes.root}>
            <Tabs
                value={props.value}
                onChange={props.changed}
                variant="fullWidth"
                indicatorColor="inherit"
                textColor="inherit"
                aria-label="icon label tabs example"
                className='Tabs'
            >
                <Tab
                    label= 'hourly'
                    classes={{
                        selected:classes.tabActive,
                        textColorInherit:classes.tab
                    }}
                    icon={<ScheduleOutlinedIcon/>}
                />
                <Tab
                    label= 'daily'
                    classes={{
                        selected:classes.tabActive,
                        textColorInherit:classes.tab
                    }}
                    icon={<CalendarTodayOutlinedIcon/>}
                />
            </Tabs>
        </Paper>
    );
}

export default IconLabelTabs;
