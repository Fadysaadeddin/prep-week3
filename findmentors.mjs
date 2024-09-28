import { modules, students, mentors, classes } from "./hyf.mjs";

/**
 * Tjebbe would like help to get a list of possible mentors for a module.
 * Fill in this function that finds all the mentors that can teach the given module.
 *
 * It should return an array of names. So something like:
 *  ['John', 'Mary']
 */
const possibleMentorsForModule = (moduleName) => {
const qualifiedMentors = mentors.filter(mentor => mentor.canTeach.includes(moduleName))
return qualifiedMentors.map( mentor => mentor.name)
  
};

console.log(possibleMentorsForModule('javascript'));

/**
 * Tjebbe wants to make it even easier for himself.
 * Fill in this function that chooses a random mentor to teach the given module.
 *
 * It should return a single name.
 */
const findMentorForModule = (moduleName) => {
const mentorsForModule = possibleMentorsForModule(moduleName)

 const randomMentor =  Math.floor(Math.random( ) * mentorsForModule.length);
 return mentorsForModule[randomMentor];

  
};

console.log(findMentorForModule('browsers'));