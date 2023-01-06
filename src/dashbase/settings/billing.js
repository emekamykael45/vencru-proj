import { useState } from "react";

import FormInput from "../../components/form-input";

import { mastercard, visa } from "../../assets/img";
import Icon from "../../assets/svg";
import Table from "../../components/table";

const CheckSelect = ({ id, content }) => (
  <div className="form-check flex items-start">
    <input
      className="form-check-input"
      type="radio"
      name="contactEmail"
      id={id}
    />
    <label className="form-check-label w-full" htmlFor={id}>
      {content}
    </label>
  </div>
);

const CardSelect = ({
  selected,
  onClick,
  id,
  type,
  last4,
  expiry,
  isDefault,
}) => (
  <div
    className={`flex p-[16px] rounded-[8px] border-[1px] cursor-pointer ${
      selected === id
        ? `bg-primary-50 border-primary-300`
        : `bg-white border-gray-200`
    }`}
    onClick={() => onClick(id)}
  >
    <img
      className="w-[46px] h-[32px] object-contain"
      src={type === "Visa" ? visa : mastercard}
      alt="Credit card"
    />

    <div className="ml-[12px]">
      <p
        className={`text-[14px] font-[500] ${
          selected === id ? `text-primary-800` : `text-gray-700`
        }`}
      >
        {type} ending in {last4}
      </p>
      <p
        className={`text-[14px] ${
          selected === id ? `text-primary-600` : `text-gray-500`
        }`}
      >
        Expiry {expiry}
      </p>

      <div className="flex mt-[8px]">
        <p
          className={`text-[14px] cursor-pointer ${
            isDefault ? `text-primary-500` : `text-gray-500`
          }`}
        >
          Set as default
        </p>
        <p className="ml-[12px] text-[14px] cursor-pointer text-primary-700">
          Edit
        </p>
      </div>
    </div>
  </div>
);

