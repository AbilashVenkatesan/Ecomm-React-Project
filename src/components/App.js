import React from 'react'
import Greeting from './Pages/Toys'

const App = () => {
    const toys = [
        {
            toyImg: 'Lego.jpg',
            toyName: 'Sonic lego set',
            toyDescription: 'rem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            actualPrice: '$49.99',
            offerPrice: '$29.99',
            toyCategory: 'General Toys',
            toyId: 'general toys',
            toyRating: 4.0,
            toyAge: ['5-8', '8-12', '12-15'],
            toyColor: ['pink', 'white', 'blue'],
            toySize: ['md', 'lg', 'xl'],
        },
        {
            toyImg: 'Chess set.jpg',
            toyName: 'Chess Set',
            toyDescription: 'rem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            actualPrice: '$79.99',
            offerPrice: '$69.99',
            toyCat: 'category-hidden',
            toyRating: 5.0,
            toyAge: ['2-5', '5-8', '8-12', '12-15', '15-18'],
            toyColor: ['blue', 'white', 'blue'],
            toySize: ['sm', 'md', 'lg'],
        },
        {
            toyImg: 'Nerf.jpg',
            toyName: 'Nerf Gun',
            toyDescription: 'rem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            actualPrice: '$124.99',
            offerPrice: '$99.99',
            toyCategory: 'Toys for Boys',
            toyId: 'boys',
            toyRating: 3.4,
            toyAge: ['5-8', '8-12', '12-15', '15-18'],
            toyColor: ['yellow', 'white', 'blue'],
            toySize: ['xs', 'sm', 'md'],
        },
        {
            toyImg: 'Rc car.jpg',
            toyName: 'Rc Car',
            toyDescription: 'rem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            actualPrice: '$249.99',
            offerPrice: '$199.99',
            toyCat: 'category-hidden',
            toyRating: 4.4,
            toyAge: ['8-12', '12-15', '15-18'],
            toyColor: ['yellow', 'black', 'blue'],
            toySize: ['sm', 'md', 'lg'],
        },
        {
            toyImg: 'Barbie.jpg',
            toyName: 'Barbie',
            toyDescription: 'rem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            actualPrice: '$59.99',
            offerPrice: '$54.99',
            toyCategory: 'Toys for Girls',
            toyId: 'girls',
            toyRating: 3.5,
            toyAge: ['2-5', '5-8', '8-12'],
            toyColor: ['pink', 'white', 'yellow'],
            toySize: ['sm', 'md', 'lg'],
        },
        {
            toyImg: 'Teddy.jpg',
            toyName: 'Teddy bear set',
            toyDescription: 'rem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            actualPrice: '$29.99',
            offerPrice: '$19.99',
            toyCat: 'category-hidden',
            toyRating: 4.0,
            toyAge: ['2-5', '5-8', '8-12'],
            toyColor: ['pink', 'yellow','blue'],
            toySize: ['sm', 'md', 'lg'],
        }
    
    ];
    
	return (
        <Toys data={toys}/>
      )
}

export default App