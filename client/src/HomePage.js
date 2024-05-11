import { Link } from "react-router-dom";


function Home() {
    return (
        <div class="hero-image">
            <div class="hero-text">
                <h1>Created by Group 1 / Section-2</h1>
                <p>Team Member: Mohit Kataria & Narinder Kaur</p>
                <button> 
                    <Link class="hero-link" to="/addEmployee">Let's Start</Link>
                </button>
            </div>
        </div>
    )
}

export default Home;