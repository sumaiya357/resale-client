import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const Modal = ({ category, setCategory }) => {
    const { name,ResalePrice } = category;

    const {user} = useContext(AuthContext);

    const handleBooking = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const itemName = form.itemName.value;
        const price = form.price.value;
        const phone = form.phone.value;
        const place = form.place.value;
        console.log(name, email, itemName, price, phone, place)

        const booking = {
            name, email, itemName, price, phone, place
        }
        fetch('https://resale-shop-server.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    setCategory(null);
                    
                }

            })
    }
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
                   
                    <input name='name' type="text" disabled defaultValue={user?.displayName} placeholder="name" className="input input-primary w-full max-w-xs" />

                    <input name='email' type="email" disabled defaultValue={user?.email} placeholder="email" className="input input-primary w-full max-w-xs" />

                    <input name='itemName' type="text" disabled value={name} placeholder="Item Name" className="input input-primary w-full max-w-xs" />
                        <input name='price' type="text" disabled value={ResalePrice} placeholder="Selling Price" className="input input-primary w-full max-w-xs" />

                        <input name='phone' type="text" placeholder="Phone Number" className="input input-primary w-full max-w-xs" />
                        <input name='meetLocation' type="text" placeholder="Meeting Location" className="input input-primary w-full max-w-xs" />

                    
                       
                    <input type="submit" value='Submit' className="input w-full btn btn-primary" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Modal;