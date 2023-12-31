import React,{lazy} from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TabScrollButton from '@mui/material/TabScrollButton';
import Profile from 'views/Profile/AuthProfile';
import Loadable from 'ui-component/Loadable';

const ChangePassword = Loadable(lazy(() => import('views/pages/authentication/authentication3/changePassword')));


const LabTabs = ({ data, value, handleChange }) => {
  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" ScrollButtonComponent={(props) => (
            <TabScrollButton {...props} />
          )}
            variant="scrollable"
            scrollButtons="auto">
            {data?.map((item) => {
              return (
                <Tab label={item.label} value={item.value} key={item.id} />
              )
            })}
          </TabList>
        </Box>
        {data?.map((item) => {
          return (
            <TabPanel value={item.value} key={item.id}>
             {item.label === 'Profile' && <Profile />}
             {item.label === 'Security' && <ChangePassword />}
             {/* {item.label !== 'Profile' && item.label} */}
            </TabPanel>
          )
        })}
      </TabContext>
    </Box>
  );
}
export default LabTabs;