/**
 * Created by rensvanw on 8-9-16.
 */
// Opgave 3 //

// BinaryTree Object
function BinaryTree() {


    this.Nodes = new Array();
    this.level = 0;
    this.node = 0;

    // Oude Get en Set methodes

    /*this.setNode=function(value,level,node){
     this.Nodes[this.btSMF(level,node)]=value;
     }
     this.getNode=function(level,node){
     return this.Nodes[this.btSMF(level,node)];
     }*/

    this.setNode = function (value, level, node) {
        if (level === undefined) {
            this.Nodes[this.btSMF(this.level, this.node)] = value;
        } else {
            this.Nodes[this.btSMF(level, node)] = value;
        }
    }

    this.getNode = function (level, node) {
        if (level === undefined) {
            return this.Nodes[this.btSMF(this.level, this.node)];
        } else {
            return this.Nodes[this.btSMF(level, node)];
        }
    }

    this.root = function (value) {
        this.level = 0;
        this.node = 0;
        if (value !== undefined) {
            this.Nodes[this.btSMF(this.level, this.node)] = value;
        }
        return this.Nodes[this.btSMF(this.level, this.node)];
    }

    this.leftChild = function (value) {
        this.level++;
        this.node = this.node * 2;
        if (value !== undefined) {
            this.Nodes[this.btSMF(this.level, this.node)] = value;
        }
        return this.Nodes[this.btSMF(this.level, this.node)];
    }

    this.rightChild = function (value) {
        this.level++;
        this.node = this.node * 2 + 1;
        if (value !== undefined) {
            this.Nodes[this.btSMF(this.level, this.node)] = value;
        }
        return this.Nodes[this.btSMF(this.level, this.node)];
    }

    this.parent = function (value) {
        this.level--;
        this.node = this.node >> 1;
        if (value !== undefined) {
            this.Nodes[this.btSMF(this.level, this.node)] = value;
        }
        return this.Nodes[this.btSMF(this.level, this.node)];
    }

    this.btSMF = function (level, node) {
        return node + (1 << level) - 1;
    }

}

tree = new BinaryTree();
tree.setNode(1, 0, 0);
tree.setNode(2, 1, 0);
tree.setNode(3, 1, 1);
tree.setNode(4, 2, 0);
tree.setNode(5, 2, 1);
tree.setNode(6, 2, 2);
tree.setNode(7, 2, 3);

//console.log(tree.getNode(2,1));

/*console.log(tree.root());
 console.log(tree.rightChild());
 console.log(tree.rightChild());
 console.log(tree.parent());
 console.log(tree.leftChild());
 console.log(tree.rightChild());*/

function traverse() {
    console.log(tree.getNode());
    if (tree.leftChild() !== undefined)traverse();
    tree.parent();
    if (tree.rightChild() !== undefined)traverse();
    tree.parent();
}

tree.root();
traverse();