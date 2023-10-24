import "../assets/css/profile.css";
import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';

const Profile = () => {
    const { userId } = useAuth();

    const [user, setUser] = useState(null);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        bio: '',
    });

    const [passwordFormData, setPasswordFormData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
    });

    useEffect(() => {
        fetchUserData();
    }, [userId]);

    const fetchUserData = () => {
        axios.get(`http://localhost:5000/api/users/findUser/${userId}`)
            .then((response) => {
                setUser(response.data);
            })
            .catch((error) => {
                console.error('Error fetching user data:', error);
            });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handlePasswordChange = (e) => {
        const { name, value } = e.target;
        setPasswordFormData({
            ...passwordFormData,
            [name]: value,
        });
    };

    const handleUpdateProfile = () => {
        const nonEmptyFields = {};
        for (const key in formData) {
            if (formData[key].trim() !== '') {
                nonEmptyFields[key] = formData[key];
            }
        }

        if (Object.keys(nonEmptyFields).length === 0) {
            return; 
        }

        axios.put(`http://localhost:5000/api/users/update/${userId}`, nonEmptyFields)
            .then((response) => {
                console.log('Profile updated successfully:', response.data);
                fetchUserData();
            })
            .catch((error) => {
                console.error('Error updating profile:', error);
            });
    };

    const handleUpdatePassword = () => {
      if (passwordFormData.newPassword === passwordFormData.confirmPassword) {
          axios.put(`http://localhost:5000/api/users/updatePassword/${userId}`, {
              password: "12345"
          })
              .then((response) => {
                  console.log('Password updated successfully:', response.data);
              })
              .catch((error) => {
                  console.error('Error updating password:', error);
              });
      } else {
          console.error('New password and confirmation password do not match.');
      }
  };
    return (
        <div className="profile-container">
            {user ? (
                <div className="profile--container">
                    <img src={user.profileImage ? user.profileImage : 'https://www.pngfind.com/pngs/m/676-6764065_default-profile-picture-transparent-hd-png-download.png' } alt="User Profile" className='profilePic'/>
                    <div className="profile--container-content">
                    <h1>{user.firstName} {user.lastName}</h1>
                    <p>Email: {user.email}</p>
                    <p>Department: {user.department}</p>
                    <p>Course: {user.course}</p>
                    <p>Gender: {user.gender}</p>
                    <p>Bio: {user.bio}</p>
                    </div>
                </div>
            ) : (
                <p>Loading user profile...</p>
            )}

            <form className="profile-form">
                <h4>Update Personal Information</h4>
                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                />
                <textarea
                    type="text"
                    name="bio"
                    placeholder="Bio"
                    value={formData.bio}
                    onChange={handleInputChange}
                />
                <button type="button" onClick={handleUpdateProfile}>Update Profile</button>
            </form>

        </div>
    );
}

export default Profile;
