var line = document.getElementById("line");
var c1 = document.getElementById("1_");
var c2 = document.getElementById("2_");
var c3 = document.getElementById("3_");
var c4 = document.getElementById("4_");
var c5 = document.getElementById("5_");
var c6 = document.getElementById("6_");

grid = [c1.innerText, c2.innerText, c3.innerText, c4.innerText, c5.innerText, c6.innerText]
//alert(grid)

// Switch
function SWI(m,z){
  a = z[0]
	b = z[1]
	c = z[2]
	d = z[3]
	e = z[4]
	f = z[5]
	
	if(m == 1){
    z[0] = d
		z[1] = c
		z[2] = b
		z[3] = a
  }
	
	else if(m == 2){
		z[1] = e
		z[2] = d
		z[3] = c
		z[4] = b
  }

	else{
		z[2] = f
		z[3] = e
		z[4] = d
		z[5] = c
  }
}

// Re Assign
function REA(g,z){
  for(let i = 0; i < g.length;i++){
    g[i] = z[i]
  }
}

// Recieve
function RE(inp){
  switch(inp){
    
  }
}