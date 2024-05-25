import ItemPreview from "./ItemPreview";
import ListPagination from "./ListPagination";
import React from "react";

const ItemList = (props) => {
  // useEffect(() => console.log(props));
  return (
    <div className="container py-2">
      <div className="row">
        {props.loading ? <div className="py-4">Loading...</div> : props.title && props.noResults ?
          <div className="py-4 no-items" id="empty">
            {"No items were found for your search :("}
          </div> : props.items?.map((item) => {
            return <div className="col-sm-4 pb-2" key={item.slug}>
              <ItemPreview item={item} />
            </div>
          })}
      </div>
      <ListPagination
        pager={props.pager}
        itemsCount={props.itemsCount}
        currentPage={props.currentPage}
      />
    </div>)
}





export default ItemList;
