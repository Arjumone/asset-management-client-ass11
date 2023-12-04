
import { useState, useEffect } from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import Team from './Team';
import Event from './Event';

const MyTeam = () => {
    const axiosPublic = useAxiosPublic();
    const [teamMembers, setTeamMembers] = useState([]);
    const [upcomingEvents, setUpcomingEvents] = useState([]);

    useEffect(() => {
        const fetchUpcomingEvents = async () => {
                const response = await axiosPublic.get('/users');
                const upcomingEventsData = response.data.filter(event => {
                    const eventDate = new Date(event.dateOfBirth);
                    const currentMonth = new Date().getMonth();
                    return eventDate.getMonth() === currentMonth;
                });
                setUpcomingEvents(upcomingEventsData);
        };
        fetchUpcomingEvents();

        const fetchTeamMembers = async () => {
            try {
                const response = await axiosPublic.get('/users');
                setTeamMembers(response.data);
            } catch (error) {
                console.error('Error fetching team members', error);
            }
        };
        fetchTeamMembers();
    }, [axiosPublic]);

    return (
        <div>
            <div>
                <h2 className='my-3 text-3xl font-bold'>Upcoming Events</h2>
                <ul className="grid grid-cols-1 lg:grid-cols-10 gap-5">
                    {upcomingEvents.map(event => <Event key={event._id} event={event}></Event>)}
                </ul>
            </div>
            <div>
                <h2 className='my-3 text-3xl font-bold'>Team Member List</h2>
                <ul className="grid grid-cols-1 lg:grid-cols-10 gap-5">
                    {teamMembers.map(member => <Team key={member._id} member={member}></Team>)}
                </ul>
            </div>
        </div>
    );
};

export default MyTeam;
