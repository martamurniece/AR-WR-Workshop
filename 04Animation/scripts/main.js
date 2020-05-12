

// changing individual properties with code and using setInterval

var rotationSpeed = 0.05;
var positionSpeed = 0.05;
var scaleSpeed = 0.01;
var myOtherBox = document.getElementById('myOtherBox');

function spin() {
	myOtherBox.object3D.rotation.x -= rotationSpeed;
	myOtherBox.object3D.rotation.y -= rotationSpeed * 2;
	myOtherBox.object3D.rotation.z -= rotationSpeed * 3;
	myOtherBox.object3D.position.z -= positionSpeed;
	myOtherBox.object3D.scale.y -= scaleSpeed * 3;
	myOtherBox.object3D.scale.x -= scaleSpeed * 2;
	myOtherBox.object3D.scale.z -= scaleSpeed * 2;
}
function flipSpeeds() {
	rotationSpeed = -rotationSpeed;
	positionSpeed = -positionSpeed;
	scaleSpeed = -scaleSpeed;
}

setInterval(spin, 16); //equivalent to 60 fps
setInterval(flipSpeeds, 5000);