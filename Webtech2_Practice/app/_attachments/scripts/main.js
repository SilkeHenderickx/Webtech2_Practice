function addGrade(){
	
	var name = $("#name").val();
	var course = $("course").val();
	var grade = $("#grade").val();
	
	var doc = {};
	
	doc.name = name;
	doc.course = course;
	doc.grade = grade;
	doc.type = 'student';
	
	var json = JSON.stringify(doc);
	console.log(json);
	
	
}