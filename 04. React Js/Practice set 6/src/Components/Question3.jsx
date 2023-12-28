import { useEffect, useState } from "react"

const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === 'https://example.com/api/habits') {
        resolve({
          status: 200,
          message: 'Success',
          data: {
            habits: [
              {
                title: 'Drinking enough water',
                desc: 'Aim to drink 5-6L of water each day to stay hydrated',
                daysFollowed: 7,
                daysSkipped: 3,
              },
              {
                title: 'Exercise',
                desc: 'Track your workouts and aim to exercise a certain number of days per week',
                daysFollowed: 10,
                daysSkipped: 4,
              },
              {
                title: 'Meditation',
                desc: 'Track your daily meditation practice and try to increase the length of your sessions over time',
                daysFollowed: 30,
                daysSkipped: 7,
              },
              {
                title: 'Gratitude',
                desc: 'Write down something you are grateful for each day',
                daysFollowed: 11,
                daysSkipped: 5,
              },
              {
                title: 'Saving Money',
                desc: 'Track your expenses and set a goal to save a certain amount of money each month',
                daysFollowed: 40,
                daysSkipped: 15,
              },
            ],
          },
        })
      } else {
        reject({
          status: 404,
          message: 'Habits not found.',
        })
      }
    }, 2000)
  })
}

export const HabitTracker = () => {
  const [habits, setHabits] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchHabits = async(url) => {
    setLoading(true);
    try {
      const result = await fakeFetch(url);
      setHabits(result.data.habits);
      setLoading(false);
    } catch (error) {
      setHabits(error.message);
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchHabits("https://example.com/api/habits");
  },[])
  return <div className="bg-gray-200 text-black p-4 rounded-lg shadow-md">
  <h2 className="text-2xl font-semibold mb-4">Habit Tracker</h2>
  <ul>
    {
      !loading ? habits.length !== 0 && typeof habits !== "string" ? habits.map((habit,index) => <li key={index}>
          <h2 className="text-xl font-semibold">{habit.title}</h2>
          <div>{habit.desc}</div>
          <div>Days Followed: {habit.daysFollowed}</div>
          <div>Days Skipped: {habit.daysSkipped}</div>
      </li>) : <div>{habits}</div> : <div>Loading ...</div>
    }
  </ul>
  </div>
}