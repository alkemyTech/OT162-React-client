import { Link } from 'react-router-dom'
import React from 'react'
import Table from '../Table/Table'

const News = () => {
  return (
      <>
        <Link to="/backoffice/news/create">
            <button>Agregar Novedades</button>
        </Link>
        <Table/>
      </>      
  )
}

export default News