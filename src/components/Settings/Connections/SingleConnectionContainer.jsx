import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchConnections } from "../../../store/connections";
import { WrenchScrewdriverIcon } from "@heroicons/react/24/outline";

const SingleConnectionContainer = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.connections);
  useEffect(() => {
    dispatch(fetchConnections());
  }, [dispatch]);
  return (
    <>
      {data.map((connection) => (
        <div
          key={connection._id}
          className="border rounded-lg shadow-md flex flex-col justify-center items-center gap-2 p-2 py-14"
          style={{ flexBasis: "calc(33.33% - 8px)" }}
        >
          {connection.logoUrl ? (
            <img
              src={connection.logoUrl}
              className="h-12 w-12"
              alt={connection.name || "No image available"}
            />
          ) : (
            <WrenchScrewdriverIcon className="h-12 w-12 text-blue-500" />
          )}
          <h4>{connection.name}</h4>
        </div>
      ))}
    </>
  );
};

export default SingleConnectionContainer;
