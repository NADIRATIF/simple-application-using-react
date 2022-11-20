import React, {useEffect, useState} from 'react';
import {Button, Form} from "react-bootstrap";
import {useFormik} from "formik";
import {validate} from "../utils/helper";


function EditEventForm(props) {
    const [event, setEvent] = useState(props.currentEvent)

    const formik = useFormik({
        initialValues: {
            title: event.title,
            speaker: event.speaker,
            time:  event.time
        },
        validate,
        onSubmit: values => {
            props.updateEvent(props.currentEvent.id, values)
        }
    })

    useEffect(() => {
        setEvent(props.currentEvent)
    }, [props])

    return (
        <Form onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text"
                              name="title"
                              value={formik.values.title}
                              onChange={formik.handleChange}/>
                <Form.Label>Speaker</Form.Label>
                <Form.Control type="text"
                              name="speaker"
                              value={formik.values.speaker}
                              onChange={formik.handleChange}/>
                <Form.Label>Time</Form.Label>
                <Form.Control type="text"
                              name="time"
                              value={formik.values.time}
                              onChange={formik.handleChange}/>
            </Form.Group>
            <Button type="submit" variant='outline-success' className='me-2'>Update event</Button>
            <Button variant='outline-warning' onClick={() => props.setEditing(false)} className="button muted-button">
                Cancel
            </Button>
        </Form>
    );
}

export default EditEventForm;