import {useState, Fragment} from "react";
import Home from "./components/home";
import {agendaData} from "./components/agenda";
import {Col, Container, Row} from "react-bootstrap";
import AddEventForm from "./components/AddEventForm";
import EditEventForm from "./components/EditEventForm";
import ExcelExport from "./components/excelExport";
import ExcelImport from "./components/excelImport";

function App() {
    const initialFormState = {id: null, title: '', speaker: '', time: ''}

    // Setting state
    const [events, setEvents] = useState(agendaData);
    const [editing, setEditing] = useState(false);
    const [currentEvent, setCurrentEvent] = useState(initialFormState)

    // CRUD operations
    const addEvent = (event) => {
        event.id = events.length + 1;
        setEvents([...events, event]);
    };

    const deleteEvent = (id) => {
        setEditing(false);
        setEvents(events.filter((event) => event.id !== id));
    }

    const editEvent = (event) => {
        setEditing(true)
        setCurrentEvent({id: event.id, title: event.title, speaker: event.speaker, time: event.time})
    }

    const updateEvent = (id, updatedEvent) => {
        setEditing(false)
        setEvents(events.map((event) => (event.id === id ? updatedEvent : event)))
    }

    const importEvents = (events) => {
        setEvents(events);
    }

    return (
            <Container>
                <Row>
                    <Col>
                        <h1>Agenda</h1>
                    </Col>
                    <Col className='d-flex justify-content-center align-items-center'>
                        <ExcelExport excelData={events} fileName={"agenda"}/>
                        <ExcelImport addEvent={importEvents}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {editing ? (
                            <Fragment>
                                <h2>Edit Event</h2>
                                <EditEventForm
                                    editing={editing}
                                    setEditing={setEditing}
                                    currentEvent={currentEvent}
                                    updateEvent={updateEvent}
                                />
                            </Fragment>
                        ) : (
                            <div>
                                <h2>Add Event</h2>
                                <AddEventForm addEvent={addEvent}/>
                            </div>
                        )}
                    </Col>
                    <Col>
                        <h2>View Events</h2>
                        <Home events={events} editEvent={editEvent} deleteEvent={deleteEvent}/>
                    </Col>
                </Row>
            </Container>
    );
}

export default App;
