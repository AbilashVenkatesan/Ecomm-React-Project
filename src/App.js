import React from 'react'
import Greeting from './components/Greeting'

const App = () => {
    const toys = [
        {
            toyImg: 'Lego.jpg',
            toyName: 'Sonic lego set',
            toyCategory: 'General Toys',
            toyId: 'general toys',
            toyRating: 4.0,
            toyAge: ['5-8', '8-12', '12-15'],
            toyColor: ['pink', 'white', 'blue'],
            toySize: ['md', 'lg', 'xl'],
            toyPagination: 'false'
        },
        {
            toyImg: 'Chess set.jpg',
            toyName: 'Chess Set',
            toyCat: 'category-hidden',
            toyRating: 5.0,
            toyAge: ['2-5', '5-8', '8-12', '12-15', '15-18'],
            toyColor: ['blue', 'white', 'blue'],
            toySize: ['sm', 'md', 'lg'],
            toyPagination: 'false'
        },
        {
            toyImg: 'Nerf.jpg',
            toyName: 'Nerf Gun',
            toyCategory: 'Toys for Boys',
            toyId: 'boys',
            toyRating: 3.4,
            toyAge: ['5-8', '8-12', '12-15', '15-18'],
            toyColor: ['yellow', 'white', 'blue'],
            toySize: ['xs', 'sm', 'md'],
            toyPagination: 'false'
        },
        {
            toyImg: 'Rc car.jpg',
            toyName: 'Rc Car',
            toyCat: 'category-hidden',
            toyRating: 4.4,
            toyAge: ['8-12', '12-15', '15-18'],
            toyColor: ['yellow', 'black', 'blue'],
            toySize: ['sm', 'md', 'lg'],
            toyPagination: 'false'
        },
        {
            toyImg: 'Barbie.jpg',
            toyName: 'Barbie',
            toyCategory: 'Toys for Girls',
            toyId: 'girls',
            toyRating: 3.5,
            toyAge: ['2-5', '5-8', '8-12'],
            toyColor: ['pink', 'white', 'yellow'],
            toySize: ['sm', 'md', 'lg'],
            toyPagination: 'false'
        },
        {
            toyImg: 'Teddy.jpg',
            toyName: 'Teddy bear set',
            toyCat: 'category-hidden',
            toyRating: 4.0,
            toyAge: ['2-5', '5-8', '8-12'],
            toyColor: ['pink', 'yellow','blue'],
            toySize: ['sm', 'md', 'lg'],
            toyPagination: 'pagination'
        }
    
    ];
    
	return (
        <Toys data={toys}/>
      )
}

export default App