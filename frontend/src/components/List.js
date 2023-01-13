import React from 'react';
import { NavLink } from 'react-router-dom';
import './List.css';

const List = () => {

    // const {user, logOut} = UserAuth();

    // const handleSignOut = async () => {
    //     try {
    //         await logOut()
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }/

    const handleSignOut = () => { }



    return (
        <>
            <header>
                <div className='container container-flex'>
                    <nav>
                        <div className='list'>
                            <NavLink exact to="/achievements" className="listItem" activeClassName="active">Home</NavLink>
                            <NavLink exact to="/About" className="listItem" activeClassName="active">About</NavLink>
                            <NavLink to="/edit" className="listItem" activeClassName="active">Edit Profile</NavLink>
                            <NavLink to="/Form" className="listItem" activeClassName="active">Add Achievements</NavLink>
                            <NavLink to="/achievements" className="listItem" activeClassName="active" onClick={handleSignOut}>Logout</NavLink>

                        </div>
                    </nav>

                </div>

            </header>
        </>
    )

}
export default List;