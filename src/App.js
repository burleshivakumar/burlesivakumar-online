import React from 'react';
import Sheet from './UI Components/Cards and Sections/Sheet';
import Card from './UI Components/Cards and Sections/Card';
import { RESUME_SUB_TITLES }  from './assets/resumeDetails';


const App = () => (

  RESUME_SUB_TITLES.map((item) => (
    <Sheet
    headerText={item}
  >
    <Card>
      Content here
    </Card>
  </Sheet>
  ))
  
)
export default App;
