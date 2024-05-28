import { FaAngleDown, FaAngleRight } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { VscSettings } from "react-icons/vsc";
import { LuCalendarDays } from "react-icons/lu";

import data from "../components/data";
import { FaExternalLinkAlt } from "react-icons/fa";
import { RiArrowDownSFill } from "react-icons/ri";

const getOrderTypeClass = (type) => {
  return type === "Dine In" ? "red" : type === "Delivery" ? "green" : "#e5b136";
};

const getOrderStatusClass = (status) => {
  return status === "New Order"
    ? {
        color: "red",
        backgroundColor: "#ff000050",
      }
    : {
        color: "purple",
        backgroundColor: "#80008020",
      };
};

function App() {
  return (
    <>
      <div className="flex p-5 h-dvh font-sans">
        {/* left section */}
        <div className="w-1/5 bg-[#e9edf9] py-10 px-2">
          <button className="flex items-center bg-[#e73845] justify-between border-2 border-black w-full text-white text-sm p-2 rounded-md">
            <span className="text-base">Orders</span>
            <FaAngleRight className="text-base" />
          </button>
        </div>

        {/* right section */}
        <div className="w-4/5 relative max-h-lvh bg-[#ffecd1] px-2 overflow-hidden">
          <div className="pt-2">
            <h2 className="text-2xl font-bold">Order Details</h2>
            <div className="flex w-full justify-between mt-5 pr-8">
              <div className="w-3/5 gap-4 py-1 px-2 bg-white rounded-md relative flex items-center text-gray-400 border border-gray-400">
                <FiSearch size={20} />
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full px-2 placeholder-gray-400 placeholder:text-sm text-base text-black border-none"
                  onChange={() => {}}
                />
              </div>
              <div className="flex gap-2 text-base items-center border border-gray-400 bg-white px-2 rounded-lg">
                <VscSettings className="text-gray-400" />
                <span>Filters</span>
              </div>
              <div className="flex gap-5 text-base items-center border border-gray-400 bg-white px-2 rounded-lg">
                <LuCalendarDays className="text-gray-400" />
                <span>Today</span>
                <FaAngleDown />
              </div>
            </div>
          </div>

          {/* list of orders */}
          {/* <OrderList /> */}
          <div className="bg-white border-2 border-gray-400 mt-5 w-full h-fit text-left p-3">
            <table className="w-[95%] h-full m-auto">
              <thead className="border-b-2 border-gray-400 justify-evenly h-10">
                <tr className="text-gray-500">
                  <th>Order ID</th>
                  <th>Table no</th>
                  <th>Customer name</th>
                  <th>
                    <div className="flex items-center">
                      <span>Order type</span>
                      <RiArrowDownSFill
                        size={20}
                        fill="black"
                      />
                    </div>
                  </th>
                  <th>
                    <div className="flex items-center">
                      <span>Order status</span>
                      <RiArrowDownSFill
                        size={20}
                        fill="black"
                      />
                    </div>
                  </th>
                  <th>Payment</th>
                  <th>Order date</th>
                  <th>View order</th>
                </tr>
              </thead>
              <tbody>
                {data.map((order, index) => (
                  <tr
                    key={index}
                    className="h-14 border-b border-gray-400"
                  >
                    <td className="text-blue-500">{order.OrderID}</td>
                    <td>{index + 1}</td>
                    <td>{order.customerName}</td>
                    <td
                      style={{
                        color: getOrderTypeClass(order.orderType),
                      }}
                    >
                      {order.orderType}
                    </td>
                    <td>
                      <span
                        className="px-2 py-1 rounded-md"
                        style={{
                          color: getOrderStatusClass(order.status).color,
                          backgroundColor: getOrderStatusClass(order.status)
                            .backgroundColor,
                        }}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td>
                      <span
                        className="px-2 py-1 rounded-md"
                        style={{
                          color: order.payment === "Paid" ? "green" : "#e43535",
                          backgroundColor:
                            order.payment === "Paid"
                              ? "#00ff0020"
                              : "#e4353530",
                        }}
                      >
                        {order.payment}
                      </span>
                    </td>
                    <td className="">
                      <span>19 Dec 2022</span>
                      <br />
                      <span>06:28 PM</span>
                    </td>
                    <td className="flex items-center justify-center h-full">
                      <a
                        href="/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
