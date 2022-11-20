import React from 'react';
import * as FileSave from 'file-saver';
import XLSX from 'sheetjs-style';
import {Button} from "react-bootstrap";

function ExcelExport({excelData, fileName}) {
    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';

    const exportToCSV = (csvData, fileName) => {
        const ws = XLSX.utils.json_to_sheet(csvData);
        const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const data = new Blob([excelBuffer], {type: fileType});
        FileSave.saveAs(data, fileName + fileExtension);
    }

    return (
        <Button variant='outline-success'
                onClick={(e) => exportToCSV(excelData,fileName)}
                className='me-2' >
            Export to Excel
        </Button>
    );
}

export default ExcelExport;
