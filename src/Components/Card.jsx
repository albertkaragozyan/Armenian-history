import React, { useState } from "react";
import history from "../data/history.json";
import emblem from "../emblem.png";

export default function Card() {
    const [year, setYear] = useState("");
    const [results, setResults] = useState([]);
    const [isSearched, setIsSearched] = useState(false);
    function normalizeText(text) {
    return text
        .normalize("NFC")
        .replace(/[․։·]/g, ".")
        .toLowerCase()
        .trim();
}
    function searchYear() {
        const cleanYear = year.trim();
        setYear(cleanYear);
        const found = history.filter((item) => normalizeText(item.year) === cleanYear);
        setResults(found);
        setIsSearched(true);
    }

    return (
        <div className="big-parent w-[100%] flex flex-col items-center gap-[30px] mt-[40px]">
            <div className="header-parent text-white flex justify-center items-center gap-[20px]">
                <img className="emblem w-[50px] md:w-[70px]" src={emblem} alt="Նկար" />
                <h1 className="armenian text-[38px] sm:text-[45px] md:text-5xl">ՀԱՅՈՑ ՊԱՏՄՈՒԹՅՈՒՆ</h1>
            </div>
            <div className="flex justify-center items-center">
                {/* <!-- From Uiverse.io by Lakshay-art --> */}
                <div id="poda">
                    <div className="glow"></div>
                    <div className="darkBorderBg"></div>
                    <div className="darkBorderBg"></div>
                    <div className="darkBorderBg"></div>

                    <div className="white"></div>

                    <div className="border"></div>

                    <div id="main">
                        <input placeholder="Գրեք տարեթիվը" type="text" name="text" value={year} onChange={(e) => setYear(e.target.value)} className="text-white placeholder:text-white rounded-[30px] px-[15px] py-[30px] w-[700px] input" />
                        <div id="input-mask"></div>
                        <div id="pink-mask"></div>
                        <div className="filterBorder">Որոնել</div>
                        <div className="text-white" onClick={searchYear} id="filter-icon">
                            Որոնել
                            <svg
                                preserveAspectRatio="none"
                                height="27"
                                width="27"
                                viewBox="4.8 4.56 14.832 15.408"
                                fill="none"
                            >
                                <path
                                    d="M8.16 6.65002H15.83C16.47 6.65002 16.99 7.17002 16.99 7.81002V9.09002C16.99 9.56002 16.7 10.14 16.41 10.43L13.91 12.64C13.56 12.93 13.33 13.51 13.33 13.98V16.48C13.33 16.83 13.1 17.29 12.81 17.47L12 17.98C11.24 18.45 10.2 17.92 10.2 16.99V13.91C10.2 13.5 9.97 12.98 9.73 12.69L7.52 10.36C7.23 10.08 7 9.55002 7 9.20002V7.87002C7 7.17002 7.52 6.65002 8.16 6.65002Z"
                                    stroke="#d6d6e6"
                                    strokeWidth="1"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></path>
                            </svg>
                        </div>
                        <div id="search-icon">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                height="24"
                                fill="none"
                                className="feather feather-search block"
                            >
                                <circle stroke="url(#search)" r="8" cy="11" cx="11"></circle>
                                <line
                                    stroke="url(#searchl)"
                                    y2="16.65"
                                    y1="22"
                                    x2="16.65"
                                    x1="22"
                                ></line>
                                <defs>
                                    <linearGradient gradientTransform="rotate(50)" id="search">
                                        <stop stopColor="#f8e7f8" offset="0%"></stop>
                                        <stop stopColor="#b6a9b7" offset="50%"></stop>
                                    </linearGradient>
                                    <linearGradient id="searchl">
                                        <stop stopColor="#b6a9b7" offset="0%"></stop>
                                        <stop stopColor="#837484" offset="50%"></stop>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>

                {/* ########################################################################### */}
                {/* <input type="text" placeholder="Գրիր տարեթիվը" value={year} onChange={(e) => setYear(e.target.value)} className="text-white placeholder:text-white rounded-[30px] px-[15px] py-[30px] w-[700px] inp" /> */}
                {/* <button onClick={searchYear} className="btn-grad text-white px-[20px] py-[5px] rounded-[20px] h-[70px] ml-[-115px]">Որոնել</button> */}
            </div>
            <div className="card-parent flex-wrap justify-center">
                {results.length > 0 ? (
                    results.map((item, index) => (
                        <div key={index} className="card">
                            <h2>Տարին՝ {item.year}</h2>
                            <p>{item.event}</p>
                            <p>Կարևոր մարդիկ՝ {item.people.join(", ")}</p>
                            <p>Կարևոր վայրերը՝ {item.place}</p>
                            <p>Այլ փաստեր՝ {item.facts?.length ? item.facts.join(", ") : "չկան"}</p>
                        </div>
                    ))
                    ) : isSearched ? (
                        <p className="text-white">Արդյունք չի գտնվել</p>
                    ) : null}
            </div>
        </div>
    );
}
