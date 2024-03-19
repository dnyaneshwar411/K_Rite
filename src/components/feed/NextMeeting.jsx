export function NextMeeting({ timing }) {
  const meeting = new Date(timing);
  const curr = new Date()

  const timeDifference = meeting.getTime() - curr.getTime();
  const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  return <button className="px-2 py-1 text-slate-500 bg-teal-200 font-semibold rounded-md">{days} days, {hours} hours</button>

}