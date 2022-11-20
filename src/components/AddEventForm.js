import React from 'react';
import {Button, Form} from "react-bootstrap";
import {useFormik} from "formik";
import {validate} from "../utils/helper";


function AddEventForm(props) {

    const formik = useFormik({
        initialValues: {
            title: '',
            speaker: '',
            time: ''
        },
        validate,
        onSubmit: values => {
            props.addEvent(values)
            formik.resetForm()
        },
    })

    return (
        <Form onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text"
                              name="title"
                              value={formik.values.title}
                              onChange={formik.handleChange}/>
                {formik.errors.title ? <Form.Text className="text-muted">{formik.errors.title}</Form.Text> : null}
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Speaker</Form.Label>
                <Form.Control type="text"
                              name="speaker"
                              value={formik.values.speaker}
                              onChange={formik.handleChange}/>
                {formik.errors.speaker ? <Form.Text className="text-muted">{formik.errors.speaker}</Form.Text> : null}
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Time</Form.Label>
                <Form.Control type="date"
                              name="time"
                              value={formik.values.time}
                              onChange={formik.handleChange}/>
                {formik.errors.time ? <Form.Text className="text-muted">{formik.errors.time}</Form.Text> : null}
            </Form.Group>
            <Button type='submit' variant='outline-primary'>Add new event</Button>
        </Form>
    );
}

export default AddEventForm;