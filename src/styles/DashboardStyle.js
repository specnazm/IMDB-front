import { createMuiTheme } from '@material-ui/core/styles';
import { drawerWidth } from './SideBarStyle';

let theme = createMuiTheme();

export const container =  {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(4),
    paddingRight: theme.spacing(20)
}
export const  appBar = {
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    })}

export const  appBarShift = {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.easeOut,
    duration: theme.transitions.duration.enteringScreen,
}),
}
export const menuButton =  {
    marginRight: theme.spacing(2),
}
export const menuButtonHide =  {
    display: 'none',
}