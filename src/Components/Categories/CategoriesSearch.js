import React from 'react';
import { Card } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import SearchIcon from '@mui/icons-material/Search';

const CategoriesSearch = () => {
    return (
        <Card sx={{ minWidth: 650, maxWidth: 1000, minHeight: 50, marginLeft: 'auto', marginRight: 'auto', display: 'flex', padding: 2 }}>
            <SearchIcon/>
            <Formik>
                <Form style={{ width: '100%' }}>
                    <Field type="text" name="search" placeholder="Buscar una categoría" style={{ width: '100%' }}/>
                </Form>
            </Formik>
        </Card>
    )
}

export default CategoriesSearch;