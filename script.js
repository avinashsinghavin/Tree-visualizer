var arr = [];
var arr_left_right_space = [];
var array_length = 32;
var total_node = 1;

function addvalue() {
	for(var i = 0; i < array_length; i++)
		arr[i] = (Math.floor((Math.random() * 1000) + 1));
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
	for(var i = 0;  i  < array_length; i++) {
		div.innerHTML += arr[i] + " ";
		await sleep(timing*100);
	}
}
//=============== End of InOrder Function ====================

function msg(){  
    alert("Hello Avinash");  
}
function General_Tree() {
	addvalue();
	for(var i = 0; i < array_length; i++)
		console.log(arr[i]);
	let llist = new SinglyLinkedList();
    for (let i = 1; i < array_length; i++) {
    	var data = document.getElementById(i.toString()).innerHTML;
    	if(data.includes('<br>') || data != parseInt(data).toString()){
    		alert("Inserted Data is not in Correct Format");
    		break;
    	}
    	//console.log(parseInt(data));
        llist.insertNode(data, i.toString());
    }
    var tableadd  = "<table border='1'>";
    arr_left_right_space[0] = 0;
    for(var i = 0; i < 5; i++)
    	arr_left_right_space[i + 1] = (arr_left_right_space[i] * 2) + 1;
    // Generating Table
    for(var i = 0, a = 0; i < 5; i++) {
    	tableadd += "<tr>";
    	console.log(arr_left_right_space[4 - i]);
    	for(var j = 0; j < arr_left_right_space[5 - i]; j++)
    		tableadd += "<td>=</td>";
    	if(i == 0) 
    		tableadd += '<td style=" border: 1pt solid black;"><span contentEditable="true" id="1">'+arr[a++]+'</span></td>';
    	else {
    		tableadd += '<td style=" border: 1pt solid black;"><span contentEditable="true" id="1">'+arr[a++]+'</span></td>';
    		for(var j = 0; j < total_node; j++)
    				tableadd += "<td></td>"
				tableadd += '<td style=" border: 1pt solid black;"><span contentEditable="true" id="1">'+arr[a++]+'</span></td>';
		}
    	for(var j = 0; j < arr_left_right_space[5 - i]; j++)
    		tableadd += "<td></td>";
    	tableadd += "</td>";
    }
    tableadd += "</table>";
    document.getElementById("Generate_Table").innerHTML = tableadd;
    // Table Work Completed.
  	console.log("=============================");
    /*let node = llist.head;
    while (node != null) {
        //console.log(String(node.data));
        node = node.next;
    }
    */
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
