import gymdark from "../assets/svg/pill/dark/pill-gym.svg";
import gymlight from "../assets/svg/pill/light/pill-gym-light.svg";
import animaldark from "../assets/svg/pill/dark/pill-animals.svg";
import animallight from "../assets/svg/pill/light/pilll-animals-light.svg";
import filmdark from "../assets/svg/pill/dark/pill-films.svg";
import filmlight from "../assets/svg/pill/light/pill-films-light.svg";
import balldark from "../assets/svg/pill/dark/pill-football.svg";
import balllight from "../assets/svg/pill/light/pill-football-light.svg";
import naturedark from "../assets/svg/pill/dark/pill-nature.svg";
import naturelight from "../assets/svg/pill/light/pill-nature-light.svg";
import paintdark from "../assets/svg/pill/dark/pill-paint.svg";
import paintlight from "../assets/svg/pill/light/pill-paint-light.svg";
import writedark from "../assets/svg/pill/dark/pill-write.svg";
import writelight from "../assets/svg/pill/light/pill-write-light.svg";
import bookdark from "../assets/svg/pill/dark/pill-book.svg";
import booklight from "../assets/svg/pill/light/pill-book-light.svg";
import fashiondark from "../assets/svg/pill/dark/pill-fashion.svg";
import fashionlight from "../assets/svg/pill/light/pill-fashion-light.svg";
import archidark from "../assets/svg/pill/dark/pill-archi.svg";
import archilight from "../assets/svg/pill/light/pill-archi-light.svg";
import photodark from "../assets/svg/pill/dark/pill-photo.svg";
import photolight from "../assets/svg/pill/light/pill-photo-light.svg";
import languagedark from "../assets/svg/pill/dark/pill-language.svg";
import languagelight from "../assets/svg/pill/light/pill-language-light.svg";
import musicdark from "../assets/svg/pill/dark/pill-music.svg";
import musiclight from "../assets/svg/pill/light/pill-music-light.svg";
import gamedark from "../assets/svg/pill/dark/pill-game.svg";
import gamelight from "../assets/svg/pill/light/pill-game-light.svg";
import peopledark from "../assets/svg/pill/dark/pill-people.svg";
import peoplelight from "../assets/svg/pill/light/pill-people-light.svg";
import dancedark from "../assets/svg/pill/dark/pill-dance.svg";
import dancelight from "../assets/svg/pill/light/pill-dance-light.svg";
// ----------------------------------------------------------------------------------
import defaultgirl from "../assets/svg/avatar/avatar-default-girl.svg";
import engineer from "../assets/svg/avatar/avatar-engineer.svg";
import doctor from "../assets/svg/avatar/avatar-doctor.svg";
import lawyer from "../assets/svg/avatar/avatar-lawyer.svg";
import teacher from "../assets/svg/avatar/avatar-teacher.svg";
import chef from "../assets/svg/avatar/avatar-chef.svg";
// ----------------------------------------------------------------------------------
import create from "../assets/svg/user/create_btn.svg";
import home from "../assets/svg/user/home_btn.svg";
import discover from "../assets/svg/user/discover_btn.svg";
import user from "../assets/svg/user/user_btn.svg";
import message from "../assets/svg/user/message_btn.svg";
import logout from "../assets/svg/logout.svg";

export const pillData = [
  {
    txt: "Gym and Fitness",
    def: gymdark,
    hover: gymlight,
  },
  {
    txt: "Animals",
    def: animaldark,
    hover: animallight,
  },
  {
    txt: "Films",
    def: filmdark,
    hover: filmlight,
  },
  {
    txt: "Football",
    def: balldark,
    hover: balllight,
  },
  {
    txt: "Nature",
    def: naturedark,
    hover: naturelight,
  },
  {
    txt: "Painting",
    def: paintdark,
    hover: paintlight,
  },
  {
    txt: "Writing",
    def: writedark,
    hover: writelight,
  },
  {
    txt: "Book",
    def: bookdark,
    hover: booklight,
  },
  {
    txt: "Fashion",
    def: fashiondark,
    hover: fashionlight,
  },
  {
    txt: "Architecture",
    def: archidark,
    hover: archilight,
  },
  {
    txt: "Photography",
    def: photodark,
    hover: photolight,
  },
  {
    txt: "Language",
    def: languagedark,
    hover: languagelight,
  },
  {
    txt: "Music",
    def: musicdark,
    hover: musiclight,
  },
  {
    txt: "Gaming",
    def: gamedark,
    hover: gamelight,
  },
  {
    txt: "People",
    def: peopledark,
    hover: peoplelight,
  },
  {
    txt: "Dancing",
    def: dancedark,
    hover: dancelight,
  },
];

