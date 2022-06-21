import "./App.css";

function App() {
    return (
        <div id="body">
            <section className="site-wrapper">
                <nav>
                    <div className="profile">
                        <img src="" alt="" />
                        <h3>account name</h3>
                    </div>

                    <div className="separator"></div>

                    <ul>
                        <li>
                            <a href="#">Overview</a>
                        </li>
                    </ul>

                    <div className="separator"></div>

                    <ul>
                        <li>
                            <a href="#">Profile</a>
                        </li>
                        <li>
                            <a href="#">Logout</a>
                        </li>
                    </ul>
                </nav>

                <main>
                    <div className="top-matches">
                        <ul>
                            <li>
                                <div className="match-card">
                                    <div>
                                        Maritsa - Lokomotiv
                                    </div>
                                    <button>view</button>
                                </div>
                            </li>

                            <li>
                                <div className="match-card">
                                    <div>
                                        Maritsa - Lokomotiv
                                    </div>
                                    <button>view</button>
                                </div>
                            </li>

                            <li>
                                <div className="match-card">
                                    <div>
                                        Maritsa - Lokomotiv
                                    </div>
                                    <button>view</button>
                                </div>
                            </li>

                        </ul>
                    </div>

                    <div className="live-matches">
                        <h3>List of all matches today:</h3>

                        <div className="separator"></div>

                        <div>
                            <span>
                                Date:
                            </span>
                            <span>
                                Teams:
                            </span>
                            <span>
                                status:
                            </span>
                            <span>
                                {/*  */}
                            </span>
                        </div>

                        <ul>
                            <li>
                                <div>
                                    24.06
                                </div>
                                <div>
                                    Maritsa - Loko
                                </div>
                                <div>
                                    Playing                                 
                                </div>
                                <div>
                                    view more
                                </div>
                            </li>
                                                        <li>
                                <div>
                                    24.06
                                </div>
                                <div>
                                    Maritsa - Loko
                                </div>
                                <div>
                                    Playing                                 
                                </div>
                                <div>
                                    view more
                                </div>
                            </li>
                        </ul>
                    </div>
                </main>
            </section>
        </div>
    );
}

export default App;
