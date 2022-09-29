import React from 'react';

const Cart = (props) => {
    const { cart } = props
    let time = 0;
    for (const product of cart) {
        time = time + product.time
    }
    return (
        <div className='border border-2 py-4'>
            <div className='info'>
                <img className='pic w-25 img-fluid rounded rounded-circle' src="/person.jpg" alt="" />
                <div>
                    <h2>Abdullah Mamun</h2>
                    <p>Dhaka,Bangladesh</p>
                </div>
            </div>
            <div className='d-flex ms-3 justify-content-center bg-primary rounded'>
                <div className='bg-primary rounded text-white mx-1 px-2'>
                    <h4>Height</h4>
                    <p>6.7ft</p>
                </div>
                <div className='bg-primary rounded text-white mx-1 px-2'>
                    <h4>Weight</h4>
                    <p>70kg</p>
                </div>
                <div className='bg-primary rounded text-white mx-1 px-2'>
                    <h4>Age</h4>
                    <p>23</p>
                </div>
            </div>
            <div className='mt-3'>
                <h3>Add a break</h3>
                <div>
                    <button className='rounded btn-primary border border-none mx-1 p-2'>20</button>
                    <button className='rounded btn-primary border border-none mx-1 p-2'>30</button>
                    <button className='rounded btn-primary border border-none mx-1 p-2'>30</button>
                    <button className='rounded btn-primary border border-none mx-1 p-2'>50</button>
                </div>
            </div>
            <div className='mt-5'>
                <h3>Exercise Details</h3>

                <div className='text-left'>
                    <h4 className='bg-secondary text-white rounded'>Exercise Time:{time}</h4>
                    <h4 className='bg-secondary text-white rounded'>Break Time:</h4>

                    <button className='btn btn-primary'>Activity Completed</button>
                </div>


            </div>
        </div>
    );
};

export default Cart;