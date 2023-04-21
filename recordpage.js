import React from 'react';
import { Page } from 'govuk-react';
import { Table } from 'govuk-react';
import { H2 } from 'govuk-react';
import { Button } from 'govuk-react';
import { Link } from 'govuk-react';

function RecordPage() {
    return (
        <>

            <Page>
                <H2>PATIENT NAME</H2>
                <Table classname="govuk-table"

                    head={<Table.Row>
                        <Table.CellHeader setWidth="50%">
                        </Table.CellHeader>
                        <Table.Cell setWidth="50%">
                        </Table.Cell>
                        <Table.CellHeader>
                        </Table.CellHeader>
                    </Table.Row>}
                >
                    <Table.Row>
                        <Table.CellHeader>
                            FIRST NAME
                        </Table.CellHeader>
                        <Table.Cell>
                            *****
                        </Table.Cell>
                        <Table.Cell>

                        </Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.CellHeader>
                            SECOND NAME
                        </Table.CellHeader>
                        <Table.Cell>
                            *****
                        </Table.Cell>
                        <Table.Cell>

                        </Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.CellHeader>
                            DATE OF BIRTH
                        </Table.CellHeader>
                        <Table.Cell>
                            *****
                        </Table.Cell>
                        <Table.Cell>

                        </Table.Cell>
                    </Table.Row>


                    <Table.Row>
                        <Table.CellHeader>
                            PHONE NUMBER
                        </Table.CellHeader>
                        <Table.Cell>
                            *****
                        </Table.Cell>
                        <Table.Cell>
                            <Link href="#">
                                CHANGE
                            </Link>
                        </Table.Cell>
                    </Table.Row>



                    <Table.Row>
                        <Table.CellHeader>
                            ADDRESS
                        </Table.CellHeader>
                        <Table.Cell>
                            *****
                        </Table.Cell>
                        <Table.Cell>
                            <Link href="#">
                                CHANGE
                            </Link>
                        </Table.Cell>
                    </Table.Row>


                    <Table.Row>
                        <Table.CellHeader>
                            POSTCODE
                        </Table.CellHeader>
                        <Table.Cell>
                            *****
                        </Table.Cell>
                        <Table.Cell>
                            <Link href="#">
                                CHANGE
                            </Link>
                        </Table.Cell>
                    </Table.Row>


                    <Table.Row>
                        <Table.CellHeader>
                            COVID-19 VACCINATION
                        </Table.CellHeader>
                        <Table.Cell>
                            *****
                        </Table.Cell>
                        <Table.Cell>
                            <Link href="#">
                                CHANGE
                            </Link>
                        </Table.Cell>
                    </Table.Row>
                </Table>

                <br>
                </br>
                <Button start >
                    GO BACK
                </Button>
                <br>
                </br>
                <Button start >
                    LOG OUT
                </Button>
            </Page>
        </>
    );
}
export default RecordPage;