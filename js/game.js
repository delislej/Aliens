var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.x = 2;
camera.position.y = 1;
camera.position.z = 20;

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
controls = new THREE.OrbitControls( camera, renderer.domElement);
// end template here

// instantiate a listener 
var audioListener = new THREE.AudioListener();

// add the listener to the camera
camera.add( audioListener );

// instantiate audio object
var pickup = new THREE.Audio( audioListener );
var death = new THREE.Audio( audioListener );

// add the audio object to the scene
scene.add( pickup );
scene.add( death);

// instantiate a loader
var loader = new THREE.AudioLoader();
var loader2 = new THREE.AudioLoader();

// load a resource
loader.load(
    // resource URL
    'file:///C:/Users/delis/Google%20Drive/CSUEB%20compsci/CS%20455/js/sounds/eat.wav',
    // Function when resource is loaded
    function ( audioBuffer ) {
        // set the audio object buffer to the loaded object
        pickup.setBuffer( audioBuffer );

        // play the audio
        //pickup.play();
        
    },
    // Function called when download progresses
    function ( xhr ) {
        console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
    },
    // Function called when download errors
    function ( xhr ) {
        console.log( 'An error happened' );
    }
	);
	
	// load a resource
loader2.load(
    // resource URL
    'file:///C:/Users/delis/Google%20Drive/CSUEB%20compsci/CS%20455/js/sounds/death.mp3',
    // Function when resource is loaded
    function ( audioBuffer ) {
        // set the audio object buffer to the loaded object
        death.setBuffer( audioBuffer );

        
    },
    // Function called when download progresses
    function ( xhr ) {
        console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
    },
    // Function called when download errors
    function ( xhr ) {
        console.log( 'An error happened' );
    }
	);


var score = 0;
var moveflag = 0;
var pointFlag = 1;

var geom = new THREE.BoxGeometry(1000, 1, 1000);
var mat = new THREE.MeshBasicMaterial({color: "grey"});
var cube = new THREE.Mesh(geom, mat);

scene.add(cube);

	
	var Tgeometry = new THREE.TorusGeometry( 1, .5, 16, 100 );
	var Tmaterial = new THREE.MeshBasicMaterial( { color: 0x228B22 } );
	var torus = new THREE.Mesh( Tgeometry, Tmaterial );
	torus.name="vehicle";
	
	var geometry = new THREE.SphereGeometry( 1, 32, 32 );
	var material = new THREE.MeshBasicMaterial( {color: 0x850a00} );
	var sphere = new THREE.Mesh( geometry, material );


sphere.position.y+=2.3;
torus.position.y +=2;
torus.rotation.x = Math.PI/2;


var vehicle = new THREE.Object3D();

vehicle.add(torus);
vehicle.add(sphere);
scene.add( vehicle );

	
	
	var bark = new THREE.MeshBasicMaterial({color: 0xa0522d});
	var trunk = new THREE.CylinderGeometry( .2, .2, 10, 32 );
	var treeStump = new THREE.Mesh(trunk,bark);
	var tree1 = new THREE.Object3D();


	
	
var leafShape = new THREE.ConeBufferGeometry( 1, 2, 10 );
var leafColor = new THREE.MeshBasicMaterial( {color: 0x3a5f0b} );
var treeTop = new THREE.Mesh( leafShape, leafColor );
treeTop.position.y+=5;

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

tree1.add(treeStump);
tree1.add(treeTop);
scene.add(tree1);

tree2 = tree1.clone();
scene.add(tree2);

tree3 = tree1.clone();
scene.add(tree3);


tree4 = tree1.clone();
scene.add(tree4);


tree5 = tree1.clone();
scene.add(tree5);


tree6 = tree1.clone();
scene.add(tree6);



tree7 = tree1.clone();
scene.add(tree7);


tree8 = tree1.clone();
scene.add(tree8);


tree9 = tree1.clone();
scene.add(tree9);


tree10 = tree1.clone();
scene.add(tree10);

randomizeTrees();


var geometry1 = new THREE.SphereGeometry( .5, 32, 32 );
var material1 = new THREE.MeshBasicMaterial( {color: 0xffff00} );
var s1 = new THREE.Mesh( geometry1, material1 );
s1.name="s1";
scene.add( s1 );

var geometry2 = new THREE.SphereGeometry( .5, 32, 32 );
var material2 = new THREE.MeshBasicMaterial( {color: 0xffff00} );
var s2 = new THREE.Mesh( geometry2, material2 );
s2.name="s2";
scene.add( s2 );

var geometry3 = new THREE.SphereGeometry( .5, 32, 32 );
var material3 = new THREE.MeshBasicMaterial( {color: 0xffff00} );
var s3 = new THREE.Mesh( geometry3, material3 );
s3.name="s3";
scene.add( s3 );

