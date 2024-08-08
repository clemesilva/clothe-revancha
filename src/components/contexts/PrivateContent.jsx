import React from "react";
import useUserStore from "./userContexts";

const PrivateContent = () => {
  const { currentUser } = useUserStore((state) => state);

  if (!currentUser) {
    return <p>Please log in to view this content.</p>;
  }

  return (
    <div>Welcome, {currentUser.displayName}! Here is your private content.</div>
  );
};

export default PrivateContent;
