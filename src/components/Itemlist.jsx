import React, { useState, useEffect } from "react";

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
              <li key={x.Item.itemCode}>{x.Item.itemName}</li>
            ))
            // console.log(itemData.data.Items[0])
          )
        }
      </ul>
    </div>
  );
}

export default Itemlist