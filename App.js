import './App.css';
import { Page, SectionBreak } from 'govuk-react';
import AppTable from './NewFolder/apptable';
import RecordButton from './NewFolder/recordbtn';
import DocName from './NewFolder/doctorname';
import LogOutButton from './NewFolder/logoutbtn';

function App() {
    return (

        <Page>
            <DocName />
            <SectionBreak level="LARGE" visible />
            <AppTable />
            <RecordButton />
            <br></br>
            <AppTable />
            <RecordButton />

            <br></br>

            <LogOutButton />

        </Page>



    );
}
export default App;
