import { useState, useEffect } from 'react';
import { FaCalendarAlt, FaChartLine, FaFire, FaMedal } from 'react-icons/fa';
import { GiMeditation } from 'react-icons/gi';
import { useUserStats } from '../components/usercontexts/UserStatsContext';
import { startOfDay, isSameDay, parseISO } from 'date-fns';
import Schedule from './schedule/Sechedule';
import Pricing from './moneycard/Pricing';
import { Line, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const { userStats, practiceLogs } = useUserStats();
  const [timeRange, setTimeRange] = useState('week');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const getWeeklyPracticeData = (logs) => {
    const days = Array(7)
      .fill()
      .map((_, i) => startOfDay(new Date().setDate(new Date().getDate() - 6 + i)));
    return days.map((day) =>
      logs
        .filter((log) => isSameDay(parseISO(log.date), day))
        .reduce((sum, log) => sum + log.totalDuration / 60, 0)
    );
  };

  const practiceTimeData = {
    labels:
      timeRange === 'week'
        ? ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        : Array.from({ length: 30 }, (_, i) => i + 1),
    datasets: [
      {
        label: 'Practice Time (minutes)',
        data: timeRange === 'week' ? getWeeklyPracticeData(practiceLogs) : [],
        fill: true,
        backgroundColor: 'rgba(99, 102, 241, 0.2)',
        borderColor: '#6366F1',
        tension: 0.4,
        pointBackgroundColor: '#6366F1',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  const favoriteAsanasData = {
    labels: userStats.favoriteAsanas?.map((a) => a.name) || [],
    datasets: [
      {
        label: 'Times Practiced',
        data: userStats.favoriteAsanas?.map((a) => a.count) || [],
        backgroundColor: [
          '#6366F1', // Indigo
          '#8B5CF6', // Violet
          '#EC4899', // Pink
          '#10B981', // Emerald
          '#F59E0B', // Amber
        ],
        borderWidth: 0,
        hoverOffset: 10,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
      },
      tooltip: {
        backgroundColor: 'rgba(17, 24, 39, 0.8)',
        padding: 12,
        titleFont: {
          size: 14,
          weight: 'bold',
        },
        bodyFont: {
          size: 13,
        },
        displayColors: true,
        borderColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 1,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(156, 163, 175, 0.1)',
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    animations: {
      tension: {
        duration: 1000,
        easing: 'linear',
      },
    },
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          padding: 20,
        },
      },
    },
    cutout: '70%',
    animation: {
      animateRotate: true,
      animateScale: true,
    },
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-indigo-50 min-h-screen">
      {/* Header with subtle animation */}
      <div 
        className={`w-full bg-white py-6 px-4 sm:px-6 lg:px-8 shadow-sm mb-6 transition-all duration-700 ease-out transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center">
              <GiMeditation className="mr-2 text-indigo-600" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                Yoga Dashboard
              </span>
            </h1>
            <p className="text-gray-500 mt-1">Track your progress and stay motivated</p>
          </div>
          <div className="mt-4 md:mt-0">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
              <FaCalendarAlt className="mr-1" /> 
              {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stat cards with staggered animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { 
              icon: <GiMeditation />, 
              title: "Total Sessions", 
              value: userStats.totalSessions || 0,
              color: "from-blue-500 to-indigo-600",
              delay: 0
            },
            { 
              icon: <FaChartLine />, 
              title: "Total Practice Time", 
              value: `${Math.floor(userStats.totalPracticeTime || 0)} mins`,
              color: "from-indigo-500 to-purple-600",
              delay: 100
            },
            { 
              icon: <FaFire />, 
              title: "Current Streak", 
              value: `${userStats.currentStreak || 0} days`,
              color: "from-pink-500 to-rose-500",
              delay: 200
            },
            { 
              icon: <FaMedal />, 
              title: "Total Points", 
              value: userStats.pointsTotal || 0,
              color: "from-yellow-500 to-amber-500",
              delay: 300
            }
          ].map((stat, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-700 ease-out transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${stat.delay}ms` }}
            >
              <div className={`h-2 bg-gradient-to-r ${stat.color}`}></div>
              <div className="p-6">
                <div className="flex items-center">
                  <div className={`rounded-full bg-gradient-to-r ${stat.color} p-3 mr-4 text-white`}>
                    {stat.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{stat.title}</p>
                    <h3 className="text-2xl font-bold text-gray-800">{stat.value}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Charts with entry animation */}
        <div 
          className={`grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8 transition-all duration-700 ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          <div className="bg-white rounded-xl shadow-md p-6 lg:col-span-2 hover:shadow-lg transition-shadow duration-300">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-800">Practice Time</h3>
              <div className="inline-flex bg-gray-100 p-1 rounded-lg">
                <button
                  onClick={() => setTimeRange('week')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    timeRange === 'week' 
                      ? 'bg-indigo-600 text-white shadow-md' 
                      : 'text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Week
                </button>
                <button
                  onClick={() => setTimeRange('month')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    timeRange === 'month' 
                      ? 'bg-indigo-600 text-white shadow-md' 
                      : 'text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Month
                </button>
              </div>
            </div>
            <div className="h-64">
              <Line data={practiceTimeData} options={chartOptions} />
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-lg font-semibold mb-6 text-gray-800">Favorite Asanas</h3>
            <div className="h-64 flex items-center justify-center">
              <Doughnut data={favoriteAsanasData} options={doughnutOptions} />
            </div>
          </div>
        </div>
        
        {/* Pricing component with animation */}
        <div 
          className={`transition-all duration-700 ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '500ms' }}
        >
          <Pricing />
        </div>
        
        {/* Schedule component with animation */}
        <div 
          className={`mt-8 transition-all duration-700 ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <Schedule />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;