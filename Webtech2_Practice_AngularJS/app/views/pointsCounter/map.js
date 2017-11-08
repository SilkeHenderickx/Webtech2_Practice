function(doc){
	if(doc.type == 'student'){
		emit("1", doc.grade);
	}
}