// import Breadcrumb from '../../components/Breadcrumb';
import axios from 'axios';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Link } from 'react-router-dom';

const EntityForm = () => {
  const [user, setUser] = useState({
    tokenNumber: '',
    count: ''
  });

  const [startDate, setStartDate] = useState<Date | null>(new Date());

  const handleChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleRegistration = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/agent/add-entity', {
        ...user,
        date: startDate || undefined, // Send undefined if startDate is null
      });

      console.log('User registered:', response.data);
      alert('User registered successfully!');
    } catch (error) {
      console.error('Error registering user:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <>
      {/* <Breadcrumb pageName="Add Token" /> */}

      <div className="grid grid-cols-1 gap-9 ">
        <div className="flex flex-col gap-9 ">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <form onSubmit={handleRegistration}>
              <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">Input Fields</h3>
              </div>

              <div className="flex flex-col gap-5.5 p-6.5">
                <div>
                  <label className="mb-3 block text-black dark:text-white">Token Number</label>
                  <input
                    type="text"
                    name="tokenNumber"
                    value={user.tokenNumber}
                    placeholder="Token Number"
                    onChange={handleChanged}
                    className="rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary w-2/3"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-black dark:text-white">Token Count</label>
                  <input
                    type="text"
                    name="count"
                    placeholder="Token Count"
                    value={user.count}
                    onChange={handleChanged}
                    className="rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary w-2/3"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-black dark:text-white">Select date</label>
                  {/* <div className="rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary w-2/3"> */}
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}  className="rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary w-2/3"/>
                    {/* </div> */}
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="flex justify-center rounded bg-primary p-3 font-medium text-gray ml-50"
                >
                  Save
                </button>
                <Link
                  to="/"
                  className="flex justify-center rounded bg-primary p-3 font-medium text-gray ml-3"
                >
                  Cancel
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EntityForm;
