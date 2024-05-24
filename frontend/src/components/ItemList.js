import ItemPreview from "./ItemPreview";
import ListPagination from "./ListPagination";
import React, { useEffect } from "react";

const ItemList = (props) => {
  useEffect(() => {
    console.log(props);
  })

  if (props.itemsCount && props.loading) {
    return <div className="py-4">Loading...</div>;
  } else if (!props.itemsCount) {    
      return <div id="empty" className="py-4 no-items">No items are here... yet.</div>;
    }

  if (props.noResults) {
    return (
      <div className="py-4 no-items" id="empty">
        {"No items were found for your search :("}
      </div>
    )
  }

  return (
    <div className="container py-2">
      <div className="row">
        {props.items.map((item) => {
          return (
            <div className="col-sm-4 pb-2" key={item.slug}>
              <ItemPreview item={item} />
            </div>
          );
        })}
      </div>

      <ListPagination
        pager={props.pager}
        itemsCount={props.itemsCount}
        currentPage={props.currentPage}
      />
    </div>
  );
};

export default ItemList;
