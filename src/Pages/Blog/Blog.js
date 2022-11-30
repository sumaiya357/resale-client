import React from 'react';

const Blog = () => {
    return (
        <div className='grid grid-cols-2  m-5'>
            <div className="card w-96 bg-base-100 shadow-xl mt-5 border-2 border-black m-5">

                <div className="card-body">
                    <h3 className='font-bold text-xl'> What are the different ways to manage a state in a React application?</h3>
                    <p>Ans: The Four Kinds of React State to Manage
                        Local state. Global state. Server state. URL state.</p>
                    <div className="card-actions justify-end">

                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl mt-5 border-2 border-black m-5">

                <div className="card-body">
                <h3 className='font-bold text-xl'>How does prototypical inheritance work?</h3>
                    <p>Ans: For instance, we have a user object with its properties and methods, and want to make admin and guest as slightly modified variants of it. We’d like to reuse what we have in user, not copy/reimplement its methods, just build a new object on top of it.

                        Prototypal inheritance is a language feature that helps in that</p>
                    <div className="card-actions justify-end">

                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl mt-5 border-2 border-black m-5">

                <div className="card-body">
                <h3 className='font-bold text-xl'>What is a unit test?Why should we write unit tests?</h3>
                    <p>Ans:
                        A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system.
                        They enable us to catch bugs early in the development process. Automated unit tests help a great deal with regression testing.
                        </p>
                    <div className="card-actions justify-end">

                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl mt-5 border-2 border-black m-5">

                <div className="card-body">
                <h3 className='font-bold text-xl'>  React vs. Angular vs. Vue?</h3>
                    <p>Ans:Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option..
                        </p>
                    <div className="card-actions justify-end">

                    </div>
                </div>
            </div>


        


          

            
        </div>
    );
};

export default Blog;