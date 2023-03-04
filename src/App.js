import Todolist from './components/Todolist';
import { Card, CardContent } from '@mui/material';

function App() {
  return (
    <Card sx={{backgroundColor:"#F0F8FF",padding:"5px"}}>
      <CardContent>
        <Todolist/>
      </CardContent>
    </Card>
  );
}

export default App;