const Billing = () => {
  const [formData, setFormData] = useState({
    alternativeEmail: "billing@untitledui.com",
    selectedCard: 1,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectCard = (id) => {
    setFormData({
      ...formData,
      selectedCard: id,
    });
  };

  const cards = [
    { id: 1, type: "Visa", last4: "0000", expiry: "11/23", isDefault: true },
    {
      id: 2,
      type: "Mastercard",
      last4: "1234",
      expiry: "12/24",
      isDefault: false,
    },
  ];

  const tableHeaders = [
    <div className="flex items-center">
      <input
        className="form-check-input w-[16px] h-[16px] cursor-pointer"
        type="checkbox"
        value=""
        id="checkAll"
      />
      <div className="flex items-center ml-[12px]">
        <p className="mr-[4px]">Invoice</p>
        <Icon name="arrow" />
      </div>
    </div>,
    "Status",
    "Amount",
    "Date",
    "Users on plan",
    "",
  ];

  const tableData = [
    {
      id: 1,
      name: "Basic Plan – Dec 2022",
      status: "Paid",
      amount: "$10.00",
      date: "Dec 1, 2022",
      users: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV-REr89iWROi6ScePs5agSIHpG9BPBDDZ_g&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV-REr89iWROi6ScePs5agSIHpG9BPBDDZ_g&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV-REr89iWROi6ScePs5agSIHpG9BPBDDZ_g&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV-REr89iWROi6ScePs5agSIHpG9BPBDDZ_g&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV-REr89iWROi6ScePs5agSIHpG9BPBDDZ_g&usqp=CAU",
      ],
    },
    {
      id: 2,
      name: "Basic Plan – Dec 2022",
      status: "Paid",
      amount: "$12.30",
      date: "Dec 1, 2022",
      users: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV-REr89iWROi6ScePs5agSIHpG9BPBDDZ_g&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV-REr89iWROi6ScePs5agSIHpG9BPBDDZ_g&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV-REr89iWROi6ScePs5agSIHpG9BPBDDZ_g&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV-REr89iWROi6ScePs5agSIHpG9BPBDDZ_g&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV-REr89iWROi6ScePs5agSIHpG9BPBDDZ_g&usqp=CAU",
      ],
    },
  ];

  return (
    <>
      <div className="mt-[32px] px-[16px] md:px-0">
        <p className="text-[18px] font-[500] text-gray-900">Payment method</p>
        <p className="text-[14px] text-gray-500 leading-[20px]">
          Update your billing details and address.
        </p>

        <div className="mt-[20px] mb-[25px] border-gray-200 border-[1px]"></div>

        <div className="grid md:grid-cols-[2fr_3fr] gap-[20px]">
          <div>
            <p className="text-[14px] font-[500] text-gray-700">
              Contact email
            </p>
            <p className="text-[14px] text-gray-500 leading-[20px]">
              Where should invoices be sent?
            </p>
          </div>

          <div className="flex flex-col gap-[16px]">
            <CheckSelect
              id="contactEmail1"
              content={
                <div className="-mt-[5px] ml-[8px]">
                  <p className="text-[14px] font-[500] text-gray-700">
                    Send to my account email
                  </p>
                  <p className="text-[14px] text-gray-500 leading-[20px]">
                    olivia@untitledui.com
                  </p>
                </div>
              }
            />

            <CheckSelect
              id="contactEmail2"
              content={
                <div className="-mt-[5px] ml-[8px]">
                  <p className="text-[14px] font-[500] text-gray-700">
                    Send to an alternative email
                  </p>
                  <div className="mt-[12px]">
                    <FormInput
                      icon="mail"
                      name="alternativeEmail"
                      type="email"
                      placeholder=""
                      value={formData?.alternativeEmail}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              }
            />
          </div>
        </div>

        <div className="my-[20px] border-gray-200 border-[1px]"></div>

        <div className="grid md:grid-cols-[2fr_3fr] gap-[20px]">
          <div>
            <p className="text-[14px] font-[500] text-gray-700">Card details</p>
            <p className="text-[14px] text-gray-500 leading-[20px]">
              Select default payment method.
            </p>
          </div>

          <div className="flex flex-col gap-[16px]">
            {cards?.map((item, i) => (
              <CardSelect
                key={i}
                selected={formData.selectedCard}
                onClick={handleSelectCard}
                {...item}
              />
            ))}

            <div className="flex w-fit cursor-pointer">
              <div className="mr-[8px] w-[20px] h-[20px]">
                <Icon name="plus" />
              </div>

              <p className="text-[14px] font-[500] text-gray-500 leading-[20px]">
                Add new payment method
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[32px] px-[16px] md:px-0 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-[16px]">
        <p className="text-[18px] font-[500] text-gray-900">Billing history</p>

        <div className="flex p-[10px_16px] w-fit shadow-xs bg-white border-gray-300 border-[1px] rounded-[8px] cursor-pointer">
          <div className="mr-[8px] w-[20px] h-[20px]">
            <Icon name="download" />
          </div>

          <p className="text-[14px] font-[500] text-gray-500 leading-[20px]">
            Download all
          </p>
        </div>
      </div>

      <div className="mt-[24px]">
        <Table headers={tableHeaders}>
          {tableData?.map((row, i) => (
            <tr key={i} className="border-gray-200 border-t-[1px]">
              <td className="p-[26px_24px] bg-white">
                <div className="flex items-center">
                  <input
                    className="form-check-input w-[16px] h-[16px] cursor-pointer"
                    type="checkbox"
                    value=""
                    id={row.id}
                  />
                  <p className="ml-[12px] text-[14px] font-[500] text-gray-900">
                    {row?.name}
                  </p>
                </div>
              </td>
              <td className="p-[26px_24px] bg-white">
                <div className="flex items-center w-fit p-[2px_10px] bg-success-50 rounded-[15px]">
                  <Icon name="check" />
                  <p className="ml-[4px] text-[12px] font-[500] text-success-700">
                    {row?.status}
                  </p>
                </div>
              </td>
              <td className="p-[26px_24px] bg-white">
                <p className="text-[14px] text-gray-500">{row?.amount}</p>
              </td>
              <td className="p-[26px_24px] bg-white">
                <p className="text-[14px] text-gray-500">{row?.date}</p>
              </td>
              <td className="p-[26px_24px] bg-white">
                <p className="text-[14px] text-gray-500">{row?.date}</p>
              </td>
              <td className="p-[26px_24px] bg-white">
                <div className="mr-[8px] w-[20px] h-[20px] cursor-pointer">
                  <Icon name="download" />
                </div>
              </td>
            </tr>
          ))}
        </Table>
      </div>
    </>
  );
};

export default Billing;
