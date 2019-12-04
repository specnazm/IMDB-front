import { createMuiTheme } from '@material-ui/core/styles';

let theme = createMuiTheme();

export const drawerWidth = 300;

export const drawer = {
    width: drawerWidth,
    flexShrink: 0,
}
export const drawerPaper = {
    width: drawerWidth,
}
export const drawerHeader = {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    justifyContent: 'left',
}