import { Console } from 'console';
import app from './app'

const PORT:number = 3000;
app.listen(PORT, () => {
    console.log('hey')
})