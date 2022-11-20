import React from 'react';
import * as XLSX from 'xlsx';
import {Button} from "react-bootstrap";

function ExcelImport(props) {
    const hiddenFileInput = React.useRef(null);

    const handleClick = event => {
        hiddenFileInput.current.click();
    }

    const readExcel = (file) => {
        const promise = new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsArrayBuffer(file);

            fileReader.onload = (e) => {
                const bufferArray = e.target.result;

                const wb = XLSX.read(bufferArray, {type: 'buffer'});

                const wsname = wb.SheetNames[0];

                const ws = wb.Sheets[wsname];

                const data = XLSX.utils.sheet_to_json(ws);

                resolve(data);
            };

            fileReader.onerror = (error) => {
                reject(error);
            };
        });

        promise.then((d) => {
            props.addEvent(d);
        });
    }

    return (
        <>
            <Button onClick={handleClick} variant='outline-success'>Import</Button>
            <input ref={hiddenFileInput} type='file' onChange={
                (e) => {
                    const file = e.target.files[0];
                    readExcel(file);
                }
            }
                   className='d-none'/>
        </>
    );
}

export default ExcelImport;