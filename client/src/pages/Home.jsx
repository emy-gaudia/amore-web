import "../assets/css/home.css";
import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import axios from "axios";
import bg from "../assets/svg/bg.svg";
import { useAuth } from "../context/AuthContext";

function Home() {
  const { userId } = useAuth();
  const [people, setPeople] = useState([]);
  const [userGender, setUserGender] = useState(""); 
  const [selectDepartment, setSelectDepartment] = useState('');
  const [selectCourse, setSelectCourse] = useState('');
  const [availableCourses, setAvailableCourses] = useState([]);
  const [matchedUserIds, setMatchedUserIds] = useState([]);
  const [loading, setLoading] = useState(true);

  const apiBaseUrl = "http://localhost:5000/api/users";
  const viewMatchesUrl = `${apiBaseUrl}/viewMatches/${userId}`;
  const findUserUrl = `${apiBaseUrl}/findUser/${userId}`;
  const findAllUrl = `${apiBaseUrl}/findAll/${userId}`;
  const matchUrl = `${apiBaseUrl}/match/${userId}`;

  useEffect(() => {
    axios.get(viewMatchesUrl)
      .then((response) => {
        const matchedIds = response.data.map((match) => match.matched_user_id);
        setMatchedUserIds(matchedIds);
      })
      .catch((error) => {
        console.error("Error fetching matched user IDs:", error);
      });
  }, [userId]);

  useEffect(() => {
    if (selectDepartment === 'CITE') {
      setAvailableCourses(['BSIT']);
    } else if (selectDepartment === 'CEA') {
      setAvailableCourses(['BSCPE', 'BSCE', 'BSEE']);
    } else {
      setAvailableCourses([]);
    }
  }, [selectDepartment]);

  useEffect(() => {
    axios.get(findUserUrl)
      .then((response) => {
        setUserGender(response.data.gender);

        axios.get(findAllUrl)
          .then((cardsResponse) => {
            const filteredCards = cardsResponse.data.filter((person) => {
              if (userGender === "male") {
                return person.gender === "female";
              } else if (userGender === "female") {
                return person.gender === "male";
              }
              return true;
            });

            const filteredCardsByFilters = filteredCards.filter((person) => {
              if (selectDepartment && person.department !== selectDepartment) {
                return false;
              }
              if (selectCourse && person.course !== selectCourse) {
                return false;
              }
              return !matchedUserIds.includes(person.id);
            });

            setPeople(filteredCardsByFilters);
            setLoading(false); 
          })
          .catch((error) => {
            console.error("Error fetching cards:", error);
            setLoading(false); 
          });
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        setLoading(false);
      });
  }, [userId, userGender, selectDepartment, selectCourse, matchedUserIds]);

  const handleSwipeRight = (direction, person) => {
    if (direction === "right") {
      axios.post(matchUrl, { matchedUserId: person.id })
        .then(() => {
          setMatchedUserIds([...matchedUserIds, person.id]);
        })
        .catch((error) => {
          console.error('Error matching with the user:', error);
        });
    }
  };

  return (
    <>
    <div className="home--swipe"> 
    <div>
        <label>
      <select
        value={selectDepartment}
        onChange={(e) => setSelectDepartment(e.target.value)} 
        className="filter--select"
      >
        <option value="">Filter by Department</option>
        <option value="CITE">CITE</option>
        <option value="CEA">CEA</option>
      </select>
        </label>
        <label>
      <select
        value={selectCourse}
        onChange={(e) => setSelectCourse(e.target.value)}
        className="filter--select"
      >
        <option value="">Filter by Course</option>
        {availableCourses.map((course) => (
          <option key={course} value={course}>
            {course}
          </option>
        ))}
      </select>
        </label>
      </div>
      <div className="swiper-container">
      <img src={bg} alt="bg" className="landing_bg" />
      <div className="card-container">
        {loading ? ( 
          <p className="alert-text">Loading...</p>
        ) : people.length === 0 ? ( 
          <p className="alert-text">No one to date.</p>
        ) : (
          people.map((person) => (
            <TinderCard
              key={person.id}
              className="swipe"
              onSwipe={(dir) => handleSwipeRight(dir, person)}
              preventSwipe={["up", "down"]}
            >
              <div
                className="card"
                style={{
                  backgroundImage: `url(${
                    person.profileImage
                      ? person.profileImage
                      : "https://www.pngfind.com/pngs/m/676-6764065_default-profile-picture-transparent-hd-png-download.png"
                  })`,
                }}
              >
                <h3>
                  {person.firstName} {person.lastName} | {person.department} {person.course}
                </h3>
                <p>{person.bio}</p>
              </div>
            </TinderCard>
          ))
        )}
      </div>
    </div>
     
    </div>
  </>
  );
}

export default Home;
