export const validate = values => {
    const errors = {};
    if (!values.title) {
        errors.title = 'Required';
    } else if (values.title.length > 15) {
        errors.title = 'Must be 15 characters or less';
    }
    if (!values.speaker) {
        errors.speaker = 'Required';
    } else if (values.speaker.length > 20) {
        errors.speaker = 'Must be 20 characters or less';
    }
    if (!values.time) {
        errors.time = 'Required';
    } else if (values.time.length > 20) {
        errors.time = 'Must be 20 characters or less';
    }
    return errors;
}