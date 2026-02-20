import { Virtuoso } from "react-virtuoso";

export default function VirtuosoVirtulization({list}) {
  return (
    <Virtuoso
      style={{ height: "30rem" }}
      // totalCount={200}
      data={list}
      itemContent={(index,item) => <div>Item : {item}</div>}
    />
  );
}
