function gradeGenerator(){
const gradeGenerator = prompt ("marks")
if (gradeGenerator >= 79 && gradeGenerator <= 100){
  console.log("A");
} else if ( gradeGenerator >= 60 && gradeGenerator <= 78){
  console.log("B");
} else if (gradeGenerator >= 49 && gradeGenerator <= 59){
  console.log("C");
} else if (gradeGenerator >= 40 && gradeGenerator <= 48){
  console.log("D")
} else if (gradeGenerator < 40){
  console.log("E")
} else {
  console.log("Invalid!")
}
}
// gradeGenerator()
 
