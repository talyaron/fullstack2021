import {Outlet} from 'react-router-dom'
import NavBar from './views/components/NavBar'
import {CssBaseline} from '@mui/material'
import {ThemeProvider} from '@mui/material/styles'



interface LayoutProps {
    loggedIn: boolean;
    usersPersonalInfo:any;
    setTheme:Function;
    theme:any;
    lightTheme:any;
    darkTheme:any;
    userId:any;
    setProfileId: Function;
}

function Layout(props: LayoutProps) {
    const {theme, lightTheme, darkTheme, loggedIn, setTheme, usersPersonalInfo, userId, setProfileId} = props
    // if (theme) {
    //     var { primary, secondary, background } = lightTheme.palette;
    //   } else {
    //     var { primary, secondary, background } = darkTheme.palette;
    //   }
  return (
    <div>
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
        <CssBaseline />
        <NavBar
        setProfileId={setProfileId}
        loggedIn={loggedIn}
          usersPersonalInfo={usersPersonalInfo}
          setTheme={setTheme}
          theme={theme}
          lightTheme={lightTheme}
          darkTheme={darkTheme}
          userId={userId}
        />
        <Outlet/>
        </ThemeProvider>
    </div>
  )
}

export default Layout