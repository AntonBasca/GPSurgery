import './App.css';
import { Page } from 'govuk-react';
import AppTable from './Components/apptable';
import LogOutButton from './Components/logoutbtn';
function App() {
    return (
        <Page>
            <AppTable />
            <br></br>
            <LogOutButton />
        </Page>
    );
}
export default App;
