'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { LuBadgeCheck } from "react-icons/lu";

const Success = () => {
    const searchParams = useSearchParams();  // This is sufficient, no need to destructure props
    const orderId = searchParams.get('orderId');
    const [orderData, setOrderData] = useState(null);
    const [loading, setLoading] = useState(true);
    const baseUrl = process.env.NEXT_PUBLIC_API_BA
    
    console.log(orderData, "order data");

    useEffect(() => {
        const fetchOrder = async () => {
            if (!orderId) return;

            try {
                const res = await fetch(`${baseUrl}/store/order/${orderId}`);
                const data = await res.json();
                setOrderData(data.data);
            } catch (err) {
                console.error('Failed to fetch order data:', err);
            } finally {
                setLoading(false);
            }
        };
        fetchOrder();
    }, [orderId]);

    if (loading) return <p className="text-center py-10">Loading...</p>;
    if (!orderData) return <p className="text-center py-10">No order data found.</p>;

    return (
        <div className='success-main container px-4 md:px-6 xl:px-28 mx-auto pt-6 md:pt-12 pb-12'>
            <div className="flex flex-col justify-center text-center items-center">
                <LuBadgeCheck className='text-center text-6xl mb-8' />
                <h1 className='text-2xl md:text-3xl uppercase mb-3'>Thank you for your purchase</h1>
                <p className='text-xl'>Your order number is: <b>#{orderId}</b></p>
                <p className='text-xl'>We will email you an order confirmation with details and tracking info</p>
                <div className="order-summary w-full md:w-[70%] xl:w-[40%] border-1 border-gray-200 bg-white rounded-xl shadow-xl p-6 mt-10">
                    <h2 className='text-xl text-start pb-2'>Order Summary</h2>
                    <hr className="bg-gray-300 text-gray-300" />
                    <div className="flex justify-between pt-2 text-gray-700" >
                        <p className="mb-0 "> Order Name:</p>
                        <p className="font-bold mb-0 "> {orderData.customer_name} </p>
                    </div>
                    <div className="flex justify-between pt-2 text-gray-700" >
                        <p className="mb-0 "> Product Name:</p>
                        <p className="font-bold mb-0 "> {orderData.order_products[0].product_name} </p>
                    </div>
                    <div className="flex justify-between text-gray-700" >
                        <p className="mb-0 "> Contact Number: </p>
                        <p className="font-bold mb-0 "> {orderData.customer_mobile} </p>
                    </div>
                    <div className="flex justify-between text-gray-700" >
                        <p className="mb-0 "> City:</p>
                        <p className="font-bold mb-0 "> {orderData.customer_country} </p>
                    </div>
                    <div className="flex justify-between text-gray-700" >
                        <p className="mb-0 "> State:</p>
                        <p className="font-bold mb-0 "> {orderData.customer_city} </p>
                    </div>
                    <div className="flex justify-between text-gray-700" >
                        <p className="mb-0 "> House Number:</p>
                        <p className="font-bold mb-0 "> {orderData.customer_area} </p>
                    </div>
                    <div className="flex justify-between pb-2 text-gray-700 " >
                        <p className="mb-0 "> Total Quantity:</p>
                        <p className="font-bold mb-0 "> {orderData.order_products[0].order_product_quantity} </p>
                    </div>
                    <hr className="bg-gray-300 text-gray-300" />

                    <div className="flex justify-between pt-2" >
                        <p className="font-bold mb-0 "> Total Price:</p>
                        <p className="font-bold text-success mb-0 "> {orderData.order_total_amount} </p></div>
                </div>
                <Link href="/products" className='w-fit mx-auto cursor-pointer hover:scale-[1.05] transition-all duration-[0.3s] ease-in-out py-3 text-md md:text-lg px-6 rounded-lg bg-black text-white font-[500] mt-6'>Continue Shopping </Link>
            </div>
        </div>
    );
};

export default Success;
