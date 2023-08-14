import React, { useState } from "react";

const UseCaustomHook = () => {
  const [openEventForm, setOpenEventForm] = useState(false);
  const handclickopenEvent = () => {
    setOpenEventForm(!openEventForm);
  };
  return handclickopenEvent;
};

export default UseCaustomHook;