export const avatarData = [
  {
    src: defaultgirl,
    alt: "defaultgirl",
  },
  {
    src: engineer,
    alt: "engineer",
  },
  {
    src: doctor,
    alt: "doctor",
  },
  {
    src: lawyer,
    alt: "lawyer",
  },
  {
    src: teacher,
    alt: "teacher",
  },
  {
    src: chef,
    alt: "chef",
  },
];
export const navData = [
  {
    svg: discover,
    path: "/user/home",
    alt: "discover",
  },
  {
    svg: user,
    path: "/user/profile",
    alt: "profile",
  },
  {
    svg: create,
    path: "/user/match",
    alt: "match",
  },
];

export const genderData = [
  {
    value: "male",
    label: "Male",
  },
  {
    value: "female",
    label: "Female",
  },
];

export const deptData = [
  {
    value: "cite",
    label: "COLLEGE OF INFORMATION TECHNOLOGY EDUCATION",
  },
  {
    value: "cea",
    label: "COLLEGE OF ENGINEERING AND ARCHITECTURE",
  },
  {
    value: "cma",
    label: "COLLEGE OF MANAGEMENT AND ACCOUNTACY",
  },
  {
    value: "cahs",
    label: "COLLEGE OF ALLIED HEALTH SCIENCES",
  },
  {
    value: "cela",
    label: "COLLEGE OF EDUCATION AND LIBERAL ARTS",
  },
  {
    value: "ccje",
    label: "COLLEGE OF CRIMINAL JUSTICE EDUCATION",
  },
  {
    value: "law",
    label: "COLLEGE OF LAW",
  },
  {
    value: "SHS",
    label: "SENIOR HIGH SCHOOL",
  },
];
export const courseData = [
  {
    value: "information technology",
    label: "Bachelor of Science in Information Technology",
  },
  {
    value: "architecture",
    label: "Bachelor of Science in Architecture",
  },
  {
    value: "civil engineering",
    label: "Bachelor of Science in Civil Engineering",
  },
  {
    value: "electrical engineering",
    label: "Bachelor of Science in Electrical Engineering",
  },
  {
    value: "electronics engineering",
    label: "Bachelor of Science in Electronics Engineering",
  },
  {
    value: "computer engineering",
    label: "Bachelor of Science in Computer Engineering",
  },
  {
    value: "mechanical engineering",
    label: "Bachelor of Science in Mechanical Engineering",
  },
  {
    value: "communication",
    label: "Bachelor of Arts in Communication",
  },
  {
    value: "political science",
    label: "Bachelor of Arts in Political Science",
  },
  {
    value: "education",
    label: "Bachelor of Education",
  },
  {
    value: "secondary education",
    label: "Bachelor of Secondary Education ",
  },
  {
    value: "criminologyy",
    label: "Bachelor of Science in Criminology",
  },
  {
    value: "accountancy",
    label: "Bachelor of Science in Accountancy",
  },
  {
    value: "administration",
    label: "Bachelor of Science in Business Administration ",
  },
  {
    value: "hospitality",
    label: "Bachelor of Science in Hospitality Management",
  },
  {
    value: "tourism",
    label: "Bachelor of Science in Tourism Management",
  },
  {
    value: "nursing",
    label: "Bachelor of Science in Nursing",
  },
  {
    value: "laboratory science",
    label: "Bachelor in Medical Laboratory Science",
  },
  {
    value: "physical theraphy",
    label: "Bachelor of Science in Physical Therapy",
  },
  {
    value: "pharmacy",
    label: "Bachelor of Science in Pharmacy",
  },
  {
    value: "midwifery",
    label: "Bachelor of Science in Midwifery",
  },
];

export const majorData = [
  {
    value: "web",
    label: "Web Development",
  },
  {
    value: "programming",
    label: "Programming",
  },
  {
    value: "animation",
    label: "Animation",
  },
  {
    value: "graphic design",
    label: "Graphic Design",
  },
];
