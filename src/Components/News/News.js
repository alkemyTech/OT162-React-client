import { Link } from 'react-router-dom';
import React from 'react';
import Table from '../Table/Table';
import PersistentSideBar from '../../features/backoffice/sideBar';

const News = () => {
  return (
      <>
        <div>
          <PersistentSideBar/>
        </div>
        <Link to="/backoffice/news/create">
            <button>Agregar Novedades</button>
        </Link>
        <Table/>
      </>      
  )
}

export default News