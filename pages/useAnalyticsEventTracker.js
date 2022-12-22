import React from "react";
import ReactGA from "react-ga";

const useAnalyticsEventTracker = (category = "CTA") => {
  const eventTracker = (action = "Create story", label = "Create main") => {
    ReactGA.event({ category, action, label });
  };
  return eventTracker;
};
export default useAnalyticsEventTracker;
