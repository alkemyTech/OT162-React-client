import { Link } from 'react-router-dom'
import React from 'react'
import DataGrid from '../DataGrid/DataGrid'

const News = () => {
  return (
      <>
        <Link to="/backoffice/news/create">
            <button>Agregar Novedades</button>
        </Link>
        <DataGrid/>
      </>      
  )
}

export default News