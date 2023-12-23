import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Person {
  _id: string;
  profileImage: string;
  Name: string;
  userName: string;
  colour: string;
  count: string;
  token: string;
}

const TableTwo: React.FC = () => {
  const [people, setPeople] = useState<Person[]>([]);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get<any>(
          'http://localhost:5000/api/admin/list-entity',
        );
        setPeople(response.data.list);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserDetails();
  }, []);



  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="mb-4">
      </div>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5 p-2.5">
          <h5 className="text-sm font-medium uppercase xsm:text-base">
            Agent Name
          </h5>
          <h5 className="text-sm font-medium uppercase xsm:text-base text-center">
            UserName
          </h5>
          <h5 className="text-sm font-medium uppercase xsm:text-base text-center">
            Token Number
          </h5>
          <h5 className="hidden text-sm font-medium uppercase xsm:text-base text-center sm:block">
            Count
          </h5>
          <h5 className="hidden text-sm font-medium uppercase xsm:text-base text-center sm:block">
            Colour
          </h5>
        </div>

        {people.map((person) => (
          <div
            key={person._id}
            className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-5 p-2.5"
          >
            <div className="flex items-center gap-3">
              <p className="text-black dark:text-white">{person.Name}</p>
            </div>
            <div className="flex items-center justify-center">
              <p className="text-black dark:text-white">{person.userName}</p>
            </div>
            <div className="flex items-center justify-center">
              <p className="text-meta-3">{person.token}</p>
            </div>
            <div className="hidden items-center justify-center sm:flex">
              <p className="text-black dark:text-white">{person.count}</p>
            </div>
            <div className="hidden items-center justify-center sm:flex">
              <p className="text-meta-5">{person.colour}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableTwo;
