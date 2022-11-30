import React from 'react';

const Modal = ({ category }) => {
    const { name } = category
    return (
        <div>
            {/* The button to open modal */}
           

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="bookingModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="bookingModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>

                   
                    <form className='grid grid-cols-1 gap-3'>
                    <input type="text" placeholder="Type here" className="input w-full" />
                    <input type="text" placeholder="Type here" className="input w-full" />
                    <input type="text" placeholder="Type here" className="input w-full" />
                    <input type="text" placeholder="Type here" className="input w-full" />
                    <input type="text" placeholder="Type here" className="input w-full" />
                    <br></br>
                    <input type="submit" value='Submit' className="input w-full btn btn-primary" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Modal;