import React, { useState, useEffect } from "react";
import NumberFormat from 'react-number-format';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    height: '100%',
  },
  media: {
    height: 140,
    backgroundSize: 'contain',
  },
  hidden: {
    overflow: 'hidden',
    height: 100,
  },
  price: {
    textAlign: 'center',
    color: 'orangered',
    fontWeight: 'bold',
    fontSize: 20,
    padding: 10,
    margin: 0,
  },
  ul: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    listStyle: 'none',
  },
  li: {
    padding: 10,
  }
});

function Itemlist(props) {
  const [itemData, setItemData] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    const result = props
      .getData?.(props.language)
      .then((response) => setItemData(response));
  }, [props]);
  return (
    <div>
      <ul className={classes.ul}>
        {
          itemData === null ? (
            <p>now loading...</p>
          ) : (
            itemData.data.Items.map((x, index) => (
              <li key={index}
              className={classes.li}
              >
              <Card className={classes.root}>
                <CardActionArea
                  href={x.Item.itemUrl}
                >
                  <CardMedia
                    className={classes.media}
                    image={x.Item.mediumImageUrls[0].imageUrl}
                    title={x.Item.itemName}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {x.Item.itemName}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p"
                     className={classes.hidden}>
                      {x.Item.itemCaption}
                    </Typography>
                  </CardContent>
                  <p className={classes.price}>
                  <NumberFormat value={x.Item.itemPrice} displayType={'text'} thousandSeparator={true} prefix={'¥'}
                   />
                  </p>
                </CardActionArea>
              </Card>
              </li>
            ))
          )
        }
      </ul>
    </div >
  );
}

export default Itemlist