var geometry4 = new THREE.SphereGeometry( .5, 32, 32 );
var material4 = new THREE.MeshBasicMaterial( {color: 0xffff00} );
var s4 = new THREE.Mesh( geometry4, material4 );
s4.name="s4";
scene.add( s4 );

var geometry5 = new THREE.SphereGeometry( .5, 32, 32 );
var material5 = new THREE.MeshBasicMaterial( {color: 0xffff00} );
var s5 = new THREE.Mesh( geometry5, material5 );
s5.name="s5";
scene.add( s5 );
	   

var light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light );



tree3.position.x+=10;

scene.add(tree3);


ySpeed = .5;
xSpeed = .5;
var flag =0;
randomizeOrbs();
document.addEventListener("keydown", onDocumentKeyDown, false);
function onDocumentKeyDown(event) {
    var keyCode = event.which;
    if (keyCode == 87) {
        vehicle.position.z -= ySpeed;
		moveflag=1;
		
		
    } else if (keyCode == 83) {
        vehicle.position.z += ySpeed;
		moveflag=1;
		
    } else if (keyCode == 65) {
        vehicle.position.x -= xSpeed;
		moveflag=1;
		
    } else if (keyCode == 68) {
        vehicle.position.x += xSpeed;
		moveflag=1;
		
		
    } else if (keyCode == 32) {
        vehicle.position.set(0, 0, 0);
    }
};


function checkCollision(obj1, obj2)
{


x1 =obj1.position.x;
x2 =obj2.position.x;

z1 =obj1.position.z;
z2 =obj2.position.z;

i =x2-x1;

i=i*i;
j = z2-z1;

j=j*j;

test=Math.sqrt((i+j));

if(test<2)
{

return true;
}
else
{
return false;
}

}
var count =0;
function checkAll()
{
if(checkCollision(vehicle,tree1))
	{
	return 1;
	}
	if(checkCollision(vehicle,tree2))
	{
	return 1;
	}
	if(checkCollision(vehicle,tree3))
	{
	return 1;
	}
	if(checkCollision(vehicle,tree4))
	{
	return 1;
	}
	if(checkCollision(vehicle,tree5))
	{
	return 1;
	}
	if(checkCollision(vehicle,tree6))
	{
	return 1;
	}
	if(checkCollision(vehicle,tree7))
	{
	return 1;
	}
	if(checkCollision(vehicle,tree8))
	{
	return 1;
	}
	if(checkCollision(vehicle,tree9))
	{
	return 1;
	}
	if(checkCollision(vehicle,tree10))
	{
	return 1;
	}
	if(checkCollision(vehicle,s1))
	{
		
	moveEntity(s1);
	score+=5;
	pointFlag=1;
	pickup.play();
	}
	if(checkCollision(vehicle,s2))
	{
	
	moveEntity(s2);
	score+=5;
	pointFlag=1;
	pickup.play();
	
	}
	if(checkCollision(vehicle,s3))
	{
	
	moveEntity(s3);
	score+=5;
	pointFlag=1;
	pickup.play();
	}
	if(checkCollision(vehicle,s4))
	{
	
	moveEntity(s4);
	score+=5;
	pointFlag=1;
	pickup.play();
	}
	if(checkCollision(vehicle,s5))
	{
	
	moveEntity(s5);
	score+=5;
	pointFlag=1;
	pickup.play();
	}
	return 0;
}

function moveEntity(object) {
    var selectedObject = object;
    
	
	selectedObject.position.x=getRandomArbitrary(-25,25);
    selectedObject.position.z=getRandomArbitrary(-25,25);
    
}


function health(input)
{
if(count ==1)
{

torus.material.color.setHex(0xFFFF00);
}
if(count ==2)
{

torus.material.color.setHex(0xFF0000);
}


}

function randomizeTrees()
{
	moveEntity(tree1);
	moveEntity(tree2);
	moveEntity(tree3);
	moveEntity(tree4);
	moveEntity(tree5);
	moveEntity(tree6);
	moveEntity(tree7);
	moveEntity(tree8);
	moveEntity(tree9);
	moveEntity(tree10);
}




function randomizeOrbs()
{
	moveEntity(s1);
	moveEntity(s2);
	moveEntity(s3);
	moveEntity(s4);
	moveEntity(s5);
	
	s1.position.y=2;
	s2.position.y=2;
	s3.position.y=2;
	s4.position.y=2;
	s5.position.y=2;
}

var render = function() {
  requestAnimationFrame(render);
          
		 
        if(checkAll() && moveflag==1)
		{
		moveflag=0;
		death.play();
		torus.material.color.setHex(0x167769);
		count++;
		health(count);
		}
		
		if(count >= 3)
		{
		
		
		alert("Game over!"+"your score is: "+score);
		randomizeOrbs();
		randomizeTrees();
		count =0;
		score = 0;
		moveflag=0;
		}
		if(score%25==0 && score!=0 && pointFlag==1)
		{
			randomizeTrees();
			pointFlag=0;
		}
		
  
  renderer.render(scene, camera);
};


render();
