'use client';

import Image from 'next/image';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

//TEMP DATA
const events = [
  {
    id: 1,
    title: 'Lorem iPSUM DOLOR',
    time: '12:00 pm - 2:00 pm',
    description: 'Lorem ipsum dolor sit emet, consectetur adipscing elit.',
  },
  {
    id: 1,
    title: 'Lorem iPSUM DOLOR',
    time: '12:00 pm - 2:00 pm',
    description: 'Lorem ipsum dolor sit emet, consectetur adipscing elit.',
  },
  {
    id: 1,
    title: 'Lorem iPSUM DOLOR',
    time: '12:00 pm - 2:00 pm',
    description: 'Lorem ipsum dolor sit emet, consectetur adipscing elit.',
  },
];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div className="bg-white p-4 rounded-md">
      <Calendar onChange={onChange} value={value} />
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4">Events</h1>
        <Image src="/moreDark.png" width={20} height={20} alt="more" />
      </div>
      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div
            className="p-5 rounded-md border-2 border-gray-100 boarder-t-4 odd:border-t-lamaSky even:border-t-lamaPurple "
            key={event.id}
          >
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-gray-600">{event.title}</h1>
              <span className="text-gray-300 text-xs">{event.time}</span>
            </div>
            <p className="mt-2 text-gray-400 text-sm">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
