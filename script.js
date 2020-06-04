var arr = [];
function addvalue() {
	for(var i = 0; i < 31; i++)
		arr.push(Math.floor((Math.random() * 1000) + 1));
}
const SinglyLinkedListNode = class {
    constructor(nodeData, id) {
        this.data = nodeData;
        this.next = null;
        this.id = id;
    }
};

const SinglyLinkedList = class {
    constructor() {
        this.head = null;
        this.tail = null;
        this.id = "";
    }
    insertNode(nodeData, nodeid) {
        const node = new SinglyLinkedListNode(nodeData, nodeid);
        if (this.head == null) {
            this.head = node;
        } else {
            this.tail.next = node;
        }
        this.tail = node;
    }
};
//===================== Class Node =========================
const Node = class {
    constructor(nodeData, id) {
        this.data = nodeData;
        this.left = null;
        this.right = null;
        this.id = id;
    }
};

const insert = class {
    constructor() {
        this.head = null;
        this.left = null;
        this.right = null;
        this.id = "";
    }
    insertNode(nodeData, nodeid) {
        const node = new Node(nodeData, nodeid);
        if (this.head == null) {
            this.head = node;
        } else {
        	if(nodeData < this.node.data);
            // this.tail.next = node;
        }
        this.tail = node;
    }
};
//==================speed slider ============================
var timing = 5;
function updateSlider(slideAmount) {
    var sliderDiv = document.getElementById("displaySpeed");
    sliderDiv.innerHTML = (slideAmount / 10);
    timing = slideAmount;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
//=============== Speed Slide ================================
//=============== InOrder Tree Traversal =====================
async function InorderTraversal() {

}

async function Inorder() {
	var div = document.getElementById('printing');
	for(var i = 0;  i  < 10; i++) {
		div.innerHTML += i;
		await sleep(timing*100);
	}
}
//=============== End of InOrder Function ====================

function msg(){  
    alert("Hello Avinash");  
}  
function General_Tree() {
	addvalue();
	var maxi = 32;
	let llist = new SinglyLinkedList();
    for (let i = 1; i < maxi; i++) {
    	var data = document.getElementById(i.toString()).innerHTML;
    	if(data.includes('<br>') || data != parseInt(data).toString()){
    		alert("Inserted Data is not in Correct Format");
    		break;
    	}
    	console.log(parseInt(data));
        llist.insertNode(data, i.toString());
    }
  	console.log("=============================");
    let node = llist.head;
    while (node != null) {
        console.log(String(node.data));
        node = node.next;
    }
	// var height1 = 3;
	// var width1 = 3;	
	// var tree = document.getElementById('General_Tree');
	// var arr = [];
	// var div = '';
	// for(var i = 0; i < height1; i++) {
	// 	arr[i] = [];
	// 	for(var j = 0; j < width1; j++) {
	// 		if(j == 0)
	// 			arr[i][j] = '<div class="circle_hide">a';
	// 		else
	// 			arr[i][j] = '</div><div class="circle_display">';
	// 	}
	// 	if(i < height1 - 1)
	// 		div += arr[i] +'</div><br><div class="circle_show">';
	// 	else div += arr[i] +'</div>';
	// }
	// tree.innerHTML += div;
	// //tree.innerHTML += "asfdsaf";
	// //tree.style.color = "red";  
}
function BinaryTree() {
	alert("BinaryTree");
}
function Binary_Search_Tree() {
	alert("Binary_Search_Tree");
}
function AVL_Tree() {
	alert("AVL_Tree");
}
function Red_Black_Tree() {
	alert("Red_Black_Tree");
}
function N_ary_Tree() {
	alert("N_ary_Tree");
}
