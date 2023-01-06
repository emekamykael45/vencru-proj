import React from "react";

const Table = ({ headers, children }) => (
  <React.Fragment>
    <div className="w-full md:shadow-md vertical_scroll">
      <table className="w-[770px] 2lg:w-full border-gray-200 border-[1px]">
        <thead className="bg-gray-50">
          <tr>
            {headers.map((header, i) => (
              <th
                className="p-[12px_24px] text-[13px] font-[500] text-gray-500 text-left"
                key={i}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>{children}</tbody>
      </table>
    </div>
  </React.Fragment>
);

export default Table;
