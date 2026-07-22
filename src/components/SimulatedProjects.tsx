"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Shield, Cpu, Activity, Play, CheckCircle, Navigation, MapPin } from "lucide-react";

// ==========================================
// 1. ACNESOL SKINCARE AI TERMINAL SIMULATOR
// ==========================================
export function AcneSolMock() {
    const [phase, setPhase] = useState(0);
    const [logs, setLogs] = useState<string[]>([]);
    
    const messages = [
        "[SYS] Booting MobileNetV2 CNN Engine...",
        "[SYS] CNN Weights loaded successfully.",
        "[SYS] LangGraph RAG Agent online.",
        "[IMG] face_photo_raw.jpg uploaded by client.",
        "[CNN] Analyzing epidermal layers for lesions...",
        "[CNN] Classification: Acne Vulgaris (Confidence: 94.6%)",
        "[AGENT] Initiating LangGraph RAG Retrieval...",
        "[RAG] Querying vector DB for acne treatment protocols...",
        "[RAG] Grounding retrieved clinical data...",
        "[AGENT] Personalizing treatment recommendation...",
        "[RECOMMENDATION] 1. Salicylic cleanser (2%)\n2. Oil-free hydration\n3. Daily SPF 50",
        "[SYS] Treatment plan saved. Session archived."
    ];

    useEffect(() => {
        setLogs([messages[0]]);
        setPhase(0);
        
        const logTimers: NodeJS.Timeout[] = [];
        
        // Step through terminal messages
        for (let i = 1; i < messages.length; i++) {
            const timer = setTimeout(() => {
                setLogs(prev => [...prev, messages[i]]);
                
                // Adjust phases based on message index
                if (i === 3) setPhase(1); // scanning face
                if (i === 5) setPhase(2); // classification output
                if (i === 7) setPhase(3); // RAG agent searching
                if (i === 10) setPhase(4); // Recommendation display
            }, i * 1500);
            logTimers.push(timer);
        }

        // Reset loop after completion
        const resetTimer = setTimeout(() => {
            setLogs([messages[0]]);
            setPhase(0);
        }, messages.length * 1500 + 4000);
        logTimers.push(resetTimer);

        return () => {
            logTimers.forEach(clearTimeout);
        };
    }, [phase === 0]); // trigger on reset

    return (
        <div className="w-full h-full bg-[#0d0e12] font-mono text-[11px] md:text-[12px] text-[#00ffcc] p-4 flex flex-col justify-between select-none relative overflow-hidden">
            {/* HUD Status Header */}
            <div className="flex justify-between border-b border-[#00ffcc]/20 pb-2 mb-2">
                <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                    <span className="text-white font-bold tracking-wider">ACNESOL CORE v1.2</span>
                </div>
                <div className="flex items-center gap-4 text-white/60">
                    <span>GPU TEMP: 48°C</span>
                    <span>CONF: 94.6%</span>
                </div>
            </div>

            {/* Main Screen Content Split */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-3 min-h-0">
                {/* Left Side: Diagnostics Visualizer */}
                <div className="border border-[#00ffcc]/30 bg-[#12141c] rounded-lg p-2 flex flex-col justify-center items-center relative overflow-hidden">
                    {phase === 0 && (
                        <div className="text-center text-white/50 flex flex-col items-center gap-2">
                            <Cpu className="w-8 h-8 animate-spin text-[#00ffcc]" />
                            <span>Initializing neural nets...</span>
                        </div>
                    )}

                    {phase === 1 && (
                        <div className="w-full h-full relative flex items-center justify-center">
                            {/* Scanning face wireframe */}
                            <div className="w-32 h-32 md:w-36 md:h-36 border-2 border-dashed border-[#00ffcc] rounded-full flex items-center justify-center relative overflow-hidden animate-pulse">
                                <div className="absolute inset-0 bg-[#00ffcc]/5" />
                                <div className="w-6 h-6 border-b-2 border-r-2 border-[#00ffcc]" />
                            </div>
                            <motion.div 
                                className="absolute w-full h-[2px] bg-[#00ffcc] shadow-[0_0_10px_#00ffcc]"
                                animate={{ top: ["10%", "90%", "10%"] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            />
                            <span className="absolute bottom-2 text-white font-semibold animate-pulse">SCANNING EPIDERMIS...</span>
                        </div>
                    )}

                    {phase === 2 && (
                        <div className="w-full text-center flex flex-col items-center gap-2 p-2">
                            <Activity className="w-10 h-10 text-red-500 animate-bounce" />
                            <div className="text-[13px] font-bold text-white uppercase">Acne Vulgaris Detected</div>
                            <div className="w-full bg-[#222] h-2 rounded-full overflow-hidden border border-[#00ffcc]/20">
                                <motion.div 
                                    className="bg-red-500 h-full"
                                    initial={{ width: 0 }}
                                    animate={{ width: "94.6%" }}
                                    transition={{ duration: 1 }}
                                />
                            </div>
                            <span className="text-[10px] text-white/50">CONFIDENCE INDEX: 94.6%</span>
                        </div>
                    )}

                    {phase >= 3 && (
                        <div className="w-full h-full flex flex-col justify-around items-center p-2 text-center text-white">
                            <Shield className="w-10 h-10 text-green-400 animate-pulse" />
                            <div>
                                <span className="text-green-400 font-bold block">RAG SECURE GROUNDING</span>
                                <span className="text-[10px] text-white/60">Cross-referenced with 200+ dermatology guidelines</span>
                            </div>
                            <div className="text-[10px] border border-green-400/20 bg-green-400/5 px-2 py-1 rounded text-green-300">
                                Zero-hallucination guardrails active
                            </div>
                        </div>
                    )}
                </div>

                {/* Right Side: Log terminal output */}
                <div className="border border-[#00ffcc]/30 bg-black rounded-lg p-2 overflow-y-auto flex flex-col justify-end gap-1 font-mono text-[9px] md:text-[10px] text-[#00ffcc]/80 scrollbar-none">
                    <div className="flex-1 overflow-y-auto flex flex-col justify-end">
                        {logs.map((log, index) => (
                            <div 
                                key={index} 
                                className={log.startsWith("[RECOMMENDATION]") ? "text-yellow-300 border-l border-yellow-300 pl-1.5 my-1 whitespace-pre-line" : ""}
                            >
                                {log}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CRT status bar */}
            <div className="mt-2 border-t border-[#00ffcc]/20 pt-2 flex justify-between items-center text-[10px] text-white/50">
                <span>RAG ground: SUCCESS</span>
                <span className="animate-pulse">● LIVE RUNNING</span>
            </div>
        </div>
    );
}

// ==========================================
// 2. AI STUDY COACH INTERACTIVE MAP/PATHWAY
// ==========================================
export function StudyCoachMock() {
    const [messages, setMessages] = useState<Array<{ sender: "user" | "bot"; text: string }>>([]);
    const [step, setStep] = useState(0);

    const dialog = [
        { sender: "user", text: "Create an adaptive path to master Linear Algebra." },
        { sender: "bot", text: "Linear Algebra Syllabus loaded! Generating personalized skill tree..." },
        { sender: "bot", text: "Core path structured: 1. Vector Spaces -> 2. Matrices -> 3. Eigenvalues." },
        { sender: "user", text: "What's the relationship between determinants and invertibility?" },
        { sender: "bot", text: "If det(A) ≠ 0, the matrix is invertible. Let's do a practice quiz node to test this!" }
    ];

    useEffect(() => {
        setMessages([dialog[0] as any]);
        setStep(0);

        const timers: NodeJS.Timeout[] = [];
        
        for (let i = 1; i < dialog.length; i++) {
            const t = setTimeout(() => {
                setMessages(prev => [...prev, dialog[i] as any]);
                setStep(i);
            }, i * 2500);
            timers.push(t);
        }

        const reset = setTimeout(() => {
            setMessages([dialog[0] as any]);
            setStep(0);
        }, dialog.length * 2500 + 4000);
        timers.push(reset);

        return () => timers.forEach(clearTimeout);
    }, [step === 0]);

    return (
        <div className="w-full h-full bg-[#0a0a0f] text-[#a5b4fc] p-4 flex flex-col justify-between font-chakra select-none">
            {/* Header */}
            <div className="flex justify-between items-center border-b border-indigo-500/20 pb-2 mb-2 text-[10px] uppercase font-bold tracking-wider text-indigo-300">
                <div className="flex items-center gap-2">
                    <Activity size={12} className="text-indigo-400 animate-pulse" />
                    <span>AI Study Coach UI v2</span>
                </div>
                <span>Curriculum Engine</span>
            </div>

            {/* Chat & Progress Visualizer split */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-3 min-h-0">
                {/* Chat window */}
                <div className="border border-indigo-500/20 bg-black/40 rounded-lg p-2 flex flex-col gap-2 overflow-y-auto scrollbar-none">
                    <div className="flex-1 flex flex-col justify-end gap-2 text-[10px]">
                        {messages.map((m, idx) => (
                            <div 
                                key={idx} 
                                className={`flex ${m.sender === "user" ? "justify-end" : "justify-start"}`}
                            >
                                <div 
                                    className={`max-w-[85%] rounded px-2.5 py-1.5 ${
                                        m.sender === "user" 
                                            ? "bg-indigo-600 text-white" 
                                            : "bg-[#181824] text-indigo-200 border border-indigo-500/10"
                                    }`}
                                >
                                    {m.text}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Adaptive Pathway Visualizer */}
                <div className="border border-indigo-500/20 bg-[#10101a] rounded-lg p-3 flex flex-col justify-center items-center relative overflow-hidden">
                    <span className="absolute top-2 left-2 text-[8px] text-indigo-400 font-bold uppercase">ADAPTIVE SKILL MAP</span>
                    
                    {/* Node Pathway Graph */}
                    <div className="flex flex-col gap-4 items-center w-full z-10">
                        {/* Node 1 */}
                        <div className="flex items-center gap-2 w-full max-w-[150px] bg-indigo-950/40 border border-indigo-500/30 p-1.5 rounded relative">
                            <CheckCircle size={14} className="text-green-400 shrink-0" />
                            <div className="text-[10px] text-white font-bold leading-none">Vector Spaces</div>
                            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-indigo-500 text-[10px]">↓</span>
                        </div>

                        {/* Node 2 */}
                        <div className={`flex items-center gap-2 w-full max-w-[150px] p-1.5 rounded relative mt-2 border transition-all duration-300 ${
                            step >= 2 
                                ? "bg-indigo-900/60 border-indigo-400 text-white shadow-[0_0_10px_rgba(165,180,252,0.2)] animate-pulse" 
                                : "bg-black/30 border-white/5 text-white/30"
                        }`}>
                            <Activity size={14} className="shrink-0 text-indigo-400 animate-spin" />
                            <div className="text-[10px] font-bold leading-none">Determinants</div>
                            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-white/5 text-[10px]">↓</span>
                        </div>

                        {/* Node 3 */}
                        <div className={`flex items-center gap-2 w-full max-w-[150px] p-1.5 rounded mt-2 border transition-all duration-300 ${
                            step >= 4 
                                ? "bg-emerald-950/40 border-emerald-500/40 text-emerald-300" 
                                : "bg-black/30 border-white/5 text-white/30"
                        }`}>
                            <CheckCircle size={14} className="shrink-0" />
                            <div className="text-[10px] font-bold leading-none">Eigenvectors</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom status bar */}
            <div className="mt-2 border-t border-indigo-500/20 pt-2 flex justify-between items-center text-[9px] text-indigo-400/60">
                <span>QUIZ MODE: ACTIVE</span>
                <span>COMPLETION: {step >= 4 ? "75%" : step >= 2 ? "40%" : "20%"}</span>
            </div>
        </div>
    );
}

// ==========================================
// 3. CAMPUSRIDE BOOKING ENGINE MAP SIMULATOR
// ==========================================
export function CampusRideMock() {
    const [status, setStatus] = useState("idle");
    const [log, setLog] = useState<string[]>([]);
    
    // Simulate coordinates of driver (red dot) moving to passenger (green dot)
    // Driver starts at (20, 20) and goes to passenger at (80, 70), then both go to (140, 40)
    const [driverPos, setDriverPos] = useState({ x: 30, y: 30 });
    
    useEffect(() => {
        setLog(["[SYS] RoutingService Initialized.", "[SYS] Database connected to MongoDB Atlas."]);
        setStatus("matching");
        setDriverPos({ x: 30, y: 30 });

        const timers: NodeJS.Timeout[] = [];

        // Step 1: Match Driver (2s)
        timers.push(setTimeout(() => {
            setLog(prev => [...prev, "[DISPATCH] Matching passenger 'Vani' with closest driver...", "[DISPATCH] Driver 'Alex' matched (1.5 km away)."]);
            setStatus("pickup");
        }, 2000));

        // Step 2: Driver moves to pickup (animate coordinate) (2s to 5s)
        let frame = 0;
        const animatePickup = setInterval(() => {
            setDriverPos(prev => {
                const targetX = 90;
                const targetY = 90;
                const newX = prev.x + (targetX - prev.x) * 0.15;
                const newY = prev.y + (targetY - prev.y) * 0.15;
                return { x: newX, y: newY };
            });
        }, 100);

        timers.push(setTimeout(() => {
            clearInterval(animatePickup);
            setDriverPos({ x: 90, y: 90 });
            setLog(prev => [...prev, "[RIDE] Passenger picked up.", "[RIDE] En route to Destination 'Rishihood Campus'..."]);
            setStatus("transit");
        }, 5000));

        // Step 3: Transit driver to destination (5s to 8s)
        const animateTransit = setInterval(() => {
            setDriverPos(prev => {
                const targetX = 170;
                const targetY = 50;
                const newX = prev.x + (targetX - prev.x) * 0.15;
                const newY = prev.y + (targetY - prev.y) * 0.15;
                return { x: newX, y: newY };
            });
        }, 100);

        timers.push(setTimeout(() => {
            clearInterval(animateTransit);
            setDriverPos({ x: 170, y: 50 });
            setLog(prev => [...prev, "[RIDE] Destination reached.", "[DB] Transaction completed. Billing processed."]);
            setStatus("completed");
        }, 8500));

        // Reset
        timers.push(setTimeout(() => {
            setStatus("idle");
        }, 11500));

        return () => {
            timers.forEach(clearTimeout);
            clearInterval(animatePickup);
            clearInterval(animateTransit);
        };
    }, [status === "idle"]);

    return (
        <div className="w-full h-full bg-[#070b0e] text-[#38bdf8] p-4 flex flex-col justify-between font-mono select-none">
            {/* Header */}
            <div className="flex justify-between items-center border-b border-sky-500/20 pb-2 mb-2 text-[10px] uppercase font-bold text-sky-400">
                <div className="flex items-center gap-1.5">
                    <Navigation size={12} className="animate-spin text-sky-400" />
                    <span>CampusRide Engine</span>
                </div>
                <span>SOLID Core</span>
            </div>

            {/* Grid Map and Logs */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-3 min-h-0">
                {/* SVG Live Simulation Map */}
                <div className="border border-sky-500/20 bg-black/40 rounded-lg p-2 flex items-center justify-center relative overflow-hidden aspect-video md:aspect-auto">
                    <span className="absolute top-1 left-1.5 text-[8px] text-sky-400/50 uppercase font-bold">LIVE MAP SIM</span>
                    
                    {/* SVG Map Grid Layout */}
                    <svg className="w-full h-full max-h-[160px]" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Map Grid Gridlines */}
                        <defs>
                            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(56, 189, 248, 0.08)" strokeWidth="0.5"/>
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />

                        {/* Streets */}
                        <path d="M10,30 L190,30" stroke="rgba(56, 189, 248, 0.15)" strokeWidth="4" />
                        <path d="M10,90 L190,90" stroke="rgba(56, 189, 248, 0.15)" strokeWidth="4" />
                        <path d="M90,10 L90,110" stroke="rgba(56, 189, 248, 0.15)" strokeWidth="4" />
                        <path d="M170,10 L170,110" stroke="rgba(56, 189, 248, 0.15)" strokeWidth="4" />

                        {/* Booking Location Pins */}
                        {/* Pickup pin at (90, 90) */}
                        <circle cx="90" cy="90" r="4" fill="#10b981" className="animate-ping" />
                        <circle cx="90" cy="90" r="2.5" fill="#10b981" />
                        <text x="96" y="93" fill="#10b981" fontSize="6" fontWeight="bold">PICKUP (VANI)</text>

                        {/* Destination pin at (170, 50) */}
                        <circle cx="170" cy="50" r="4" fill="#3b82f6" />
                        <circle cx="170" cy="50" r="2" fill="white" />
                        <text x="145" y="45" fill="#3b82f6" fontSize="6" fontWeight="bold">DESTINATION</text>

                        {/* Driver Pin */}
                        <g transform={`translate(${driverPos.x}, ${driverPos.y})`}>
                            <circle cx="0" cy="0" r="5" fill="#ef4444" className="shadow-[0_0_10px_#ef4444]" />
                            <circle cx="0" cy="0" r="2" fill="white" />
                            <text x="6" y="-3" fill="#ef4444" fontSize="5" fontWeight="bold">DRIVER</text>
                        </g>
                    </svg>
                </div>

                {/* DB Logs Console */}
                <div className="border border-sky-500/20 bg-black rounded-lg p-2 overflow-y-auto flex flex-col justify-end gap-1 font-mono text-[9px] md:text-[10px] text-sky-300/80 scrollbar-none">
                    <div className="flex-1 overflow-y-auto flex flex-col justify-end">
                        {log.map((entry, index) => (
                            <div key={index} className={entry.startsWith("[DB]") ? "text-emerald-400" : ""}>
                                {entry}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Status bar */}
            <div className="mt-2 border-t border-sky-500/20 pt-2 flex justify-between items-center text-[9px] text-sky-400/50">
                <span>RIDE STATUS: <span className="font-bold text-white uppercase">{status}</span></span>
                <span>DRIVER DIST: {status === "pickup" ? "0.6 km" : status === "transit" ? "1.2 km" : "0 km"}</span>
            </div>
        </div>
    );
}

// ==========================================
// 4. AIR QUALITY TABLEAU DASHBOARD SIMULATOR
// ==========================================
export function AirQualityDashboardMock() {
    const [city, setCity] = useState("Delhi");
    const [aqi, setAqi] = useState(185);
    
    const cities = [
        { name: "Delhi", aqi: 245, pm25: 185, pm10: 310, status: "Very Unhealthy", color: "text-red-500", bg: "bg-red-500" },
        { name: "Pune", aqi: 75, pm25: 22, pm10: 55, status: "Moderate", color: "text-yellow-400", bg: "bg-yellow-400" },
        { name: "Sonipat", aqi: 154, pm25: 98, pm10: 172, status: "Unhealthy", color: "text-orange-500", bg: "bg-orange-500" }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCity(prev => {
                const nextIndex = (cities.findIndex(c => c.name === prev) + 1) % cities.length;
                return cities[nextIndex].name;
            });
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    const activeCity = cities.find(c => c.name === city) || cities[0];

    return (
        <div className="w-full h-full bg-[#111] text-white p-4 flex flex-col justify-between font-sans select-none">
            {/* Tableau Title Bar */}
            <div className="flex justify-between items-center border-b border-white/10 pb-2 mb-2 text-[10px]">
                <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 bg-orange-500 rounded" />
                    <span className="font-bold tracking-wider text-white/80">TABLEAU CLOUD PROJECT</span>
                </div>
                <div className="text-white/40">Air Quality Analytics</div>
            </div>

            {/* Dashboard Content */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-3 min-h-0">
                {/* Left Side: Dial Gauge & Active City Status */}
                <div className="border border-white/5 bg-black/40 rounded-lg p-3 flex flex-col justify-center items-center text-center">
                    <span className="text-[10px] text-white/50 uppercase tracking-widest mb-1.5">Location Under Test</span>
                    <div className="text-[18px] font-black uppercase tracking-wider text-white">{activeCity.name}</div>
                    
                    {/* AQI Gauge */}
                    <div className="relative w-20 h-20 md:w-24 md:h-24 my-2 flex items-center justify-center">
                        <svg className="w-full h-full transform -rotate-90">
                            <circle cx="50%" cy="50%" r="40%" stroke="#222" strokeWidth="6" fill="transparent" />
                            <motion.circle 
                                cx="50%" cy="50%" r="40%" 
                                stroke={activeCity.name === "Pune" ? "#eab308" : activeCity.name === "Sonipat" ? "#f97316" : "#ef4444"} 
                                strokeWidth="6" 
                                fill="transparent" 
                                strokeDasharray="251"
                                initial={{ strokeDashoffset: 251 }}
                                animate={{ strokeDashoffset: 251 - (251 * (activeCity.aqi / 300)) }}
                                transition={{ duration: 1.5 }}
                            />
                        </svg>
                        <div className="absolute flex flex-col items-center">
                            <span className="text-[18px] font-black leading-none">{activeCity.aqi}</span>
                            <span className="text-[7px] text-white/50 font-bold uppercase tracking-wider">AQI</span>
                        </div>
                    </div>

                    <span className={`text-[10px] font-black uppercase tracking-wider ${activeCity.color}`}>{activeCity.status}</span>
                </div>

                {/* Right Side: Comparative Metrics Bar Chart */}
                <div className="border border-white/5 bg-black/40 rounded-lg p-3 flex flex-col justify-between">
                    <span className="text-[9px] text-white/50 uppercase tracking-widest mb-2 block font-bold">AQI Comparison Graph</span>
                    
                    {/* Tiny Bar Chart */}
                    <div className="flex-1 flex flex-col justify-around gap-2 my-1">
                        {cities.map(c => (
                            <div key={c.name} className="flex items-center gap-2">
                                <span className="w-12 text-[9px] text-white/70 font-semibold">{c.name}</span>
                                <div className="flex-1 bg-[#222] h-3.5 rounded overflow-hidden relative">
                                    <motion.div 
                                        className={`h-full ${c.bg} opacity-80`}
                                        initial={{ width: 0 }}
                                        animate={{ width: `${(c.aqi / 300) * 100}%` }}
                                        transition={{ duration: 1.2 }}
                                    />
                                    <span className="absolute right-1.5 top-0 text-[8px] font-black text-white leading-[14px]">{c.aqi}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Mini Stats pills */}
                    <div className="grid grid-cols-2 gap-1.5 mt-2 border-t border-white/5 pt-2 text-[8px] text-white/60">
                        <div>PM2.5: <span className="text-white font-bold">{activeCity.pm25} µg/m³</span></div>
                        <div>PM10: <span className="text-white font-bold">{activeCity.pm10} µg/m³</span></div>
                    </div>
                </div>
            </div>

            {/* Bottom Status bar */}
            <div className="mt-2 border-t border-white/10 pt-2 flex justify-between items-center text-[8px] text-white/40">
                <span>DVA Dashboard: ACTIVE</span>
                <span>INTERVAL: 4s CYCLE</span>
            </div>
        </div>
    );
}
