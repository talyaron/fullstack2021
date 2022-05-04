import React from 'react'
import PicForm from './PicForm'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { DeleteOutlined } from '@mui/icons-material';
import { CardHeader, IconButton } from '@mui/material';
import ExpandMore from '@mui/icons-material/ExpandMore';
import {Collapse} from '@mui/material';



const PicCard = (props: any) => {

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const { card, handleUpdate, handleDelete, nameError, picError } = props;

  return (
    <>
      <div className="wrapper">
        <Card sx={{ maxWidth: 300 }}>
          <div className='cardImg'>
            <img src={card.pic} className='imgSrc' alt={card.pic}></img>
          </div>
          <CardHeader
            title={card.name}
            action={
              <>
                <IconButton onClick={() => handleDelete(card.id)} >
                  <DeleteOutlined />
                </IconButton>
                <IconButton onClick={handleExpandClick}>
                  <ExpandMore
                    aria-expanded={expanded}
                    aria-label="show more" />
                </IconButton>
              </>
            } />
          <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <PicForm job='Update' submit={handleUpdate} nameError={nameError} picError={picError} />
          </CardContent>
          </Collapse>

        </Card>
      </div>
      <div>

      </div>
    </>
  )
}

export default PicCard