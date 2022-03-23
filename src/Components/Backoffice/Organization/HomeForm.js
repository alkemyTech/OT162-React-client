import React from 'react';
import { Formik } from 'formik';

const HomeForm = () => {
  return (
    <div>
        <Formik>
            {() => (
                <form>
                    <div>
                        <label htmlFor="welcome">Texto de bienvenida</label>
                        <input type="text" id="welcome" name="welcome" placeholder="Texto de bienvenida"/>
                    </div>
                    <div>
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" id="nombre" name="nombre" placeholder="Nombre"/>
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            )}
        </Formik>
    </div>
  );
};

export default HomeForm;