import React from 'react';
import PDFFile from '../PDFFile/PDFFile';
import { PDFDownloadLink } from '@react-pdf/renderer'

const Blog = () => {
    return (
        <div className='my-10'>
            <div className='grid grid-cols-3 mb-6 justify-center items-center'>
                <div></div>
                <h2 className='text-3xl text-center font-bold text-sky-700'>Blog Page</h2>

                <div>
                    <PDFDownloadLink document={<PDFFile />} fileName='Recipes_menu_list'>
                        {({ loading }) => (loading ? <button className='btn btn-error text-white'>Loading Document...</button> : <button className='btn btn-info text-white'>Download</button>)}
                    </PDFDownloadLink>
                    
                </div>

            </div>
            <div className='w-3/4 mx-auto flex items-center justify-center'>

                <div className='space-y-5 text-justify'>
                    <p className='text-2xl font-bold'>a. Tell us the differences between uncontrolled and controlled components.</p>
                    <p className='text-lg font-bold'>n React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</p>
                    <p className='text-2xl font-bold'>b. How to validate React props using PropTypes?</p>
                    <p className='text-lg font-bold'>1.PropTypes.any: The prop can be of any data type <br />
                        2.PropTypes.bool: The prop should be a Boolean <br />
                        3.PropTypes.number: The prop should be a number <br />
                        4.PropTypes.string: The prop should be a string <br />
                        5.PropTypes.func: The prop should be a function <br />
                        6.PropTypes.array: The prop should be an array <br />
                        7.PropTypes.object: The prop should be an object <br />
                        8.PropTypes.symbol: The prop should be a symbol </p>
                    <p className='text-2xl font-bold'>c. Tell us the difference between nodejs and express js.</p>
                    <p className='text-lg font-bold'>NodeJS is an event-driven, non-blocking I/O model using JavaScript as its main language. It helps to build scalable network applications. Express is a minimal and flexible Node. js web application framework that provides a robust set of features for web and mobile applications.</p>
                    <p className='text-2xl font-bold'>d. What is a custom hook, and why will you create a custom hook?</p>
                    <p className='text-lg font-bold'>Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;