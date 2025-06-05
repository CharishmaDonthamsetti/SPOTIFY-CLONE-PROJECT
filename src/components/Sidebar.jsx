import React from "react";
import { assets } from "../assets/assets";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const menuItems = [
    { label: "Home", icon: assets.home_icon, path: "/" },
    { label: "Search", icon: assets.search_icon, path: "/search" },
  ];

  return (
    <motion.div
      initial={{ x: -250, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 50 }}
      className="w-[25%] h-full hidden lg:flex flex-col bg-gradient-to-b from-[#BA55D3] to-[#0d0d0d] rounded-xl shadow-2xl relative overflow-hidden"
      style={{
        borderWidth: "2px",
        borderStyle: "solid",
        borderImageSlice: 1,
        borderImageSource:
          "linear-gradient(270deg,rgb(0, 0, 0), #000000,rgb(27, 24, 24))",
        animation: "borderShiftWB 4s linear infinite",
      }}
    >
      <div className="overflow-y-auto scrollbar-thin scrollbar-thumb-[#BA55D3]/60 scrollbar-track-transparent px-4 py-5 space-y-5">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold flex items-center gap-2"
        >
          <span>🎵</span> <span>D.S.M.CHARISHMA</span>
        </motion.div>

        {/* Navigation Items */}
        <div className="space-y-2">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              onClick={() => navigate(item.path)}
              className={`flex items-center gap-4 px-4 py-3 cursor-pointer rounded-lg
                          transition-all duration-300 ease-in-out group
                          ${
                            isActive(item.path)
                              ? "bg-white/10 border border-purple-400"
                              : "hover:bg-white/10"
                          }`}
            >
              <motion.img
                src={item.icon}
                alt={item.label}
                className="w-6"
                whileHover={{ scale: 1.2, rotate: [0, 10, -10, 0] }}
              />
              <p className="text-md font-medium">{item.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Filter Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-white/5 hover:bg-white/10 p-4 rounded-xl transition-all duration-300 shadow-md backdrop-blur-sm"
        >
          <h3 className="text-white font-semibold mb-3">Filter by Mood</h3>
          <div className="flex flex-wrap gap-2 text-sm">
            {["Chill", "Party", "Focus", "Workout"].map((filter) => (
              <motion.button
                key={filter}
                whileHover={{ scale: 1.1 }}
                className="px-3 py-1 bg-white/20 hover:bg-white/30 rounded-full transition-all duration-200 text-white"
              >
                {filter}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Library Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all shadow-md hover:shadow-lg"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <img src={assets.stack_icon} className="w-6" alt="Library" />
              <h3 className="font-semibold text-white">Your Library</h3>
            </div>
            <div className="flex gap-2">
              <img src={assets.arrow_icon} className="w-4 cursor-pointer" />
              <img src={assets.plus_icon} className="w-4 cursor-pointer" />
            </div>
          </div>
          <span className="text-sm text-gray-300">Recent</span>
        </motion.div>

        {/* Playlist */}
        <motion.div
          whileHover={{ y: -3 }}
          className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition shadow-md"
        >
          <h1 className="text-white font-semibold">Create your first playlist</h1>
          <p className="text-sm text-gray-300">Let’s get you started!</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-3 px-4 py-2 bg-white text-black text-sm rounded-full glow-button"
          >
            Create Playlist
          </motion.button>
        </motion.div>

        {/* Podcast */}
        <motion.div
          whileHover={{ y: -3 }}
          className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition shadow-md"
        >
          <h1 className="text-white font-semibold">Discover Podcasts</h1>
          <p className="text-sm text-gray-300">New episodes just for you!</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-3 px-4 py-2 bg-white text-black text-sm rounded-full glow-button"
          >
            Browse Podcasts
          </motion.button>
        </motion.div>
      </div>

      {/* Sparkle background */}
      <div className="absolute inset-0 pointer-events-none z-[-1]">
        <div className="w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1),transparent)] animate-pulse" />
      </div>

      {/* CSS Animation keyframes */}
      <style>{`
        @keyframes borderShiftWB {
          0% { border-image-source: linear-gradient(270deg,rgb(18, 17, 17), #000000,rgb(24, 18, 18)); }
          50% { border-image-source: linear-gradient(90deg,rgb(41, 32, 32), #000000,rgb(36, 30, 30)); }
          100% { border-image-source: linear-gradient(270deg, #ffffff, #000000, #ffffff); }
        }
        .glow-button {
          box-shadow: 0 0 8px rgba(255, 255, 255, 0.6), 0 0 12px rgba(186, 85, 211, 0.8);
          animation: pulseGlow 2s infinite ease-in-out;
        }
        @keyframes pulseGlow {
          0% { box-shadow: 0 0 8px rgba(255, 255, 255, 0.3), 0 0 10px rgba(186, 85, 211, 0.5); }
          50% { box-shadow: 0 0 14px rgba(255, 255, 255, 0.7), 0 0 20px rgba(186, 85, 211, 0.9); }
          100% { box-shadow: 0 0 8px rgba(255, 255, 255, 0.3), 0 0 10px rgba(186, 85, 211, 0.5); }
        }
      `}</style>
    </motion.div>
  );
};

export default Sidebar;
