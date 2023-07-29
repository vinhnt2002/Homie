import React from "react";
import BreadCrumb from "../../components/breadCrumb/BreadCrumb";
import CheckoutRow from "../../components/checkoutHistory/CheckoutRow";
import { getSession } from "next-auth/react";
import prisma from "../../lib/prismadb";

const Index = ({ order }) => {
  return (
    <>
      <BreadCrumb
        className="d-flex justify-content-center"
        href="/checkouthistory"
        title="Order History"
        middlePath=""
        descriptionTitle="Order History"
      />
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Sản phẩm</th>
              <th scope="col">SDT</th>
              <th scope="col">Địa chỉ</th>
              <th scope="col">Tổng hóa đơn</th>
              <th scope="col">Trạng thái thanh toán</th>
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
  if (!session?.user?.id) {
    // If the user is not authenticated, redirect to login or handle the case as needed
    return {
      redirect: {
        destination: "/login", // Redirect to the login page
        permanent: false,
      },
    };
  }

  const userId = session.user.id;

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
