import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import MemoryOutlinedIcon from '@mui/icons-material/MemoryOutlined';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const Item = ({ title, to, icon, selected, setSelected}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <MenuItem 
            active={selected === title} 
            style={{ color: colors.grey[100]}} 
            onClick={()=> setSelected(title)} 
            icon={icon}
        >
            <Typography>{title}</Typography>
            <Link to={to} />
        </MenuItem>
    )
}

const PageLink = ({title, icon, to}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <MenuItem 
            style={{ color: colors.grey[100]}} 
            icon={icon}
        >
            <Typography>{title}</Typography>
            <Link 
                to={to}
                target="_blank" 
                rel="noopener noreferrer"      
            />
        </MenuItem>
    )
}

const Sidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [selected, setSelected] = useState("About");

    return (
        <Box
            sx={{
                "& .pro-sidebar-inner": {
                background: `${colors.primary[400]} !important`,
                },
                "& .pro-icon-wrapper": {
                    backgroundColor: `transparent !important`
                },
                "& .pro-inner-item": {
                    padding: `5px 35px 5px 20px !important`
                },
                "& .pro-inner-item:hover": {
                    color: `#868dfb !important`
                },
                "& .pro-menu-item.active": {
                    color: `#6870fa !important`
                },
            }}
        >
            <ProSidebar collapsed={isCollapsed}>
                <Menu iconShape="square">
                    {/* LOGO AND MENU ICON */}
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuOutlinedIcon /> :undefined}
                        style={{
                            margin: "10px 0 20px 0",
                            color: colors.grey[100]
                        }}
                    >
                        {!isCollapsed && (
                            <Box
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                ml="15px"
                                
                            > 
                                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                    <MenuOutlinedIcon/>
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>

                    {/* USER */}
                    {!isCollapsed && (
                        <Box mb="25px">
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <img 
                                    alt="profile-user"
                                    width="100px"
                                    height="100px"
                                    src={'../../assets/user.png'}
                                    style={{ cursor: "pointer", borderRadius:"50%"}}
                                />
                            </Box>

                            <Box textAlign="center">
                                <Typography 
                                    variant="h2" 
                                    color={colors.grey[100]} 
                                    fontWeight="bold" 
                                    sx={{m: "10px 0 0 0"}}
                                >
                                    Danial Zulkifli
                                </Typography>
                                <Typography variant ="h5" color = {colors.greenAccent[400]}>
                                    Data Scientist 
                                    <br/>
                                    & 
                                    <br/>
                                    Full-Stack Developer
                                </Typography>
                            </Box>
                        </Box>
                    )}

                    {/* MENU ITEMS */}
                    <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                        <Item
                            title="About"
                            to="/"
                            icon={<HomeOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Typography
                            variant="h6"
                            color = {colors.grey[300]}
                            sx = {{m: "15px 0 5px 20px"}}
                        >
                            My Work
                        </Typography>
                        <Item
                            title="Projects"
                            to="/project"
                            icon={<CodeOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Skills"
                            to="/skill"
                            icon={<MemoryOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Typography
                            variant="h6"
                            color = {colors.grey[300]}
                            sx = {{m: "15px 0 5px 20px"}}
                        >
                            My Links
                        </Typography>
                        <PageLink 
                            title="CV"
                            to="https://drive.google.com/file/d/1WPKUu0DPsmI-CCym1wS3gWL9qBjb4IKq/view?usp=sharing"
                            icon={<ContactPageOutlinedIcon />}
                        />
                        <PageLink
                            title="LinkedIn"
                            to="https://www.linkedin.com/in/fzdanial/"
                            icon={<LinkedInIcon />}
                        />
                        <PageLink
                            title="GitHub"
                            to="https://github.com/fzdanial"
                            icon={<GitHubIcon />}
                        />

                        {/* <Typography
                            variant="h6"
                            color = {colors.grey[300]}
                            sx = {{m: "15px 0 5px 20px"}}
                        >
                            Contact
                        </Typography> */}
                        {/* <Item
                            title="Email Me"
                            to="/bar"
                            icon={<EmailOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        /> */}
                    </Box>
                </Menu>
            </ProSidebar>
        </Box>
    );
}

export default Sidebar;

//need to change the colors to static of the :
// icons, name,