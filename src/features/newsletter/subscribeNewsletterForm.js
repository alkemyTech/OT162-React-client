import { Formik, Form, Field} from "formik";
import Button from '@mui/material/Button';
import SubscribeEmail from "./subscribeEmail";

const NewsletterForm = () => {
    return(
        <div>
            <Formik
            initialValues={{email:''}}
            onSubmit={(values) => SubscribeEmail(values)}>
                <Form>
                    <Field type="email" name="email" placeholder="Subscribe to our newsletter"/>
                    <br/>
                    <Button type="submit" variant="contained">Subscribe</Button>
                </Form>
            </Formik>
        </div>
    )
}

export default NewsletterForm