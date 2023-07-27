import React from "react";
import BreadCrumb from "../../components/breadCrumb/BreadCrumb";
import CheckoutRow from "../../components/checkoutHistory/CheckoutRow";
import { useState, useEffect } from "react";
import { getSession } from "next-auth/react";
import prisma from "../../lib/prismadb";

const Index = ({ order }) => {
  const [userId, setUserId] = useState('');

  useEffect(() => {
    // Fetch the userId and set it in the state
    getSession().then((session) => {
      const userId = session?.user?.id || '';
      setUserId(userId);
    });
  }, []);

  return (
    <>
      <BreadCrumb
        className="d-flex justify-content-center"
        href="/checkouthistory"
        title="Order History"
        middlePath=""
        descriptionTitle="Order History"
      />
      <div className='container'>
        {userId ? (
          <table className='table'>
            <thead>
              <tr>
                <th scope='col'>Product</th>
                <th scope='col'>Phone</th>
                <th scope='col'>Address</th>
                <th scope='col'>Payment Amount</th>
                <th scope='col'>Payment Status</th>
              </tr>
            </thead>
            <tbody>
              {order.map((orderItem) => (
                <CheckoutRow
                  key={orderItem.id}
                  products={orderItem.orderItems}
                  phone={orderItem.phone}
                  address={orderItem.address}
                  total={orderItem.totalPrice}
                  isPaid={orderItem.isPaid}
                />
              ))}
            </tbody>
          </table>
        ) : (
          <p>No order information available. Please log in to view your orders.</p>
        )}
      </div>
    </>
  );
};

export default Index;

export async function getServerSideProps(context) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "VND",
  });
  const session = await getSession(context); // Using getSession instead of useSession to get the session data
  console.log(session);
  const userId = session?.user?.id;

  const orders = await prisma.order.findMany({
    where: { userId: userId },
    include: {
      orderItems: {
        include: {
          product: {
            select: {
              createdAt: true,
              price: true,
              name: true,
            },
          },
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  // Convert Date objects to strings before returning the data
  const formattedOrders = orders.map((order) => ({
    ...order,
    createdAt: order.createdAt.toString(),
    updatedAt: order.updatedAt.toString(),
    orderItems: order.orderItems.map((orderItem) => ({
      ...orderItem,
      product: {
        ...orderItem.product,
        createdAt: orderItem.product.createdAt.toString(),
        price: orderItem.product.price.toString(),
        // Add other serializable properties of the product here if needed
      },
    })),
    totalPrice: formatter.format(
      order.orderItems.reduce((total, item) => {
        return total + Number(item.product.price);
      }, 0)
    ),
    // Add any other properties that might be of non-serializable types here
  }));

  return {
    props: { order: formattedOrders },
  };
}
