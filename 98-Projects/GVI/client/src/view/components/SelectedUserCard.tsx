//@ts-ignore
import LinkedInIcon from "@mui/icons-material/LinkedIn";
//@ts-ignore
import StarIcon from "@mui/icons-material/Star";
import "../styles/card.scss";
import axios from "axios";
import { Container } from "@mui/system";
import { Box, Grid, Stack } from "@mui/material";
import Paper from "@mui/material/Paper";

interface CardProps {
  selectedUsers: any;
}

const Card = (props: CardProps) => {
  const { selectedUsers } = props;

  return (
    <Box>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        style={{
          columnGap: "1vw",
          rowGap: "5vw",
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        {selectedUsers.map((selectedUser: any, i: any) => (
          <div className="card">
            <img
              className="photo"
              id={selectedUser._id}
              src={
                selectedUser.image
                  ? `${selectedUser.image}`
                  : "https://www.pngitem.com/pimgs/m/504-5040528_empty-profile-picture-png-transparent-png.png"
              }
            />

            <div className="card__center">
              <p>
                {selectedUser["name"]["first"]} {selectedUser["name"]["last"]}
              </p>

              <div className="card__flex">
                <img
                  src={
                    selectedUser.country
                      ? `${selectedUser.country}`
                      : "https://flagsweb.com/Flag_Colouring_Page/WEBP/Germany_Flag_Colouring_Page.webp"
                  }
                />
                <a
                  href={
                    `${selectedUser.linkedInProfile}`.startsWith("https://")
                      ? `${selectedUser.linkedInProfile}`
                      : "https://www.linkedin.com/"
                  } target="_blank"
                >
                  <LinkedInIcon
                    className="card__flex__linkdIn"
                    style={{ fontSize: "30px" }}
                  ></LinkedInIcon>
                </a>
              </div>

              <p className="card__center__company">
                {selectedUser.fieldsOfKnowledge}
              </p>
              <p className="card__center__profession">{selectedUser.sector}</p>
            </div>

            <div className="card__star">
              <StarIcon></StarIcon>
            </div>
            <button className="card__button"> Send-Requst</button>
          </div>
        ))}
      </Grid>
    </Box>
  );
};

export default Card;
