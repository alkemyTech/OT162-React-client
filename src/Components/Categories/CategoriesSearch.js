import React from 'react';
import { Card } from '@mui/material';
import { Formik } from 'formik';
import SearchIcon from '@mui/icons-material/Search';
import { getCategoriesSlice, filterCategorySlice } from "../../features/categories/categoriesSlice";
import { useDispatch } from "react-redux";

const CategoriesSearch = () => {
    const dispatch = useDispatch();
    return (
        <Card sx={{ minWidth: 650, maxWidth: 1000, minHeight: 50, marginLeft: 'auto', marginRight: 'auto', display: 'flex', padding: 2 }}>
            <SearchIcon/>
            <Formik
                initialValues={{ search: '' }}
                onSubmit={(values) => {
                    if (values.search.length < 4) {
                        dispatch(getCategoriesSlice());
                    } else {
                        dispatch(filterCategorySlice(values.search));
                    }
                }}
            >
                {({
                    handleChange,
                    handleBlur,
                    handleSubmit
                }) => (
                    <form onChange={handleSubmit} style={{ width: '100%' }}>
                        <input
                            type="text"
                            name="search"
                            placeholder="Buscar una categoría"
                            style={{ width: '100%' }}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </form>
                )}
            </Formik>
        </Card>
    )
}

export default CategoriesSearch;