import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const items = [
    {
        title: 'What is React?',
        content: 'React is a front end Javascript framework.'
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite JS library among engineers.'
    },
    {
        title: 'How do you use react?',
        content: 'You use react by creating components.'
    },
];

const options = [
    {
        label: 'The Colour Red',
        value: 'Red'
    },
    {
        label: 'The Colour Green',
        value: 'Green'
    },
    {
        label: 'A Shade of Blue',
        value: 'Blue'
    },
];

export default () => {
    const [ selected, setSelected ] = useState(options[0]);
    return (
        <div>
            <Header />
            <Route path="/"> 
                <Accordion items={items} /> 
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown 
                    label="Select a Colour"
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected}
                />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </div>
    );
}
