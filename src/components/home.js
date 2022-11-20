import React from 'react';
import {Button, Table} from "react-bootstrap";

function Home(props) {
    return (
        <Table>
            <thead>
            <tr>
                <th>title</th>
                <th>speaker</th>
                <th>time</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {props.events.length > 0 ? (
                props.events.map(event => (
                    <tr key={event.id}>
                        <td>{event.title}</td>
                        <td>{event.speaker}</td>
                        <td>{event.time}</td>
                        <td>
                            <Button variant='outline-success' className='me-2'
                                    onClick={() => {props.editEvent(event)}}
                            >
                                Edit
                            </Button>
                            <Button variant='outline-danger'
                                    onClick={() => props.deleteEvent(event.id)}
                            >
                                Delete
                            </Button>
                        </td>
                    </tr>
                ))
            ) : (
                <tr>
                    <td colSpan={3}>No Events</td>
                </tr>
            )}
            </tbody>
        </Table>
    );
}

export default Home;