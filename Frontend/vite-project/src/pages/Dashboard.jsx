import React, { useState, useEffect, useRef } from "react";
import * as echarts from "echarts";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import {
  additionalMemes,
  finalMemes,
  initialMemes,
  trendingTags,
  notifications,
  topCreators,
  leaderboardData,
} from "../components/data/mockdata";
import "swiper/css";
import { Link } from "react-router-dom";

const Dashboard = ({ setIsAuthenticated }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showNotifications, setShowNotifications] = useState(false);
  const [activeTab, setActiveTab] = useState("trending");
  const [chartInstance, setChartInstance] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [allMemes, setAllMemes] = useState([]);
  const [displayedMemes, setDisplayedMemes] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [leaderboardView, setLeaderboardView] = useState("weekly");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  // Trending tags data

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("https://memehub-vfch.onrender.com/auth/me", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            // Add token or any other authorization headers if needed
            "Authorization": `Bearer ${localStorage.getItem("authToken")}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          console.log(data); // You can see the entire response in the console
          setUsername(data.user.username); // Set username from the response
        } else {
          console.error("Failed to fetch user data", response.status);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);  

  // Set up all memes for pagination
  useEffect(() => {
    setAllMemes([...initialMemes, ...additionalMemes, ...finalMemes]);
    setDisplayedMemes(initialMemes);
  }, []);
  // Load more memes function
  const loadMoreMemes = () => {
    setIsLoading(true);
    // Simulate API call with timeout
    setTimeout(() => {
      const nextPage = page + 1;
      setPage(nextPage);
      // Calculate which memes to show next
      if (nextPage === 2) {
        setDisplayedMemes([...displayedMemes, ...additionalMemes]);
      } else if (nextPage === 3) {
        setDisplayedMemes([...displayedMemes, ...finalMemes]);
        setHasMore(false);
      }
      setIsLoading(false);
    }, 1000);
  };
  // Initialize chart
  useEffect(() => {
    const chartDom = document.getElementById("engagement-chart");
    if (chartDom) {
      const myChart = echarts.init(chartDom);
      setChartInstance(myChart);
      const option = {
        animation: false,
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["Likes", "Comments", "Shares"],
          textStyle: {
            color: "#333",
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          axisLine: {
            lineStyle: {
              color: "#999",
            },
          },
          axisLabel: {
            color: "#666",
          },
        },
        yAxis: {
          type: "value",
          axisLine: {
            lineStyle: {
              color: "#999",
            },
          },
          axisLabel: {
            color: "#666",
          },
          splitLine: {
            lineStyle: {
              color: "#eee",
            },
          },
        },
        series: [
          {
            name: "Likes",
            type: "line",
            data: [120, 132, 101, 134, 290, 230, 220],
            smooth: true,
            lineStyle: {
              width: 3,
            },
            itemStyle: {
              color: "#8A2BE2",
            },
          },
          {
            name: "Comments",
            type: "line",
            data: [45, 52, 38, 54, 70, 65, 60],
            smooth: true,
            lineStyle: {
              width: 3,
            },
            itemStyle: {
              color: "#FF6B6B",
            },
          },
          {
            name: "Shares",
            type: "line",
            data: [80, 72, 65, 84, 120, 132, 91],
            smooth: true,
            lineStyle: {
              width: 3,
            },
            itemStyle: {
              color: "#4ECDC4",
            },
          },
        ],
      };
      option && myChart.setOption(option);
    }
    return () => {
      chartInstance?.dispose();
    };
  }, []);
  // Handle window resize for chart
  useEffect(() => {
    const handleResize = () => {
      chartInstance?.resize();
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [chartInstance]);

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header/Navigation */}
      <header className="bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <a href="#" className="flex items-center">
                <i className="fas fa-laugh-squint text-white text-2xl mr-2"></i>
                <span className="text-xl font-bold text-white">MemeHub</span>
              </a>
            </div>
            {/* Search Bar */}
            <div className="flex-1 max-w-lg mx-8">
              <div className="relative">
                <input
                  type="text"
                  className="w-full bg-white bg-opacity-20 rounded-full py-2 px-4 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-white text-lightgrey placeholder-white placeholder-opacity-75 border-none"
                  placeholder="Search memes, templates, creators..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <i className="fas fa-search absolute left-3 top-2.5 text-white"></i>
              </div>
            </div>
            {/* Right Navigation */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button
                  className="text-white hover:text-yellow-200 cursor-pointer"
                  onClick={() => setShowNotifications(!showNotifications)}
                >
                  <i className="fas fa-bell text-lg"></i>
                  <span className="absolute -top-1 -right-1 bg-yellow-300 text-purple-700 text-xs rounded-full h-4 w-4 flex items-center justify-center font-bold">
                    5
                  </span>
                </button>
                {/* Notifications Dropdown */}
                {showNotifications && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200">
                    <div className="px-4 py-2 border-b border-gray-200">
                      <h3 className="text-sm font-semibold">Notifications</h3>
                    </div>
                    {notifications.map((notification) => (
                      <div
                        key={notification.id}
                        className="px-4 py-3 hover:bg-gray-100 cursor-pointer"
                      >
                        <p className="text-sm">{notification.text}</p>
                        <p className="text-xs text-gray-500 mt-1">
                          {notification.time}
                        </p>
                      </div>
                    ))}
                    <div className="px-4 py-2 text-center border-t border-gray-200">
                      <a
                        href="#"
                        className="text-xs text-purple-600 hover:text-purple-800"
                      >
                        View all notifications
                      </a>
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/create"
                className="bg-yellow-400 hover:bg-yellow-500 text-purple-800 font-bold py-2 px-4 rounded-full text-sm flex items-center whitespace-nowrap cursor-pointer shadow-md no-underline"
              >
                <i className="fas fa-plus mr-2"></i>
                Create Meme
              </Link>
              <div className="flex items-center space-x-2">
                <img
                  src="https://readdy.ai/api/search-image?query=Professional%20avatar%20photo%20of%20creative%20young%20person%20with%20modern%20style%2C%20simple%20neutral%20background%2C%20high%20quality%20portrait%2C%20digital%20art%20style%2C%20perfect%20for%20profile%20picture&width=100&height=100&seq=12&orientation=squarish"
                  alt="Profile"
                  className="h-8 w-8 rounded-full object-cover cursor-pointer border-2 border-white"
                />

                {/* Logout Button */}
                <button
                  onClick={() => {
                    localStorage.removeItem("token");
                    setIsAuthenticated(false);
                    navigate("/login"); // Redirect to login page
                  }}
                  className="bg-red-500 hover:bg-red-600 text-white text-xs px-3 py-1 rounded-full shadow-sm cursor-pointer"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Trending Tags */}
      <div className="bg-purple-100 py-3 ">
        <div className="container mx-auto px-4">
          <Swiper
            direction="horizontal"
            modules={[Pagination, Autoplay]}
            spaceBetween={10}
            slidesPerView="auto"
            className="trending-tags-swiper"
          >
            {trendingTags.map((tag, index) => (
              <SwiperSlide key={index} className="w-auto">
                <div className="bg-white hover:bg-purple-200 text-purple-700 rounded-full px-4 py-1 text-sm cursor-pointer whitespace-nowrap shadow-sm border border-purple-200">
                  #{tag}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 flex min-h-[1024px]">
        {/* Main Feed */}
        <div className="flex-1 mr-4">
          {/* Tabs */}
          <div className="flex border-b border-gray-200 mb-6">
            <button
              className={`pb-3 px-4 text-sm font-medium cursor-pointer ${
                activeTab === "trending"
                  ? "text-purple-600 border-b-2 border-purple-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("trending")}
            >
              <i className="fas fa-fire mr-2 text-orange-500"></i>
              Trending
            </button>
            <button
              className={`pb-3 px-4 text-sm font-medium cursor-pointer ${
                activeTab === "latest"
                  ? "text-purple-600 border-b-2 border-purple-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("latest")}
            >
              <i className="fas fa-clock mr-2 text-blue-500"></i>
              Latest
            </button>
            <button
              className={`pb-3 px-4 text-sm font-medium cursor-pointer ${
                activeTab === "following"
                  ? "text-purple-600 border-b-2 border-purple-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("following")}
            >
              <i className="fas fa-user-friends mr-2 text-green-500"></i>
              Following
            </button>
            <button
              className={`pb-3 px-4 text-sm font-medium cursor-pointer ${
                activeTab === "leaderboard"
                  ? "text-purple-600 border-b-2 border-purple-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("leaderboard")}
            >
              <i className="fas fa-trophy mr-2 text-yellow-500"></i>
              Leaderboard
            </button>
          </div>
          {activeTab !== "leaderboard" ? (
            <>
              {/* Meme Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {displayedMemes.map((meme) => (
                  <div
                    key={meme.id}
                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-transform hover:scale-[1.02] border border-gray-200"
                  >
                    <div className="relative">
                      <img
                        src={meme.imageUrl}
                        alt={meme.title}
                        className="w-full h-auto object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-white bg-opacity-80 rounded-full p-1 cursor-pointer shadow-sm">
                        <i className="fas fa-ellipsis-h text-gray-600 p-1"></i>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center mb-3">
                        <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-2 border border-purple-200">
                          <i className="fas fa-user text-purple-500"></i>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-800">
                            {meme.creator}
                          </p>
                          <p className="text-xs text-gray-500">
                            {meme.timeAgo}
                          </p>
                        </div>
                      </div>
                      <h3 className="font-medium mb-2 text-gray-800">
                        {meme.title}
                      </h3>
                      <div className="flex mb-3 flex-wrap">
                        {meme.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="text-xs text-purple-600 mr-2 mb-1"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex justify-between items-center border-t border-gray-200 pt-3">
                        <div className="flex items-center space-x-4">
                          <button className="flex items-center text-gray-500 hover:text-purple-600 cursor-pointer">
                            <i className="fas fa-arrow-up mr-1"></i>
                            <span className="text-sm">{meme.likes}</span>
                          </button>
                          <button className="flex items-center text-gray-500 hover:text-blue-500 cursor-pointer">
                            <i className="fas fa-comment mr-1"></i>
                            <span className="text-sm">{meme.comments}</span>
                          </button>
                        </div>
                        <button className="text-gray-500 hover:text-green-500 cursor-pointer">
                          <i className="fas fa-share-alt"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Load More Button or No More Memes Message */}
              <div className="text-center mt-8">
                {isLoading ? (
                  <div className="flex justify-center items-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-500"></div>
                  </div>
                ) : hasMore ? (
                  <button
                    id="load-more-button"
                    className="bg-purple-100 hover:bg-purple-200 text-purple-700 font-medium py-2 px-6 rounded-full text-sm !rounded-button whitespace-nowrap cursor-pointer shadow-sm border border-purple-200"
                    onClick={loadMoreMemes}
                  >
                    Load More
                  </button>
                ) : (
                  <p className="text-gray-500 text-sm">No more memes to load</p>
                )}
              </div>
            </>
          ) : (
            /* Leaderboard Content */
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-800">
                  Meme Masters Leaderboard
                </h2>
                <div className="flex space-x-2">
                  <button
                    className={`px-4 py-1 text-sm rounded-full !rounded-button whitespace-nowrap cursor-pointer ${
                      leaderboardView === "weekly"
                        ? "bg-purple-600 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                    onClick={() => setLeaderboardView("weekly")}
                  >
                    Weekly
                  </button>
                  <button
                    className={`px-4 py-1 text-sm rounded-full !rounded-button whitespace-nowrap cursor-pointer ${
                      leaderboardView === "monthly"
                        ? "bg-purple-600 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                    onClick={() => setLeaderboardView("monthly")}
                  >
                    Monthly
                  </button>
                  <button
                    className={`px-4 py-1 text-sm rounded-full !rounded-button whitespace-nowrap cursor-pointer ${
                      leaderboardView === "allTime"
                        ? "bg-purple-600 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                    onClick={() => setLeaderboardView("allTime")}
                  >
                    All Time
                  </button>
                </div>
              </div>
              <div className="overflow-hidden">
                <div className="bg-purple-100 rounded-lg p-4 mb-4 flex items-center">
                  <div className="w-12 text-center font-bold text-purple-800">
                    #
                  </div>
                  <div className="flex-1 ml-2 font-bold text-purple-800">
                    Creator
                  </div>
                  <div className="w-24 text-right font-bold text-purple-800">
                    Points
                  </div>
                </div>
                {leaderboardData[leaderboardView].map((creator, index) => (
                  <div
                    key={creator.id}
                    className={`p-4 flex items-center ${
                      index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    } hover:bg-purple-50 transition-colors rounded-lg mb-2`}
                  >
                    <div className="w-12 text-center">
                      {creator.rank <= 3 ? (
                        <div
                          className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${
                            creator.rank === 1
                              ? "bg-yellow-400"
                              : creator.rank === 2
                              ? "bg-gray-300"
                              : "bg-yellow-700"
                          } text-white font-bold`}
                        >
                          {creator.rank}
                        </div>
                      ) : (
                        <span className="text-gray-600 font-medium">
                          {creator.rank}
                        </span>
                      )}
                    </div>
                    <div className="flex-1 flex items-center ml-2">
                      <div className="relative">
                        <img
                          src={creator.avatar}
                          alt={creator.name}
                          className="h-10 w-10 rounded-full object-cover border-2 border-white shadow-sm"
                        />
                        <div className="absolute -bottom-1 -right-1">
                          {creator.change === "up" && (
                            <i className="fas fa-arrow-up text-green-500 bg-white rounded-full p-0.5 text-xs"></i>
                          )}
                          {creator.change === "down" && (
                            <i className="fas fa-arrow-down text-red-500 bg-white rounded-full p-0.5 text-xs"></i>
                          )}
                          {creator.change === "same" && (
                            <i className="fas fa-minus text-gray-500 bg-white rounded-full p-0.5 text-xs"></i>
                          )}
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="font-medium text-gray-800">
                          {creator.name}
                        </p>
                        <div className="flex items-center">
                          <i className="fas fa-medal text-xs text-purple-500 mr-1"></i>
                          <span className="text-xs text-gray-500">
                            Meme Master
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="w-24 text-right font-bold text-purple-700">
                      {creator.points.toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500 mb-4">
                  Points are calculated based on likes, comments, shares, and
                  overall engagement.
                </p>
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-full text-sm !rounded-button whitespace-nowrap cursor-pointer shadow-md">
                  View Your Ranking
                </button>
              </div>
            </div>
          )}
        </div>
        {/* Sidebar */}
        <div className="w-80 hidden lg:block">
          {/* User Stats Card */}
          <div className="bg-white rounded-lg p-4 mb-6 shadow-md border border-gray-200">
            <div className="flex items-center mb-4">
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20avatar%20photo%20of%20creative%20young%20person%20with%20modern%20style%2C%20simple%20neutral%20background%2C%20high%20quality%20portrait%2C%20digital%20art%20style%2C%20perfect%20for%20profile%20picture&width=100&height=100&seq=13&orientation=squarish"
                alt="Profile"
                className="h-12 w-12 rounded-full object-cover mr-3 border-2 border-purple-200"
              />
              <div>
                <h3 className="font-medium text-gray-800">{username || "User"}</h3>
                <p className="text-xs text-gray-500">Meme Creator</p>
              </div>
            </div>
            <div className="grid grid-cols-3 text-center mb-4 bg-purple-50 rounded-lg p-2">
              <div>
                <p className="text-xl font-bold text-gray-800">42</p>
                <p className="text-xs text-gray-500">Memes</p>
              </div>
              <div>
                <p className="text-xl font-bold text-gray-800">1.2K</p>
                <p className="text-xs text-gray-500">Followers</p>
              </div>
              <div>
                <p className="text-xl font-bold text-gray-800">8.5K</p>
                <p className="text-xs text-gray-500">Likes</p>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs text-gray-600">Viral Score</span>
                <span className="text-xs font-medium text-purple-600">
                  78/100
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full"
                  style={{ width: "78%" }}
                ></div>
              </div>
            </div>
            {/* Engagement Chart */}
            <div>
              <h4 className="text-sm font-medium mb-2 text-gray-800">
                Engagement This Week
              </h4>
              <div id="engagement-chart" className="w-full h-48"></div>
            </div>
          </div>
          {/* Top Creators */}
          <div className="bg-white rounded-lg p-4 shadow-md border border-gray-200">
            <h3 className="font-medium mb-4 text-gray-800">Top Creators</h3>
            {topCreators.map((creator, index) => (
              <div
                key={creator.id}
                className="flex items-center justify-between py-2 border-b border-gray-200 last:border-0"
              >
                <div className="flex items-center">
                  <span className="text-sm text-gray-500 mr-2">
                    {index + 1}
                  </span>
                  <img
                    src={creator.avatar}
                    alt={creator.name}
                    className="h-8 w-8 rounded-full object-cover mr-2 border border-purple-100"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      {creator.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {creator.memes} memes
                    </p>
                  </div>
                </div>
                <div className="text-xs text-purple-600 font-medium">
                  {creator.followers}
                </div>
              </div>
            ))}
            <button className="w-full mt-3 text-xs text-purple-600 hover:text-purple-800 cursor-pointer">
              View All Creators
            </button>
          </div>
          {/* Featured Meme Contest */}
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-4 mt-6 shadow-md text-white">
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-bold">Weekly Meme Contest</h3>
              <span className="bg-yellow-400 text-purple-800 text-xs font-bold px-2 py-1 rounded-full">
                ACTIVE
              </span>
            </div>
            <p className="text-sm mb-3">
              Create the funniest "Friday Work Mood" meme and win awesome
              prizes!
            </p>
            <div className="flex justify-between items-center text-xs mb-3">
              <span>
                <i className="far fa-clock mr-1"></i> Ends in 2 days
              </span>
              <span>
                <i className="fas fa-users mr-1"></i> 234 participants
              </span>
            </div>
            <a
              href="https://readdy.ai/home/4ecca6f0-195d-4926-a561-44b92a9d155b/b10a8503-7fc4-4436-a65b-99f7eb8b18e0"
              data-readdy="true"
              className="block w-full bg-white text-purple-600 hover:bg-purple-100 font-medium py-2 rounded-lg text-sm !rounded-button whitespace-nowrap cursor-pointer text-center no-underline"
            >
              Join Contest
            </a>
          </div>
        </div>
      </main>
      {/* Floating Create Button (Mobile) */}
      <div className="fixed bottom-6 right-6 lg:hidden">
        <a
          href="https://readdy.ai/home/4ecca6f0-195d-4926-a561-44b92a9d155b/b10a8503-7fc4-4436-a65b-99f7eb8b18e0"
          data-readdy="true"
          className="bg-yellow-400 hover:bg-yellow-500 text-purple-800 h-14 w-14 rounded-full shadow-lg flex items-center justify-center !rounded-button cursor-pointer no-underline"
        >
          <i className="fas fa-plus text-xl"></i>
        </a>
      </div>
      {/* Footer */}
      <footer className="bg-purple-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <i className="fas fa-laugh-squint text-yellow-400 text-2xl mr-2"></i>
                <span className="text-xl font-bold text-white">MemeHub</span>
              </div>
              <p className="text-purple-200 text-sm mb-4">
                The ultimate platform for meme creators and enthusiasts. Share,
                laugh, and connect through the universal language of memes.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-purple-200 hover:text-yellow-400 cursor-pointer"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  className="text-purple-200 hover:text-yellow-400 cursor-pointer"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="text-purple-200 hover:text-yellow-400 cursor-pointer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="#"
                  className="text-purple-200 hover:text-yellow-400 cursor-pointer"
                >
                  <i className="fab fa-tiktok"></i>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-purple-200 hover:text-yellow-400 cursor-pointer"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-purple-200 hover:text-yellow-400 cursor-pointer"
                  >
                    Explore
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-purple-200 hover:text-yellow-400 cursor-pointer"
                  >
                    Leaderboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-purple-200 hover:text-yellow-400 cursor-pointer"
                  >
                    Contests
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-purple-200 hover:text-yellow-400 cursor-pointer"
                  >
                    Templates
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-purple-200 hover:text-yellow-400 cursor-pointer"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-purple-200 hover:text-yellow-400 cursor-pointer"
                  >
                    Community Guidelines
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-purple-200 hover:text-yellow-400 cursor-pointer"
                  >
                    Safety Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-purple-200 hover:text-yellow-400 cursor-pointer"
                  >
                    Creator Resources
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-purple-200 hover:text-yellow-400 cursor-pointer"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Newsletter</h4>
              <p className="text-purple-200 text-sm mb-4">
                Subscribe to get the latest meme trends and contest
                announcements.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-purple-800 text-white px-3 py-2 rounded-l-lg focus:outline-none text-sm flex-1 border-none"
                />
                <button className="bg-yellow-400 hover:bg-yellow-500 text-purple-900 font-bold px-4 py-2 rounded-r-lg text-sm !rounded-button whitespace-nowrap cursor-pointer">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-purple-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-purple-300 text-sm">
              © 2025 MemeHub. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a
                href="#"
                className="text-purple-300 hover:text-yellow-400 text-sm cursor-pointer"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-purple-300 hover:text-yellow-400 text-sm cursor-pointer"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-purple-300 hover:text-yellow-400 text-sm cursor-pointer"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Dashboard;
