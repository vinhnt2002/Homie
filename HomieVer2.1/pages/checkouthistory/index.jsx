import React from "react";
import BreadCrumb from "../../components/breadCrumb/BreadCrumb";
import CheckoutRow from "../../components/checkoutHistory/CheckoutRow";
import { useState } from "react";
import { useEffect } from "react";
import { getSession } from "next-auth/react";

const index = ({ order }) => {
  console.log(order);

  return (
    <>
      <BreadCrumb
        className="d-flex justify-content-center"
        href="/checkouthistory"
        title="Lịch sử mua hàng"
        middlePath=""
        descriptionTitle="Lịch sử mua hàng"
      />
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Sản phẩm</th>
              <th scope="col">Số điện thoại</th>
              <th scope="col">Địa chỉ</th>
              <th scope="col">Giá tiền thanh toán</th>
              <th scope="col">Trạng thái thanh toán</th>
            </tr>
          </thead>
          <tbody>
            {order.map((order) => (
              <CheckoutRow
                key={order.id}
                products={order.orderItems}
                phone={order.phone}
                address={order.address}
                total={order.totalPrice}
                isPaid={order.isPaid}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default index;

export async function getServerSideProps(context) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "VND",
  });
  const session = await getSession(context); // Using getSession instead of useSession to get the session data
  //   console.log(session);
  const userId = session?.user?.id;

  //   const user = await prisma.user.findMany({
  //     where:{id: userId},
  //   })
  //   console.log(user);

  const orders = await prisma.order.findMany({
    where: { userId: userId },
    // where: {},
    include: {
      // userId: userId,
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
  console.log(orders);

  // Convert Date objects to strings before returning the data
  const fotmatOrder = orders.map((order) => ({
    ...order,
    createdAt: order.createdAt.toString(),
    updatedAt: order.updatedAt.toString(),
    orderItems: order.orderItems.map((orderItem) => ({
      ...orderItem,
      product: {
        ...orderItem.product,
        createdAt: orderItem.product.createdAt.toString(),
        price: orderItem.product.price.d[0].toString(),
        // Add other serializable properties of product here if needed
      },
    })),
    totalPrice: formatter.format(
      order.orderItems.reduce((total, item) => {
        return total + Number(item.product.price.d[0]);
      }, 0)
    ),
    // Add any other properties that might be of non-serializable types here
  }));

  return {
    props: { order: fotmatOrder },
  };
}
