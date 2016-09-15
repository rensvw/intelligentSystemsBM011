/**
 * Created by rensvanw on 8-9-16.
 */
// Opgave 3 //

// BinaryTree Object
// Storage mapping function
function BinaryTree() {


    this.Nodes = [];
    this.level = 0;
    this.node = 0;

    this.setNode = function (value, level, node) {
        if (level === undefined) {
            this.Nodes[this.btSMF(this.level, this.node)] = value;
        } else {
            this.Nodes[this.btSMF(level, node)] = value;
        }
    };

    this.getNode = function (level, node) {
        if (level === undefined) {
            return this.Nodes[this.btSMF(this.level, this.node)];
        } else {
            return this.Nodes[this.btSMF(level, node)];
        }
    };

    this.root = function (value) {
        this.level = 0;
        this.node = 0;
        if (value !== undefined) {
            this.Nodes[this.btSMF(this.level, this.node)] = value;
        }
        return this.Nodes[this.btSMF(this.level, this.node)];
    };

    this.leftChild = function (value) {
        this.level++;
        this.node = this.node * 2;
        if (value !== undefined) {
            this.Nodes[this.btSMF(this.level, this.node)] = value;
        }
        return this.Nodes[this.btSMF(this.level, this.node)];
    };

    this.rightChild = function (value) {
        this.level++;
        this.node = this.node * 2 + 1;
        if (value !== undefined) {
            this.Nodes[this.btSMF(this.level, this.node)] = value;
        }
        return this.Nodes[this.btSMF(this.level, this.node)];
    };

    this.parent = function (value) {
        this.level--;
        this.node = this.node >> 1;
        if (value !== undefined) {
            this.Nodes[this.btSMF(this.level, this.node)] = value;
        }
        return this.Nodes[this.btSMF(this.level, this.node)];
    };

    this.btSMF = function (level, node) {
        return node + (1 << level) - 1;
    }

}

tree = new BinaryTree();
tree.setNode(7, 0, 0);
tree.setNode(4, 1, 0);
tree.setNode(3, 1, 1);
tree.setNode(6, 2, 0);
tree.setNode(2, 2, 1);
tree.setNode(1, 2, 2);
tree.setNode(8, 2, 3);


let value = tree.getNode();

function traverse() {
    let newValue = tree.getNode();
    if (value > newValue) {
        value = tree.getNode();
    }
    console.log("Smallest found value = ", value);
    if (tree.leftChild() !== undefined) {
        traverse();
    }
    tree.parent();
    if (tree.rightChild() !== undefined) {
        traverse();
    }
    tree.parent();

}



tree.root();
traverse();