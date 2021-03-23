import React, { useState, useEffect } from "react";
import NumberFormat from 'react-number-format';

function Itemlist(props) {
  const [itemData, setItemData] = useState(null);
  useEffect(() => {
    const result = props
      .getData?.(props.language)
      .then((response) => setItemData(response));
  }, [props]);
  return (
    <div>
      <ul>
        {
          itemData === null ? (
            <p>now loading...</p>
          ) : (
            itemData.data.Items.map((x, index) => (
              <li key={x.Item.itemCode}>
                <p>{x.Item.itemName}</p>
                <img src={x.Item.mediumImageUrls[0].imageUrl} alt=""/>
                <p><NumberFormat value={x.Item.itemPrice} displayType={'text'} thousandSeparator={true} prefix={'¥'} /></p>
                <a href={x.Item.itemUrl}>LINK</a>
                </li>
            ))
            // console.log(itemData.data.Items[0])
          )
        }
      </ul>
    </div>
  );
}

export default Itemlist