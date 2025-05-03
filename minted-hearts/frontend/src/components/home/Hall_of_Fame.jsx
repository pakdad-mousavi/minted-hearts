import { useState, useEffect } from "react";

const HallOfFame = () => {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    const fetchLeaders = async () => {
      const mockData = [
        {
          id: 1,
          name: "Иван Иванов",
          role: "Топ-1 по пожертвованиям",
          stars: 5,
          avatar: "./../../assets/hall_of_fame/7309681.jpg",
        },
        {
          id: 2,
          name: "Анна Петрова",
          role: "Лучший волонтёр",
          stars: 4,
          avatar: "./../../assets/hall_of_fame/3551911.jpg",
        },
        {
          id: 3,
          name: "Сергей Сидоров",
          role: "Активный участник",
          stars: 3,
          avatar: "./../../assets/hall_of_fame/9334176.jpg",
        },
        {
          id: 4,
          name: "Сергей Сидоров",
          role: "Активный участник",
          stars: 3,
          avatar: "./../../assets/hall_of_fame/9440461.jpg",
        },
        {
          id: 5,
          name: "Сергей Сидоров",
          role: "Активный участник",
          stars: 3,
          avatar: "./../../assets/hall_of_fame/7309681.jpg",
        },
      ];
      setLeaders(mockData);
    };
    fetchLeaders();
  }, []);

  return (
    <div className="max-w-ful">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-12 ">
        {leaders.map((person) => (
          <div
            key={person.id}
            className=" hover:border-yellow-400 scale-105 transition-transform duration-300"
          >
            <div className=" bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 p-4 text-center">
              <img
                src={person.avatar}
                alt={person.name}
                className="w-full h-full object-fit"
              />
            </div>
            <h3 className=" font-bold">{person.name}</h3>
            <p className="text-gray-600">{person.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HallOfFame;
