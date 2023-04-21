import React from 'react';
import { Table } from 'govuk-react'


function AppTable() {
    return (
        <>
            <Table classname="govuk-table" caption="PATIENT NAME"
            /*
                head={<Table.Row>
                    <Table.CellHeader setWidth="one-half">
                    </Table.CellHeader>
                    <Table.Cell setWidth="22%">
                    </Table.Cell>
                    <Table.CellHeader>
                    </Table.CellHeader>
                </Table.Row>
            }
                */
            >
                <br></br>
                <Table.Row>
                    <Table.CellHeader>
                        Appointment number ***
                    </Table.CellHeader>
                    <Table.Cell>
                        Appointment details
                    </Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.CellHeader>
                        Appointment number ***
                    </Table.CellHeader>
                    <Table.Cell>
                        Appointment details
                    </Table.Cell>
                </Table.Row>
            </Table>

        </>

    );


}
export default AppTable;