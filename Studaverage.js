let classA = [{name :'Roland', mark: 15},{name :'Adi', mark: 18},{name :'Yvette', mark: 6},{name :'Chris', mark: 8},{name :'Raphaela', mark: 12}];
let average = function (students) {
    for(i=0; i< students.length; i++) {
        let student = students[i];
        if(student.mark >= 10) {
            console.log(`${student.name} pass the test`);
        }
        else
        console.log(`${student.name} fail the test`)
    }
}
average(classA );