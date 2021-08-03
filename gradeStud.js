  // Grading Students
  function gradingStudents(grades) {
    let newGrades = [];
    grades.forEach(function(grade){
        if(grade < 38 || (grade % 5) < 3) {
            newGrades.push(grade);
            }
        else {
            let i;
            for(i=0;grade > 5; i++){
                grade -= 5;
            }
            newGrades.push((i+1)*5);
            }
    } )
    return newGrades;

}