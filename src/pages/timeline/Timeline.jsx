import { useContext } from "react";
import { TimelineContext } from "../../context/TimelineContext";

const Timeline = () => {
  const { timeline } = useContext(TimelineContext);

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold mb-5">Timeline</h2>

      {
        timeline.length === 0 ? (
          <p>No activity yet</p>
        ) : (
          timeline.map(item => (
            <div key={item.id} className="bg-white p-4 shadow mb-3 rounded">
              <p><strong>{item.type}</strong> with {item.name}</p>
              <p className="text-sm text-gray-500">{item.time}</p>
            </div>
          ))
        )
      }
    </div>
  );
};

export default Timeline;