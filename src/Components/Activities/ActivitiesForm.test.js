import React from 'react';
import ReactDOM from 'react-dom'
import ActivitiesForm from './ActivitiesForm';

// Render Test
it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ActivitiesForm/>, div)
})