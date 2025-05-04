import { useState, useEffect } from "react";
import img1 from "./../../assets/hall_of_fame/3551911.jpg"
import img2 from "./../../assets/hall_of_fame/7309681.jpg"
import img3 from "./../../assets/hall_of_fame/9334176.jpg"
import img4 from "./../../assets/hall_of_fame/9440461.jpg"

const HallOfFame = () => {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    const fetchLeaders = async () => {
      const mockData = [
        {
          id: 1,
          name: "Иван Иванов",
          avatar: img1,
        },
        {
          id: 2,
          name: "Анна Петрова",
          avatar: img2,
        },
        {
          id: 3,
          name: "Сергей Сидоров",
          avatar: img3,
        },
        {
          id: 4,
          name: "Сергей Сидоров",
          avatar: img4,
        },
        {
          id: 5,
          name: "Сергей Сидоров",
          avatar: img2,
        },
      ];
      setLeaders(mockData);
    };
    fetchLeaders();
  }, []);

  return (
    <div className=" max-w-ful mx-10">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-12 ">
        {leaders.map((person) => (
          <div
            key={person.id}
            className=" p-2 hover:p-0 "
          >
            <div className="w-full overflow-hidden rounded-2xl  text-center">
              <img
                src={person.avatar}
                alt={person.name}
                className="w-full object-fit"
              />
            </div>
            <h3 className=" font-bold">{person.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HallOfFame;
