import React, { useState } from "react";

const Table1 = () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "SHIB - Shibatoken",
      balance: "0.0000-0.00$",
      pic: "https://s3-alpha-sig.figma.com/img/b519/f14e/c33a55d909704b6e761fff3f4b868183?Expires=1698019200&Signature=A2fIMXIA2RbJt20RbxPuk~kFetrJfPplAoXJHjJcYiQk8pAjgen-f~wFo5Vy0rvwtQnV9vhE45bIcn2bw7diSoYAaVE0SYRijx~Emjbxxusisl3wKm1eZTnY7EB8d9q7DMnC4Lzx4a0u0zrGgFICxhpLiwz9ARaWgGo2q3cyrsGo6-0vS08s51U5m7gFQcu5JZ7EzH6kb7lKx9xHrDI2pnrfw6hzrVD4n3h5UH8eCzAjjgx-x4zVLBN9zwEn7Pn32uIdeh0k1CcTgDIstD1uxB3f~ylpjdnhGSvjBSLzAT50nSVWMxfiNehI1BBZopO1c4i2Gq5mIX0~M07Q3PKjpA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      id: 2,
      name: "MATIC - Polygon",
      balance: "0.0000-0.00$",
      pic: "https://s3-alpha-sig.figma.com/img/6f5b/09cd/3ebdc587462c76378e7f1a8838a6d3f6?Expires=1698019200&Signature=HbMkb~n0hP4lv0a9GuxUZy5erVhr-mnUSpEOLKoz~ayircI9ULZeb4B~20dyK6orKLUXpQhmycOmHzDN~mWvM8VEGmW7iFI4hbKmT0myKjLtCTb36keIfyi35Qh5LJUvEUa4HcDO8NpO8gUXUfaHqRy0mTSB3jLN~9NUhQp0UqgeRkM-n6mKSXt0nVp8GBoSwMjS~qaLjy2upn7U84g3LRh3OCnvLKzRmyfnNiQ2hj-ItxYQKD97npLocLHLjBJELhe8ZwxQrOZQwdZwfG4moMf7uHuBcvRFB8PW9GXCF8qhlvTAizofLYEbPMlmt9LNZSq-wNB87U3c5EFSchR7XA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      id: 3,
      name: "BNB - BNB",
      balance: "0.0000-0.00$",
      pic: "https://s3-alpha-sig.figma.com/img/7c32/4d15/ccf71b1d9273863ea35f9cc5fe2957cc?Expires=1698019200&Signature=jOL0qKia72nAmdHQgfyGXHFzr0h810Q2aFKWSMwakbnXAWIyg0j-14rOaI0Ny3z43F5Ou1t7GKpoddUQLqdpU~YTvFKiVUjMpEzD-S~BLRmOaZTrAX8KvFX1am4nezqYD-WP-xW~7MGmbdz1WfNGSYxALO~6AveRxd0sTsHbDE0x-0-WWhuRzuZkv8lzAxe3kUaagj1XNh40jDeFuEySEpK5XnB-fT5PnExxXDfw0nP4bcb2TOnf6qehOtlb70Y-zdeIGgBJ7NdWGdt1kab-cpKpvQQ7vULQqY1AkKn4qhLiiyGXtRd3Reo~ZP-YSdEPeXIwyYvvl6XpTplZeDAccQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      id: 4,
      name: "USDC - USD Circle",
      balance: "0.0000-0.00$",
      pic: "https://s3-alpha-sig.figma.com/img/c22e/9ce2/e88335b6a13a2229a01a4dfbeaaa7457?Expires=1698019200&Signature=Go7zz3Fz7mIKwysLnJPwKH09tfd9TwxAga6PbqNvnvwpX6eaJ~9jyFLq~-iz-IsAZD0mXVy-klgAT4wrvJDvyq8yH2b0zGgx3vbztRguirG04jSiqdT4ovyArYTA381UbKqfhk~BC7F6SP2n4Pyf78Wn0GzANobGkxoNwXlem9MjmLoR~EFClnuEIs5nf-goA6lsAYIr~J8wRnA-KiZjY22gENZ2LmseeixB8Tjn-T-QW62WsIzD5OCEyaTcqvpcUYe-uuAdzgHqXLtHWETLARTIWsDD2o-5GFu3nfjr9RtysgsFOAzDpUqxehO4waiThhXVwVshoiTJ0gcz84XYiQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      id: 5,
      name: "ETH - Etherium",
      balance: "0.0000-0.00$",
      pic: "https://s3-alpha-sig.figma.com/img/c22e/9ce2/e88335b6a13a2229a01a4dfbeaaa7457?Expires=1698019200&Signature=Go7zz3Fz7mIKwysLnJPwKH09tfd9TwxAga6PbqNvnvwpX6eaJ~9jyFLq~-iz-IsAZD0mXVy-klgAT4wrvJDvyq8yH2b0zGgx3vbztRguirG04jSiqdT4ovyArYTA381UbKqfhk~BC7F6SP2n4Pyf78Wn0GzANobGkxoNwXlem9MjmLoR~EFClnuEIs5nf-goA6lsAYIr~J8wRnA-KiZjY22gENZ2LmseeixB8Tjn-T-QW62WsIzD5OCEyaTcqvpcUYe-uuAdzgHqXLtHWETLARTIWsDD2o-5GFu3nfjr9RtysgsFOAzDpUqxehO4waiThhXVwVshoiTJ0gcz84XYiQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
  ]);

  const [search, setSearch] = useState("");

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="bg-gray-900  rounded-xl overflow-x-scroll xl:overflow-hidden border border-gray-500 w-[22rem] sm:w-[22rem] mx-6 md:w-[23rem] lg:w-[41rem] xl:w-[49rem] overflow-y-scroll ">
      <div className="bg-gray-900 flex space-x-3 rounded-2xl border-b border-gray-500   w-[22.5rem] sm:w-[30rem] md:w-[43rem] lg:w-[49rem] ">
        <div className="px-4 py-2 mt-1 flex-1 ml-2 text-gray-100">Name</div>
        <div className="px-4 py-2 mt-1 flex-1 text-gray-100 ml-[-3rem]">Balance</div>
        <div className="px-4 py-2 mt-1 flex-1 text-gray-100 ml-[-3rem]">Action</div>
        <div className="px-4 py-2 mt-1 flex-1 text-gray-100 ">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 border rounded-md text-black lg:w-full w-[10rem]"
          />
        </div>
      </div>
      {filteredData.map((item) => (
        <div
          key={item.id}
          className="space-x-7 lg:space-x-2 rounded-2xl flex sm:flex-row align-middle items-start py-4 text-white whitespace-nowrap"
        >
          <img
            className="w-6 h-6 rounded-full ml-5"
            src={item.pic}
            alt="avatar"
          />
          <div className="text-gray-100 flex-1 mx-4">{item.name}</div>
          <div className="text-gray-100 flex-1 ">{item.balance}</div>
          <div className="text-gray-100 flex-1 text-start ">Deposit</div>
          <div className="text-gray-100 flex-1  ">Whitdraw</div>
          <div className="text-gray-100 flex-1 text-center mx-6">Send</div>
        </div>
      ))}
    </div>
  );
};

export default Table1;
