function addGrade(){
	
	var name = $("#name").val();
	var course = $("course").val();
	var grade = $("#grade").val();
	
	var doc = {};
	
	doc.name = name;
	doc.course = course;
	doc.grade = parseInt(grade);
	doc.type = 'student';
	
	var json = JSON.stringify(doc);
	console.log(json);
	
	$.ajax({
		type: 'PUT',
		url: '../../' + name,
		data: json,
		contentType: 'application/json',
		async: true,
		success: function(data){
			console.log(data);
		},
		error: function(XMLHttpRequest, textStatus, errorThrown){
			console.log(errorThrown);
		}
	});
}

function checkGrades(){
	var grades;
	
	var ALL_DOCS = '../../_all_docs?include_docs=true';
	var POINTS_COUNTER = '_view/pointsCounter';
	
	$.ajax({
		type: 'GET',
		url: POINTS_COUNTER + '?reduce=false',
		contentType: 'application/json',
		async: true,
		success: function(data){
			console.log(data);
			var arr = JSON.parse(data).rows;
			console.log(arr);
			var htmlString = '<ul>';
			for(var i=0;i<arr.length;i++){
				
				if(arr[i].doc.type === 'student'){
					var doc = arr[i].doc;
					htmlString += '<li>Name: ' + doc.name+ ', Course: ' + doc.course+ ', Grade: ' + doc.grade +'</li>';
				}
				
			}
			htmlString += '</ul>';
			console.log(htmlString);
			$("#grades").html(htmlString);
		},
		error: function(XMLHttpRequest, textStatus, errorThrown){
			console.log(errorThrown);
		}
	});
}