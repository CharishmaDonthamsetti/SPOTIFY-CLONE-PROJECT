import React, { useState } from "react";
import Navbar from "./Navbar";
import { albumsData, songsData } from "../assets/assets";
import AlbumItem from "./Albumitem";
import SongItem from "./SongItem";
import { motion } from "framer-motion";

const DisplayHome = () => {
    const [selectedMood, setSelectedMood] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");

    const moods = ["All", "Chill", "Workout", "Focus", "Party"];

    const filteredAlbums = albumsData.filter(album =>
        (selectedMood === "All" || album.mood === selectedMood) &&
        album.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const filteredSongs = songsData.filter(song =>
        (selectedMood === "All" || song.mood === selectedMood) &&
        song.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <Navbar />
            <div className='mb-4 px-4'>
                <motion.h1
                    className='my-5 font-bold text-3xl'
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}>
                    🎶 WELCOME - Listen With Me...!
                </motion.h1>

                {/* Stylish Gradient Bar */}
                <div className="relative h-1 w-full rounded-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#E6E6FA] via-[#C8A2C8] to-[#9370DB] animate-pulse"></div>
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `repeating-linear-gradient(45deg, rgba(230, 230, 250, 0.15), rgba(230, 230, 250, 0.15) 4px, rgba(147, 112, 219, 0.15) 4px, rgba(147, 112, 219, 0.15) 8px)`,
                            backgroundSize: '16px 16px',
                            animation: 'moveStripes 2s linear infinite',
                        }}
                    ></div>
                    <style>{`
                        @keyframes moveStripes {
                          0% { background-position: 0 0; }
                          100% { background-position: 32px 0; }
                        }
                    `}</style>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap items-center gap-4 mt-6">
                    <div className="flex gap-2 flex-wrap">
                        {moods.map((mood) => (
                            <button
                                key={mood}
                                onClick={() => setSelectedMood(mood)}
                                className={`px-4 py-1 rounded-full text-sm font-semibold transition-all duration-200 ${selectedMood === mood ? "bg-purple-600 text-white" : "bg-purple-200 text-purple-700 hover:bg-purple-300"}`}
                            >
                                {mood}
                            </button>
                        ))}
                    </div>
                    <input
                        type="text"
                        placeholder="Search Albums or Songs..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="ml-auto px-4 py-1 border border-purple-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-purple-400"
                    />
                </div>

                <h1 className='my-5 font-bold text-2xl'>Featured Albums For You</h1>
                <motion.div className='flex overflow-auto space-x-4 pb-2' initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
                    {filteredAlbums.length > 0 ? (
                        filteredAlbums.map((item, index) => (
                            <motion.div key={index} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                                <AlbumItem name={item.name} desc={item.desc} id={item.id} image={item.image} />
                            </motion.div>
                        ))
                    ) : (
                        <div className="text-purple-400 text-center w-full font-medium pt-4">No albums found for this mood.</div>
                    )}
                </motion.div>
            </div>

            <div className='mb-4 px-4'>
                <h1 className='my-5 font-bold text-2xl'>Recent Plays</h1>
                <motion.div className='flex overflow-auto space-x-4 pb-2' initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
                    {filteredSongs.length > 0 ? (
                        filteredSongs.map((item, index) => (
                            <motion.div key={index} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                                <SongItem name={item.name} desc={item.desc} id={item.id} image={item.image} />
                            </motion.div>
                        ))
                    ) : (
                        <div className="text-purple-400 text-center w-full font-medium pt-4">No songs found for this mood.</div>
                    )}
                </motion.div>
            </div>
        </>
    );
};

export default DisplayHome;
