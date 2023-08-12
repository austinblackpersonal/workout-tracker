import '../styles/Home.css'
import { Typography } from '@mui/material';
import Navbar from "./partials/Navbar";

export default function Home() {

    return (
        <div>
            <Navbar/>
            <div className="Home">
                <Typography variant='h1'>Get the Body of your Dreams&trade;</Typography>
                <Typography variant='h6'>Tired of working out all the time but not making progress?! Here you can write down your workouts, that way, you know how much to lift next time! Can't do that anywhere else...</Typography>
            </div>

        </div>
    )
};