// import { useState, useEffect } from "react";
// import {
//   IconButton,
//   List,
//   ListItem,
//   ListItemText,
//   ListItemButton,
//   Checkbox,
//   ListItemIcon,
//   Accordion,
//   AccordionSummary,
//   Typography,
//   AccordionDetails,
// } from "@mui/material";
// import axios from "axios";

// const FilterMenu = (props: any) => {
//   const { checked, setChecked } = props;

//   const handleToggle = (value: number) => () => {
//     const currentIndex = checked.indexOf(value);
//     const newChecked = [...checked];
//     if (currentIndex === -1) {
//       newChecked.push(value);
//     } else {
//       newChecked.splice(currentIndex, 1);
//     }
//     setChecked(newChecked);
//   };

//   useEffect(() => {
//     (async () => {
//       const { data } = await axios.get("/api/users/get-mentors");
//       const { allChecked } = data;
//       setChecked(allChecked);
//       console.log(allChecked);
//     })();
//   }, []);

//   return (
//     <div className="matching__filter-menu">
//       <div className="_section">
//         <div className="_title"></div>
//         {/* <form className="_option"></form> */}
//         <div className="_more">
//           <Accordion>
//             <AccordionSummary
//               expandIcon={<ExpandMoreIcon />}
//               aria-controls="panel1a-content"
//               id="panel1a-header"
//             >
//               <Typography>Sector</Typography>
//             </AccordionSummary>
//             <AccordionDetails>
//               <Typography></Typography>
//               <List
//                 sx={{
//                   width: "100%",
//                   maxWidth: 360,
//                   bgcolor: "background.paper",
//                 }}
//               >
//                 {[0, 1, 2].map((value) => {
//                   const labelId = `checkbox-list-label-${value}`;

//                   return (
//                     <ListItem
//                       // key={value}
//                       secondaryAction={
//                         <IconButton
//                           edge="end"
//                           aria-label="comments"
//                         ></IconButton>
//                       }
//                       disablePadding
//                     >
//                       <ListItemButton
//                         role={undefined}
//                         onClick={handleToggle(value)}
//                         dense
//                       >
//                         <ListItemIcon>
//                           <Checkbox
//                             edge="start"
//                             checked={checked.indexOf(value) !== -1}
//                             tabIndex={-1}
//                             disableRipple
//                             inputProps={{ "aria-labelledby": labelId }}
//                           />
//                         </ListItemIcon>

//                         <ListItemText id={labelId} primary={`Education `} />
//                       </ListItemButton>
//                     </ListItem>
//                   );
//                 })}
//               </List>
//             </AccordionDetails>
//           </Accordion>
//           <Accordion>
//             <AccordionSummary
//               expandIcon={<ExpandMoreIcon />}
//               aria-controls="panel1a-content"
//               id="panel1a-header"
//             >
//               <Typography>Country</Typography>
//             </AccordionSummary>
//             <AccordionDetails>
//               <Typography></Typography>
//               <List
//                 sx={{
//                   width: "100%",
//                   maxWidth: 360,
//                   bgcolor: "background.paper",
//                 }}
//               >
//                 {[0, 1, 2].map((value) => {
//                   const labelId = `checkbox-list-label-${value}`;

//                   return (
//                     <ListItem
//                       key={value}
//                       secondaryAction={
//                         <IconButton
//                           edge="end"
//                           aria-label="comments"
//                         ></IconButton>
//                       }
//                       disablePadding
//                     >
//                       <ListItemButton
//                         role={undefined}
//                         onClick={handleToggle(value)}
//                         dense
//                       >
//                         <ListItemIcon>
//                           <Checkbox
//                             edge="start"
//                             checked={checked.indexOf(value) !== -1}
//                             tabIndex={-1}
//                             disableRipple
//                             inputProps={{ "aria-labelledby": labelId }}
//                           />
//                         </ListItemIcon>

//                         <ListItemText id={labelId} primary={`Slovenia `} />
//                       </ListItemButton>
//                     </ListItem>
//                   );
//                 })}
//               </List>
//             </AccordionDetails>
//           </Accordion>
//           <Accordion>
//             <AccordionSummary
//               expandIcon={<ExpandMoreIcon />}
//               aria-controls="panel1a-content"
//               id="panel1a-header"
//             >
//               <Typography>Speciality</Typography>
//             </AccordionSummary>
//             <AccordionDetails>
//               <Typography></Typography>
//               <List
//                 sx={{
//                   width: "100%",
//                   maxWidth: 360,
//                   bgcolor: "background.paper",
//                 }}
//               >
//                 {[0, 1, 2].map((value) => {
//                   const labelId = `checkbox-list-label-${value}`;

//                   return (
//                     <ListItem
//                       key={value}
//                       secondaryAction={
//                         <IconButton
//                           edge="end"
//                           aria-label="comments"
//                         ></IconButton>
//                       }
//                       disablePadding
//                     >
//                       <ListItemButton
//                         role={undefined}
//                         onClick={handleToggle(value)}
//                         dense
//                       >
//                         <ListItemIcon>
//                           <Checkbox
//                             edge="start"
//                             checked={checked.indexOf(value) !== -1}
//                             tabIndex={-1}
//                             disableRipple
//                             inputProps={{ "aria-labelledby": labelId }}
//                           />
//                         </ListItemIcon>

//                         <ListItemText id={labelId} primary={`UX`} />
//                       </ListItemButton>
//                     </ListItem>
//                   );
//                 })}
//               </List>
//             </AccordionDetails>
//           </Accordion>
//           <Accordion>
//             <AccordionSummary
//               expandIcon={<ExpandMoreIcon />}
//               aria-controls="panel1a-content"
//               id="panel1a-header"
//             >
//               <Typography>Type of User</Typography>
//             </AccordionSummary>
//             <AccordionDetails>
//               <Typography></Typography>
//               <List
//                 sx={{
//                   width: "100%",
//                   maxWidth: 360,
//                   bgcolor: "background.paper",
//                 }}
//               >
//                 {[0, 1, 2].map((value) => {
//                   const labelId = `checkbox-list-label-${value}`;

//                   return (
//                     <ListItem
//                       key={value}
//                       secondaryAction={
//                         <IconButton
//                           edge="end"
//                           aria-label="comments"
//                         ></IconButton>
//                       }
//                       disablePadding
//                     >
//                       <ListItemButton
//                         role={undefined}
//                         onClick={handleToggle(value)}
//                         dense
//                       >
//                         <ListItemIcon>
//                           <Checkbox
//                             edge="start"
//                             checked={checked.indexOf(value) !== -1}
//                             tabIndex={-1}
//                             disableRipple
//                             inputProps={{ "aria-labelledby": labelId }}
//                           />
//                         </ListItemIcon>

//                         <ListItemText id={labelId} primary={`Mentor `} />
//                       </ListItemButton>
//                     </ListItem>
//                   );
//                 })}
//               </List>
//             </AccordionDetails>
//           </Accordion>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FilterMenu;
