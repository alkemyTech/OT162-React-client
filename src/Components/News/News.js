import { Link } from 'react-router-dom';
import React from 'react';
import Table from '../Table/Table';
import NavbarBackoffice from '../Backoffice/NavbarBackoffice';

const News = () => {
  return (
      <>
        <div>
          <NavbarBackoffice/>
        </div>
        <Link to="/backoffice/news/create">
            <button>Agregar Novedades</button>
        </Link>
        <Table/>
      </>      
  )
}

export default News