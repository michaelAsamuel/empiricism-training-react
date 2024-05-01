import { createContext, useState } from "react";
import COURSE_CATALOG from "../init-seed/course-data.json";

export const CourseCatalogContext = createContext({
  courses: [],
});

export const CourseCatalogProvider = ({ children }) => {
  const [courses, setCourses] = useState(COURSE_CATALOG);
  const value = { courses };

  return (
    <CourseCatalogContext.Provider value={value}>
      {children}
    </CourseCatalogContext.Provider>
  );
};
